import type { AppContext } from '@/frontend/application';
import type { DeepPartial } from '@/frontend/shared/types';

export function createContext(
    overrides: DeepPartial<AppContext> = {},
): AppContext {
    const defaults: AppContext = {
        config: {
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
        },
    };

    return {
        ...defaults,
        config: {
            ...defaults.config,
            ...overrides.config,
            app: {
                ...defaults.config.app,
                ...overrides.config?.app,
            },
            user: {
                ...defaults.config.user,
                ...overrides.config?.user,
            },
            routes: {
                ...defaults.config.routes,
                ...overrides.config?.routes,
                account: {
                    ...defaults.config.routes.account,
                    ...overrides.config?.routes?.account,
                },
            },
            apiEndpoints: {
                ...defaults.config.apiEndpoints,
                ...overrides.config?.apiEndpoints,
            } as Record<string, string>,
            features: {
                ...defaults.config.features,
                ...overrides.config?.features,
            },
        },
    };
}
