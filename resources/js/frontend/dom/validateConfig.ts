import type { AppConfig } from '@/frontend/dom/AppConfig';

/**
 * Validates the frontend application configuration.
 *
 * @param config - Parsed application configuration.
 *
 * @throws Error When the configuration is invalid.
 */
export function validateConfig(config: AppConfig): void {
    if (!config.app.name) {
        throw new Error('Missing application name.');
    }

    if (!config.app.env) {
        throw new Error('Missing application environment.');
    }

    if (!config.routes.home) {
        throw new Error('Missing home route.');
    }
}
