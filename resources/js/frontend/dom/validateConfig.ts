import type { AppConfig } from '@/frontend/dom/AppConfig';

/**
 * Validates the frontend application configuration.
 *
 * @param config - Parsed application configuration.
 *
 * @throws Error When the configuration is invalid.
 */
export function validateConfig(config: AppConfig): void {
    assertRequired(config.app.name, 'application name');
    assertRequired(config.app.env, 'application environment');
    assertRequired(config.routes.home, 'home route');
}

/**
 * Ensures a configuration value exists.
 *
 * @param value - Value to validate.
 * @param field - Human-readable field name.
 *
 * @throws Error When the value is empty.
 */
function assertRequired(
    value: unknown,
    field: string,
): asserts value {
    if (!value) {
        throw new Error(`Missing ${field}.`);
    }
}