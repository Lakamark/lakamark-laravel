import type { AppConfig } from '@/frontend/dom/AppConfig';
import { parseConfig } from '@/frontend/dom/parseConfig';

const DEFAULT_CONFIG_SELECTOR = '#lmk-config';

/**
 * Loads the frontend application configuration from the DOM.
 *
 * By default, it reads the JSON content from the `#lmk-config`
 * script element injected by Laravel.
 *
 * @param selector - DOM selector used to find the config script element.
 *
 * @throws Error When the config element is missing.
 * @throws Error When the config element is empty.
 * @throws Error When the config JSON is invalid.
 */
export function loadConfig(
    selector: string = DEFAULT_CONFIG_SELECTOR
): AppConfig {
    const element = document.querySelector<HTMLScriptElement>(selector);

    if (!element) {
        throw new Error('Missing application config element.');
    }

    const rawConfig = element.textContent?.trim();

    if (!rawConfig) {
        throw new Error('Missing application config content.');
    }

    return parseConfig(rawConfig);


}