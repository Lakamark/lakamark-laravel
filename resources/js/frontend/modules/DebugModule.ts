import type { AppContext } from '@/frontend/application';
import { AbstractModule } from '@/frontend/modules/AbstractModule';

/**
 * Development-only debug module.
 *
 * Responsibilities:
 * - Display a debug badge in local environment
 * - Print the frontend configuration in the browser console
 * - Isolate debug styles with Shadow DOM
 * - Clean up its DOM node on destroy
 */
export class DebugModule extends AbstractModule {
    readonly name = 'debug';

    private element: HTMLElement | null = null;

    protected onMount(context: AppContext): void {
        if (context.config.app.env !== 'local') {
            return;
        }

        console.log('LakaMark Debug', structuredClone(context.config));

        this.mountBadge();
    }

    protected onDestroy(): void {
        this.element?.remove();
        this.element = null;
    }

    /**
     * Mounts the debug badge using Shadow DOM.
     */
    private mountBadge(): void {
        const host = document.createElement('div');

        host.dataset.debugModule = 'true';

        const shadow = host.attachShadow({
            mode: 'open',
        });

        shadow.innerHTML = `
            <style>
                .debug-badge {
                    position: fixed;
                    right: 1rem;
                    bottom: 1rem;
                    z-index: 9999;

                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    padding: 0.5rem 0.75rem;

                    border-radius: 999px;

                    background: #000;
                    color: #fff;

                    font-family: system-ui, sans-serif;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 1;

                    box-shadow:
                        0 4px 12px rgba(0, 0, 0, 0.2);
                }

                .debug-dot {
                    width: 0.5rem;
                    height: 0.5rem;

                    border-radius: 999px;

                    background: #22c55e;
                }
            </style>

            <div class="debug-badge">
                <span class="debug-dot"></span>
                Debug mode
            </div>
        `;

        document.body.appendChild(host);

        this.element = host;
    }
}
