import type { AppContext } from '@/frontend/application';
import type { AppModule } from '@/frontend/core/contracts';

/**
 * Base implementation for frontend application modules.
 *
 * Responsibilities:
 * - Prevent double mounting
 * - Prevent double destruction
 * - Provide lifecycle hooks for subclasses
 * - Track mounted state internally
 *
 * Subclasses should implement:
 * - onMount()
 * - onDestroy()
 *
 * Example:
 * ```ts
 * export class HeaderModule extends AbstractModule {
 *     readonly name = 'header';
 *
 *     protected onMount(context: AppContext): void {
 *         // initialize module
 *     }
 *
 *     protected onDestroy(): void {
 *         // cleanup listeners
 *     }
 * }
 * ```
 */
export abstract class AbstractModule implements AppModule {
    /**
     * Internal mounted state.
     */
    private mounted: boolean = false;

    /**
     * Unique module identifier.
     */
    abstract readonly name: string;

    /**
     * Mounts the module.
     *
     * Prevents duplicate mounting.
     *
     * @param context - Application runtime context.
     */
    mount(context: AppContext): void {
        if (this.mounted) {
            return;
        }

        this.onMount(context);

        this.mounted = true;
    }

    /**
     * Destroys the module.
     *
     * Prevents duplicate destruction.
     */
    destroy(): void {
        if (!this.mounted) {
            return;
        }

        this.onDestroy();

        this.mounted = false;
    }

    /**
     * Returns the current mounted state.
     */
    isMounted(): boolean {
        return this.mounted;
    }

    /**
     * Lifecycle hook executed when the module mounts.
     *
     * @param context - Application runtime context.
     */
    protected abstract onMount(context: AppContext): void;

    /**
     * Lifecycle hook executed when the module is destroyed.
     */
    protected abstract onDestroy(): void;
}
