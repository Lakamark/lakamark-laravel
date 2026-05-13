import type { AppKernel } from '@/frontend/application/contracts';
import type { MountableApp } from '@/frontend/core/contracts';

/**
 * Kernel for Turbo-driven frontend applications.
 *
 * Responsibilities:
 * - Mount the application on boot
 * - Re-mount the application after Turbo page loads
 * - Destroy the application before Turbo caches the current page
 * - Remove Turbo listeners when stopped
 *
 * This keeps Turbo lifecycle concerns outside of modules.
 */
export class TurboKernel implements AppKernel {
    private booted: boolean = false;

    public constructor(private readonly app: MountableApp) {}

    private readonly handleLoad = (): void => {
        this.remount();
    };

    private readonly handleBeforeCache = (): void => {
        this.app.destroy();
    };

    /**
     * Starts the Turbo lifecycle.
     */
    public boot(): void {
        if (this.booted) {
            return;
        }

        document.addEventListener('turbo:load', this.handleLoad);
        document.addEventListener('turbo:before-cache', this.handleBeforeCache);

        this.booted = true;
    }

    /**
     * Stops the Turbo lifecycle and removes registered listeners.
     */
    public stop(): void {
        if (!this.booted) {
            return;
        }

        document.removeEventListener('turbo:load', this.handleLoad);
        document.removeEventListener(
            'turbo:before-cache',
            this.handleBeforeCache,
        );

        this.app.destroy();
        this.booted = false;
    }

    /**
     * Re-mounts the application after a Turbo navigation.
     */
    private remount(): void {
        this.app.destroy();
        this.app.mount();
    }
}
