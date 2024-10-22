<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlaybackResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'is_playing' => $this->is_playing ?? false,
            'track' => isset($this->item) ? [
                'album' => [
                    'id' => $this->item->album->id,
                    'image' => $this->item->album->images[0]->url ?? '',
                    'name' => $this->item->album->name,
                    'release_date' => $this->item->album->release_date,
                ],
                'artists' => array_map(fn($v) => ['id' => $v->id, 'name' => $v->name], $this->item->artists),
                'name' => $this->item->name,
            ] : null,
        ];
    }
}
