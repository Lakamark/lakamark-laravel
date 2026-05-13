import type { AppContext } from '@/frontend/application';

/**
 * Represents a frontend application module.
 *
 * A module is a small unit of behavior managed by the AppRunner.
 * It can mount itself when the application starts or when Turbo
 * loads a new page, and destroy itself before Turbo caches the page.
 */
export interface AppModule {
    /**
     * Unique module name used for debugging and diagnostics.
     */
    readonly name: string;

    /**
     * Mounts the module.
     *
     * @param context - Shared frontend application context.
     */
    mount(context: AppContext): void;

    /**
     * Destroys the module and releases event listeners or DOM state.
     */
    destroy(): void;
}
