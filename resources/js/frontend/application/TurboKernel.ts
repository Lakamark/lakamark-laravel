import type { AppRunner } from '@/frontend/core/AppRunner';

/**
 * Connects the frontend application lifecycle
 * to the Turbo lifecycle.
 */
export class TurboKernel {
    /**
     * Creates a new Turbo kernel instance.
     */
    public constructor(private readonly app: AppRunner) {}

    /**
     * Starts the Turbo lifecycle integration.
     */
    public boot(): void {
        document.addEventListener('turbo:load', this.handleLoad);

        document.addEventListener('turbo:before-cache', this.handleBeforeCache);
    }

    /**
     * Stops the Turbo lifecycle integration.
     */
    public stop(): void {
        document.removeEventListener('turbo:load', this.handleLoad);

        document.removeEventListener(
            'turbo:before-cache',
            this.handleBeforeCache,
        );
    }

    /**
     * Handles Turbo load events.
     */
    private readonly handleLoad = (): void => {
        this.app.mount();
    };

    /**
     * Handles Turbo cache lifecycle events.
     */
    private readonly handleBeforeCache = (): void => {
        this.app.destroy();
    };
}
