<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecentTracksResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return array_map(function ($v) {
            return [
                'album' => ['image' => $v->track->album->images[2]->url ?? ''],
                'artists' => array_map(fn($_v) => ['id' => $_v->id, 'name' => $_v->name], $v->track->artists),
                'duration_ms' => $v->track->duration_ms,
                'name' => $v->track->name,
                'uri' => $v->track->uri,
            ];
        }, $this->items);
    }
}
