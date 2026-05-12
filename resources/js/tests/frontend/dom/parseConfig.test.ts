import type { AppConfig} from '@/frontend/dom';
import { parseConfig } from '@/frontend/dom';

describe('parseConfig', () => {
    it('parses a valid JSON config', () => {
        const config: AppConfig = parseConfig(
            JSON.stringify({
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
            }),
        );

        expect(config.app.name).toBe('LakaMark');
        expect(config.user.isLogged).toBe(false);
        expect(config.routes.account.login).toBe('/login');
    });

    it('throws when JSON is invalid', () => {
        expect(() => parseConfig('{invalid-json')).toThrow(
            'Invalid application config JSON.',
        );
    });
});
