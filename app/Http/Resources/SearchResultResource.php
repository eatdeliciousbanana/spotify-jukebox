<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SearchResultResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'artists' => isset($this->artists) ? array_map(function ($v) {
                return [
                    'id' => $v->id,
                    'image' => $v->images[0]->url ?? '',
                    'name' => $v->name,
                ];
            }, $this->artists->items) : [],
            'albums' => isset($this->albums) ? array_map(function ($v) {
                return [
                    'artists' => array_map(fn($_v) => ['id' => $_v->id, 'name' => $_v->name], $v->artists),
                    'id' => $v->id,
                    'image' => $v->images[0]->url ?? '',
                    'name' => $v->name,
                    'release_date' => $v->release_date,
                ];
            }, $this->albums->items) : [],
            'tracks' => isset($this->tracks) ? array_map(function ($v) {
                return [
                    'album' => ['image' => $v->album->images[2]->url ?? ''],
                    'artists' => array_map(fn($_v) => ['id' => $_v->id, 'name' => $_v->name], $v->artists),
                    'duration_ms' => $v->duration_ms,
                    'name' => $v->name,
                    'uri' => $v->uri,
                ];
            }, $this->tracks->items) : [],
        ];
    }
}
