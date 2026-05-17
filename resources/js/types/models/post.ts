import type { User } from '@/types/models/User';
import type { Moderatable } from '../contracts/moderatable';

export type PostStatus = 'draft' | 'published' | 'archived';

export interface Post extends Moderatable {
    title: string;
    slug: string;
    excerpt?: string | null;
    content?: string | null;
    status: PostStatus;
    moderated_by: number | null;
    moderated_at: string | null;
    moderation_note: string | null;
    published_at: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    author?: User | null;
}
