<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QueueResource extends JsonResource
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
                'album' => ['image' => $v->album->images[2]->url ?? ''],
                'artists' => array_map(fn($_v) => ['id' => $_v->id, 'name' => $_v->name], $v->artists),
                'duration_ms' => $v->duration_ms,
                'name' => $v->name,
                'uri' => $v->uri,
            ];
        }, $this->queue);
    }
}
