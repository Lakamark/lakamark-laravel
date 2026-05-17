export type UserRole =
    | 'admin'
    | 'moderator'
    | 'editor'
    | 'user';

export interface User {
    id: number;
    username: string;
    email: string;
    role: UserRole;
    language: string;
    theme: string | null;
    last_login: string | null;
    created_at: string | null;
}