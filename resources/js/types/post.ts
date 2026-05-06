export type PostIndexItem = {
    id: number;
    title: string;
    slug: string;
    status: 'draft' | 'published' | 'archived';
    published_at: string | null;
};