import { CollectionPagination } from '@/components/collection-pagination';
import { DataTable } from '@/components/data-table';
import { StatusBadge } from '@/components/status-badge';
import { withAppLayout } from '@/layouts/app-layout';
import posts from '@/routes/dashboard/posts';
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
                        key: 'published_at',
                        label: 'Published',
                        render: (post) => post.published_at ?? '—',
                    },
                    {
                        key: 'id',
                        label: 'Actions',
                        render: () => (
                            <div className="flex items-center gap-2">
                                {/* Actions */}
                            </div>
                        ),
                    },
                ]}
            />
            <CollectionPagination collection={collection} />
        </div>
    );
}

export default withAppLayout(breadcrumbs, PostsIndex);