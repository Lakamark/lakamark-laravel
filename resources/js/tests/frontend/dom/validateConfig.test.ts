import type { AppConfig } from '@/frontend/dom';

import { validateConfig } from '@/frontend/dom';

const createValidConfig = (): AppConfig => ({
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
});

describe('validateConfig', () => {
    it('accepts a valid configuration', () => {
        const config = createValidConfig();

        expect(() => validateConfig(config)).not.toThrow();
    });

    it('throws when the application name is missing', () => {
        const config = createValidConfig();

        config.app.name = '';

        expect(() => validateConfig(config)).toThrow(
            'Missing application name.',
        );
    });

    it('throws when the application environment is missing', () => {
        const config = createValidConfig();

        config.app.env = '';

        expect(() => validateConfig(config)).toThrow(
            'Missing application environment.',
        );
    });

    it('throws when the home route is missing', () => {
        const config = createValidConfig();

        config.routes.home = '';

        expect(() => validateConfig(config)).toThrow('Missing home route.');
    });
});
