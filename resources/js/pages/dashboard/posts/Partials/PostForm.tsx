import type { InertiaFormProps } from '@inertiajs/react';

import {
    BoldToolbarPlugin,
    HeadingToolbarPlugin,
    ItalicToolbarPlugin,
    StarterKitPreset,
} from '@lakamark/modulo-editor';
import { EditorField } from '@/components/FormField/EditorField';
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

            <EditorField
                name="content"
                value={form.data.content}
                classes={{
                    root: 'overflow-hidden rounded-2xl border bg-card',
                    toolbar: 'flex gap-2 border-b p-2',
                    body: 'grid grid-cols-2 gap-4 p-4',
                    input: 'min-h-96 border-l p-4',
                    preview:
                        'prose prose-invert max-w-none min-h-96 border p-4',
                    footer: 'flex gap-2 border-b p-2',
                    status: 'flex gap-2 border-b p-2',
                }}
                presets={[new StarterKitPreset()]}
                plugins={[
                    new BoldToolbarPlugin(),
                    new ItalicToolbarPlugin(),
                    new HeadingToolbarPlugin(1),
                    new HeadingToolbarPlugin(2),
                    new HeadingToolbarPlugin(3),
                ]}
                onChange={(value) => form.setData('content', value)}
            />

            <div className="mt-6">
                <button
                    type="submit"
                    disabled={form.processing}
                    className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:ring-2 focus:outline-none"
                >
                    {submitLabel}
                </button>
            </div>
        </form>
    );
}
