import type { AppConfig } from '@/frontend/config';
import { DebugModule } from '@/frontend/modules/DebugModule';

const makeConfig = (env: string): AppConfig => ({
    app: {
        name: 'LakaMark',
        env,
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

describe('DebugModule', () => {
    it('can mount in local environment', () => {
        const module = new DebugModule();

        expect(module.shouldMount(makeConfig('local'))).toBe(true);
    });

    it('can mount in testing environment', () => {
        const module = new DebugModule();

        expect(module.shouldMount(makeConfig('testing'))).toBe(true);
    });

    it('does not mount in production environment', () => {
        const module = new DebugModule();

        expect(module.shouldMount(makeConfig('production'))).toBe(false);
    });
});
