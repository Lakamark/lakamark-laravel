import type { AppConfig } from '@/frontend/config';
import type { DeepPartial } from '@/tests/frontend/types';

export function createAppConfig(
    overrides: DeepPartial<AppConfig> = {},
): AppConfig {
    const app: AppConfig['app'] = {
        name: overrides.app?.name ?? 'LakaMark',
        env: overrides.app?.env ?? 'testing',
        locale: overrides.app?.locale ?? 'fr',
    };

    const user: AppConfig['user'] = {
        id: overrides.user?.id ?? null,
        username: overrides.user?.username ?? null,
        role: overrides.user?.role ?? null,
        theme: overrides.user?.theme ?? null,
        language: overrides.user?.language ?? 'fr',
        isLogged: overrides.user?.isLogged ?? false,
        isStaff: overrides.user?.isStaff ?? false,
        canAccessDashboard: overrides.user?.canAccessDashboard ?? false,
    };

    const apiEndpoints: AppConfig['apiEndpoints'] = {};

    const routes: AppConfig['routes'] = {
        home: overrides.routes?.home ?? '/',
        account: {
            login: overrides.routes?.account?.login ?? '/login',
            logout: overrides.routes?.account?.logout ?? '/logout',
            register: overrides.routes?.account?.register ?? '/register',
            dashboard: overrides.routes?.account?.dashboard ?? '/dashboard',
        },
    };

    const features: AppConfig['features'] = {
        darkMode: overrides.features?.darkMode ?? true,
        accountMenu: overrides.features?.accountMenu ?? true,
    };

    return {
        app,
        user,
        routes,
        apiEndpoints,
        features,
    };
}