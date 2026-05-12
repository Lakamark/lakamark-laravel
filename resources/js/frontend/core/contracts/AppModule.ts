import type { AppConfig } from '@/frontend/config';

/**
 * Represents a frontend module managed by the application runner.
 *
 * A module owns a small part of the frontend behavior and can decide
 * whether it should be mounted depending on the current application config.
 */
export interface AppModule {
    /**
     * Unique module name used for debugging and identification.
     */
    readonly moduleName: string;

    /**
     * Determines whether the module should be mounted.
     *
     * When omitted, the module is considered mountable by default.
     */
    shouldMount?(config: AppConfig): boolean;

    /**
     * Mounts the module.
     */
    mount(config: AppConfig): void;

    /**
     * Destroys the module and cleans up its side effects.
     */
    destroy(): void;
}
