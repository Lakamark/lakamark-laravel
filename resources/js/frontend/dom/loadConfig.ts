import type { AppConfig } from '@/frontend/config';
import { parseConfig } from '@/frontend/dom';

/**
 * Loads the frontend application configuration from a JSON script element.
 *
 * @param elementId - DOM id of the script element containing the JSON config.
 *
 * @throws Error
 */
export function loadConfig(elementId = 'lmk-config'): AppConfig {
    const element = document.getElementById(elementId);

    if (!element) {
        throw new Error(`Missing config element: #${elementId}`);
    }

    const content = element.textContent?.trim();

    if (!content) {
        throw new Error(`Empty config element: #${elementId}`);
    }

    return parseConfig(JSON.parse(content));
}
