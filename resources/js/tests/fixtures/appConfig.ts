import type { AppConfig } from '@/frontend/dom';

/**
 * Creates a frontend application configuration fixture.
 *
 * @returns Mock frontend application configuration.
 */
export function createAppConfig(): AppConfig {
    return {
        app: {
            name: 'LakaMark',
            env: 'local',
            locale: 'fr',
        },

        user: {
            id: null,
            username: null,
            role: null,
            theme: null,
            language: 'fr',
            isLogged: false,
            isStaff: false,
            canAccessDashboard: false,
        },

        routes: {
            home: '/',
            account: {
                login: '/login',
                logout: '/logout',
                register: '/register',
                dashboard: '/dashboard',
            },
        },

        apiEndpoints: {},

        features: {
            darkMode: true,
            accountMenu: true,
        },
    };
}
