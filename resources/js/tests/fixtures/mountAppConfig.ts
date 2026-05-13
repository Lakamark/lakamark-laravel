import { createAppConfig } from './appConfig';

/**
 * Mounts the frontend application configuration in the DOM.
 *
 * This helper simulates the server-rendered configuration script
 * used by the frontend application bootstrap.
 */
export function mountAppConfig(): void {
    document.body.innerHTML = `
        <script id="lmk-config" type="application/json">
            ${JSON.stringify(createAppConfig())}
        </script>
    `;
}
