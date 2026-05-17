export interface Moderator {
    id: number;
    moderation_status: 'pending' | 'approved' | 'rejected';
}
