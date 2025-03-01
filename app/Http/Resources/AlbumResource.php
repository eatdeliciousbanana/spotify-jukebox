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
            'album_type' => $this->album_type,
            'total_tracks' => $this->total_tracks,
            'id' => $this->id,
            'image' => $this->images[0]->url ?? '',
            'name' => $this->name,
            'release_date' => $this->release_date,
            'artists' => array_map(fn($v) => ['id' => $v->id, 'name' => $v->name], $this->artists),
            'tracks' => array_map(function ($v) {
                return [
                    'album' => ['image' => $this->images[2]->url ?? ''],
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
