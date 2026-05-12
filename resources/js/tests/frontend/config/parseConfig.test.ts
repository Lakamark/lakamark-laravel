import { parseConfig } from '@/frontend/dom';

const validConfig = {
    app: {
        name: 'LakaMark',
        env: 'local',
        locale: 'fr',
    },

    user: {
        id: 1,
        username: 'marc',
        role: 'admin',
        theme: null,
        language: 'fr',
        isLogged: true,
        isStaff: true,
        canAccessDashboard: true,
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

describe('parseConfig', () => {
    it('parses a valid configuration object', () => {
        const config = parseConfig(validConfig);

        expect(config.app.name).toBe('LakaMark');
        expect(config.app.env).toBe('local');

        expect(config.user.username).toBe('marc');
        expect(config.user.isStaff).toBe(true);

        expect(config.routes.home).toBe('/');
        expect(config.routes.account.dashboard).toBe('/dashboard');

        expect(config.features.darkMode).toBe(true);
    });

    it('throws when the root value is invalid', () => {
        expect(() => parseConfig(null)).toThrow(
            'Invalid config: root value must be an object.',
        );
    });

    it('throws when the app section is missing', () => {
        expect(() =>
            parseConfig({
                ...validConfig,
                app: null,
            }),
        ).toThrow('Invalid config: "app" must be an object.');
    });

    it('throws when the user section is missing', () => {
        expect(() =>
            parseConfig({
                ...validConfig,
                user: null,
            }),
        ).toThrow('Invalid config: "user" must be an object.');
    });

    it('throws when the routes section is missing', () => {
        expect(() =>
            parseConfig({
                ...validConfig,
                routes: null,
            }),
        ).toThrow('Invalid config: "routes" must be an object.');
    });

    it('throws when the routes.account section is missing', () => {
        expect(() =>
            parseConfig({
                ...validConfig,
                routes: {
                    ...validConfig.routes,
                    account: null,
                },
            }),
        ).toThrow('Invalid config: "routes.account" must be an object.');
    });

    it('throws when the features section is missing', () => {
        expect(() =>
            parseConfig({
                ...validConfig,
                features: null,
            }),
        ).toThrow('Invalid config: "features" must be an object.');
    });

    it('throws when a required string value is invalid', () => {
        expect(() =>
            parseConfig({
                ...validConfig,
                app: {
                    ...validConfig.app,
                    name: 123,
                },
            }),
        ).toThrow('Invalid config value for "app.name".');
    });

    it('throws when a required boolean value is invalid', () => {
        expect(() =>
            parseConfig({
                ...validConfig,
                user: {
                    ...validConfig.user,
                    isLogged: 'yes',
                },
            }),
        ).toThrow('Invalid config value for "user.isLogged".');
    });

    it('throws when a nullable string value is invalid', () => {
        expect(() =>
            parseConfig({
                ...validConfig,
                user: {
                    ...validConfig.user,
                    username: 123,
                },
            }),
        ).toThrow('Invalid config value for "user.username".');
    });

    it('throws when a nullable number value is invalid', () => {
        expect(() =>
            parseConfig({
                ...validConfig,
                user: {
                    ...validConfig.user,
                    id: '1',
                },
            }),
        ).toThrow('Invalid config value for "user.id".');
    });
});
