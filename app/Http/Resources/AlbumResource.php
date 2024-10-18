<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AlbumResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'image' => $this->images[0]->url,
            'name' => $this->name,
            'artists' => array_map(fn($v) => ['id' => $v->id, 'name' => $v->name], $this->artists),
            'tracks' => array_map(function ($v) {
                return [
                    'artists' => array_map(fn($_v) => ['id' => $_v->id, 'name' => $_v->name], $v->artists),
                    'duration_ms' => $v->duration_ms,
                    'name' => $v->name,
                    'track_number' => $v->track_number,
                    'uri' => $v->uri,
                ];
            }, $this->tracks->items),
        ];
    }
}
