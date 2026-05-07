export type PostStatus = 'draft' | 'published' | 'archived';

export interface Post {
    id: number;
    title: string;
    slug: string;
    status: PostStatus;
    published_at: string | null;
}
