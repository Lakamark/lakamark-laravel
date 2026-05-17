import { Link } from '@inertiajs/react';
import { CollectionPagination } from '@/components/collection-pagination';
import { DataTable } from '@/components/data-table';
import {
    DropdownActions,
    DropdownMenuItem,
} from '@/components/dropdown-actions';
import { ModerationActions } from '@/components/dropdown-moderation-actions';
import { StatusBadge } from '@/components/status-badge';
import { withAppLayout } from '@/layouts/app-layout';
import posts, { approve, reject } from '@/routes/dashboard/posts';
import type { BreadcrumbItem, PaginatedCollection, Post } from '@/types';

interface PostsIndexProps {
    collection: PaginatedCollection<Post>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: posts.index().url,
    },
];

function PostsIndex({ collection }: PostsIndexProps) {
    return (
        <div className="space-y-4">
            <DataTable
                collection={collection}
                columns={[
                    { key: 'id', label: 'ID' },
                    { key: 'title', label: 'Title' },
                    {
                        key: 'status',
                        label: 'Status',
                        render: (post) => (
                            <StatusBadge status={post.status}>
                                {post.status}
                            </StatusBadge>
                        ),
                    },
                    {
                        key: 'moderation_status',
                        label: 'Moderation',
                        render: (post) => (
                            <StatusBadge status={post.moderation_status}>
                                {post.moderation_status}
                            </StatusBadge>
                        ),
                    },
                    {
                        key: 'published_at',
                        label: 'Published',
                        render: (post) => post.published_at ?? '—',
                    },
                    {
                        type: 'display',
                        id: 'actions',
                        label: 'Actions',
                        render: (post) => (
                            <DropdownActions>
                                <DropdownMenuItem asChild>
                                    <Link href={posts.edit(post.id).url}>
                                        Edit
                                    </Link>
                                </DropdownMenuItem>

                                <ModerationActions
                                    item={post}
                                    approveUrl={approve(post.id).url}
                                    rejectUrl={reject(post.id).url}
                                />

                                <DropdownMenuItem asChild>
                                    <Link
                                        href={posts.destroy(post.id).url}
                                        method="delete"
                                        as="button"
                                    >
                                        Delete
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownActions>
                        ),
                    },
                ]}
            />
            <CollectionPagination collection={collection} />
        </div>
    );
}

export default withAppLayout(breadcrumbs, PostsIndex);