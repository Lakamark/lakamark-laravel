export interface Moderatable {
    id: number;
    moderation_status: 'pending' | 'approved' | 'rejected';
}
