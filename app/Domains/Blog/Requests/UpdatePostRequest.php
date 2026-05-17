<?php

namespace App\Domains\Blog\Requests;

use App\Domains\Blog\Models\Post;
use App\Domains\Content\Enums\PublishStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user can perform this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        /** @var Post $post */
        $post = $this->route('post');

        return [
            'title' => [
                'required',
                'string',
                'max:255',
            ],

            'slug' => [
                'required',
                'string',
                'max:255',

                Rule::unique('posts', 'slug')
                    ->ignore($post),
            ],

            'excerpt' => [
                'nullable',
                'string',
                'max:500',
            ],

            'content' => [
                'required',
                'string',
            ],

            'status' => [
                'required',
                Rule::enum(PublishStatus::class),
            ],

            'published_at' => [
                'nullable',
                'date',
            ],
        ];
    }
}
