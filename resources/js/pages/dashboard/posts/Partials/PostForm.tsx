import type { InertiaFormProps } from '@inertiajs/react';

import { FormInput, FormTextarea } from '@/components/forms/form-field';

type PostStatus = 'draft' | 'published' | 'archived';

export type PostFormValues = {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    status: PostStatus;
};

type PostFormProps = {
    form: InertiaFormProps<PostFormValues>;
    submitLabel: string;
    onSubmit: () => void;
};

export function PostForm({ form, submitLabel, onSubmit }: PostFormProps) {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit();
            }}
            className="space-y-4"
        >
            <FormInput
                id="title"
                label="Title"
                value={form.data.title}
                onChange={(event) => form.setData('title', event.target.value)}
            />

            <FormInput
                id="slug"
                label="Slug"
                value={form.data.slug}
                onChange={(event) => form.setData('slug', event.target.value)}
            />

            <FormTextarea
                id="excerpt"
                label="Excerpt"
                value={form.data.excerpt}
                onChange={(event) =>
                    form.setData('excerpt', event.target.value)
                }
            />

            <FormTextarea
                id="content"
                label="Content"
                value={form.data.content}
                onChange={(event) =>
                    form.setData('content', event.target.value)
                }
            />

            <button type="submit" disabled={form.processing}>
                {submitLabel}
            </button>
        </form>
    );
}
