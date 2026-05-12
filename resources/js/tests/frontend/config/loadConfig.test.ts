import { loadConfig } from '@/frontend/dom';

const jsonConfig = {
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

describe('loadConfig', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    it('loads configuration from the default script element', () => {
        document.body.innerHTML = `
            <script id="lmk-config" type="application/json">
                ${JSON.stringify(jsonConfig)}
            </script>
        `;

        const config = loadConfig();

        expect(config.app.name).toBe('LakaMark');
        expect(config.app.locale).toBe('fr');

        expect(config.user.isLogged).toBe(false);

        expect(config.routes.account.login).toBe('/login');

        expect(config.features.darkMode).toBe(true);
    });

    it('loads configuration from a custom script element id', () => {
        document.body.innerHTML = `
            <script id="custom-config" type="application/json">
                ${JSON.stringify(jsonConfig)}
            </script>
        `;

        const config = loadConfig('custom-config');

        expect(config.app.name).toBe('LakaMark');
    });

    it('throws when the config element is missing', () => {
        expect(() => loadConfig()).toThrow(
            'Missing config element: #lmk-config',
        );
    });

    it('throws when the config element is empty', () => {
        document.body.innerHTML = `
            <script id="lmk-config" type="application/json"></script>
        `;

        expect(() => loadConfig()).toThrow('Empty config element: #lmk-config');
    });

    it('throws when the JSON is invalid', () => {
        document.body.innerHTML = `
            <script id="lmk-config" type="application/json">
                { invalid json
            </script>
        `;

        expect(() => loadConfig()).toThrow();
    });
});
