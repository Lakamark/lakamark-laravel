import type { AppConfig } from '@/frontend/config';
import type { AppModule } from './contracts';

/**
 * Application module orchestrator.
 *
 * Responsible for mounting and destroying frontend modules.
 */
export class AppRunner {
    private readonly modules: AppModule[] = [];

    constructor(private readonly config: AppConfig) {}

    /**
     * Registers a module into the application.
     */
    public register(module: AppModule): this {
        this.modules.push(module);

        return this;
    }

    /**
     * Get the registered modules list.
     */
    public getModules(): readonly AppModule[] {
        return [...this.modules];
    }

    /**
     * Mounts all eligible modules.
     */
    public mount(): void {
        for (const module of this.modules) {
            if (module.shouldMount && !module.shouldMount(this.config)) {
                continue;
            }

            module.mount(this.config);
        }
    }

    /**
     * Destroys all mounted modules.
     */
    public destroy(): void {
        for (const module of this.modules) {
            module.destroy();
        }
    }
}
