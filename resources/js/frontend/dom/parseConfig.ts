import type { AppConfig } from '@/frontend/config';
import {
    assertBoolean,
    assertNullableNumber,
    assertNullableString,
    assertString,
    isRecord
} from '@/frontend/dom/validators';

/**
 * Parses and validates an unknown configuration object into a typed AppConfig.
 *
 * This function acts as the boundary between the untrusted JSON injected
 * by Blade and the typed frontend application.
 *
 * @throws Error
 */
export function parseConfig(
    value: unknown,
): AppConfig {
    if (!isRecord(value)) {
        throw new Error('Invalid config: root value must be an object.');
    }

    const app = assertRecord(value.app, 'app');
    const user = assertRecord(value.user, 'user');
    const routes = assertRecord(value.routes, 'routes');
    const apiEndpoints = assertRecord(value.apiEndpoints, 'apiEndpoints');
    const features = assertRecord(value.features, 'features');

    const account = assertRecord(
        routes.account, 'routes.account'
    );

    return {
        app: {
            name: assertString(app.name, 'app.name'),
            env: assertString(app.env, 'app.env'),
            locale: assertString(app.locale, 'app.locale'),
        },

        user: {
            id: assertNullableNumber(user.id, 'user.id'),
            username: assertNullableString(user.username, 'user.username'),
            role: assertNullableString(user.role, 'user.role'),
            theme: assertNullableString(user.theme, 'user.theme'),
            language: assertString(user.language, 'user.language'),
            isLogged: assertBoolean(user.isLogged, 'user.isLogged'),
            isStaff: assertBoolean(user.isStaff, 'user.isStaff'),
            canAccessDashboard: assertBoolean(
                user.canAccessDashboard,
                'user.canAccessDashboard',
            ),
        },

        routes: {
            home: assertString(routes.home, 'routes.home'),
            account: {
                login: assertString(account.login, 'routes.account.login'),
                logout: assertString(account.logout, 'routes.account.logout'),
                register: assertString(account.register, 'routes.account.register'),
                dashboard: assertString(account.dashboard, 'routes.account.dashboard'),
            },
        },

        apiEndpoints: Object.fromEntries(
            Object.entries(apiEndpoints).map(([key, endpoint]) => [
                key,
                assertString(endpoint, `apiEndpoints.${key}`),
            ]),
        ),

        features: {
            darkMode: assertBoolean(features.darkMode, 'features.darkMode'),
            accountMenu: assertBoolean(features.accountMenu, 'features.accountMenu'),
        },
    };
}

/**
 * Ensures a configuration section is a valid object record.
 *
 * @throws Error
 */
function assertRecord(
    value: unknown,
    key: string,
): Record<string, unknown> {
    if (!isRecord(value)) {
        throw new Error(`Invalid config: "${key}" must be an object.`);
    }

    return value;
}