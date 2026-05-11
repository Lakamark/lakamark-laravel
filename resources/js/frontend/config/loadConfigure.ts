import type { LmkConfig } from './contracts';
/**
 * DOM element identifier used to expose the public
 * frontend configuration from Blade templates.
 */
const CONFIG_ELEMENT_ID = 'lmk-config';

/**
 * Loads and parses the frontend configuration injected by Laravel.
 *
 * The configuration must be rendered inside:
 *
 * `<script id="lmk-config" type="application/json"></script>`
 *
 * @returns Parsed frontend configuration object.
 *
 * @throws Error When the config element does not exist.
 * @throws Error When the config payload is empty.
 * @throws Error When the config payload is invalid JSON.
 */
export function loadConfig(): LmkConfig {
    const element: HTMLElement| null = document.getElementById(CONFIG_ELEMENT_ID);

    if (!(element instanceof HTMLScriptElement)) {
        throw new Error(
            `Missing frontend config element: #${CONFIG_ELEMENT_ID}.`,
        );
    }

    const content: string = element.textContent?.trim();

    if (!content) {
        throw new Error('Frontend config payload is empty.');
    }

    try {
        return JSON.parse(content) as LmkConfig;
    } catch (error) {
        throw new Error('Invalid frontend config JSON payload.', {
            cause: error,
        });
    }
}