export interface UserConfig {
    id: number | null;
    username: string;
    role: string | null;
    theme: string | null;
    language: string;
    isLogged: boolean;
    isStaff: boolean;
    canAccessDashboard: boolean;
}
