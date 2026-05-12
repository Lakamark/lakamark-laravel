/**
 * Global frontend application configuration.
 *
 * This object is injected by Laravel in the main Blade layout through
 * the `#lmk-config` JSON script element.
 */
export interface AppConfig {
    app: {
        name: string;
        env: string;
        locale: string;
    };

    user: {
        id: number | null;
        username: string | null;
        role: string | null;
        theme: string | null;
        language: string;
        isLogged: boolean;
        isStaff: boolean;
        canAccessDashboard: boolean;
    };

    routes: {
        home: string;

        account: {
            login: string;
            logout: string;
            register: string;
            dashboard: string;
        };
    };

    apiEndpoints: Record<string, string>;

    features: {
        darkMode: boolean;
        accountMenu: boolean;
    };
}
