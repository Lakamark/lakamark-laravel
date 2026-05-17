import { Head, useForm } from '@inertiajs/react';


import { withAppLayout } from '@/layouts/app-layout';
import { update } from '@/routes/dashboard/posts';
import type { BreadcrumbItem } from '@/types';
import { PostForm  } from './Partials/PostForm';
import type {PostFormValues} from './Partials/PostForm';

type EditPostData = PostFormValues & {
    id: number;
};

type EditProps = {
    post: EditPostData;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/dashboard/posts',
    },
];

function PostEdit({ post }: EditProps) {
    const form = useForm<PostFormValues>({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        status: post.status,
    });

    return (
        <>
            <Head title={`Edit ${post.title}`} />

            <PostForm
                form={form}
                submitLabel="Update post"
                onSubmit={() => form.put(update(post.id).url)}
            />
        </>
    );
}

export default withAppLayout(breadcrumbs, PostEdit);
