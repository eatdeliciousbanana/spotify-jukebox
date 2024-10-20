<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArtistAlbumsResource extends JsonResource
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
                'album_type' => $v->album_type,
                'id' => $v->id,
                'image' => $v->images[0]->url ?? '',
                'name' => $v->name,
                'release_date' => $v->release_date,
            ];
        }, $this->items);
    }
}
