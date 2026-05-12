import type { AppModule } from '@/frontend/core/contracts';

/**
 * Main frontend application runner.
 *
 * Responsible for registering, mounting and destroying
 * application modules.
 */
export class AppRunner {
    /**
     * Registered application modules.
     */
    private readonly modules: AppModule[] = [];

    /**
     * Registers a new application module.
     */
    public register(module: AppModule): this {
        this.modules.push(module);

        return this;
    }

    /**
     * Mounts all registered modules.
     */
    public mount(): void {
        for (const module of this.modules) {
            module.mount();
        }
    }

    /**
     * Destroys all registered modules.
     */
    public destroy(): void {
        for (const module of this.modules) {
            module.destroy();
        }
    }

    /**
     * Returns all registered modules.
     */
    public getModules(): AppModule[] {
        return this.modules;
    }
}
