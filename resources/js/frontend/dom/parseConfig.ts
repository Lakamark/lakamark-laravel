import type { AppConfig } from '@/frontend/dom/AppConfig';

/**
 * Parses a raw JSON application configuration string.
 *
 * This function only handles JSON parsing. It does not read from the DOM.
 *
 * @param rawConfig - Raw JSON string coming from the Blade config script.
 *
 * @throws Error When the JSON string cannot be parsed.
 */
export function parseConfig(rawConfig: string): AppConfig {
    try {
        return JSON.parse(rawConfig) as AppConfig;
    } catch {
        throw new Error('Invalid application config JSON.');
    }
}
