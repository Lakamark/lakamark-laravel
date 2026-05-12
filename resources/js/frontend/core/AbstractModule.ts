import type { AppModule } from '@/frontend/core/contracts';

/**
 * Base class for all frontend application modules.
 *
 * Provides a controlled lifecycle with mount and destroy guards
 * to prevent invalid state transitions.
 */
export abstract class AbstractModule implements AppModule {
    /**
     * Tracks the mounted state of the module.
     */
    private mounted: boolean = false;

    /**
     * Mounts the module.
     */
    public mount(): void {
        if (this.mounted) {
            return;
        }

        this.onMount();

        this.mounted = true;
    }

    /**
     * Destroys the module.
     */
    public destroy(): void {
        if (!this.mounted) {
            return;
        }

        this.onDestroy();

        this.mounted = false;
    }

    /**
     * Returns whether the module is mounted.
     */
    public isMounted(): boolean {
        return this.mounted;
    }

    /**
     * Internal mount hook.
     */
    protected abstract onMount(): void;

    /**
     * Internal destroy hook.
     */
    protected abstract onDestroy(): void;
}
