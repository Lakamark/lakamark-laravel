import type { AppContext } from '@/frontend/application';
import type { AppModule } from '@/frontend/core/contracts';

/**
 * Runs the frontend application modules.
 *
 * The AppRunner is responsible for registering modules and coordinating
 * their lifecycle.
 *
 * It receives a shared application context and passes it to every module
 * during the mount phase.
 */
export class AppRunner {
    /**
     * Registered application modules.
     */
    private readonly modules: AppModule[] = [];

    /**
     * Creates a new application runner.
     *
     * @param context - Shared frontend application context.
     */
    public constructor(private readonly context: AppContext) {}

    /**
     * Registers a module in the application.
     *
     * Modules are mounted in the same order they are registered.
     *
     * @param module - Module to register.
     *
     * @returns The current AppRunner instance for fluent chaining.
     */
    public register(module: AppModule): this {
        this.modules.push(module);

        return this;
    }

    /**
     * Mounts all registered modules.
     *
     * The shared application context is passed to every module.
     */
    public mount(): void {
        this.modules.forEach((module: AppModule): void => {
            module.mount(this.context);
        });
    }

    /**
     * Destroys all registered modules.
     *
     * Modules are destroyed in reverse order to mirror their mounting order.
     */
    public destroy(): void {
        [...this.modules].reverse().forEach((module: AppModule): void => {
            module.destroy();
        });
    }
}