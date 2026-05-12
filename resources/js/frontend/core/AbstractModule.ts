import type { AppConfig } from '@/frontend/config';
import type { AppModule } from './contracts';

/**
 * Base class for frontend modules.
 *
 * It prevents double mounting and double destroying while letting concrete
 * modules implement only their own lifecycle behavior.
 */
export abstract class AbstractModule implements AppModule {
    abstract readonly moduleName: string;

    private mounted: boolean = false;

    shouldMount(config: AppConfig): boolean {
        void config;

        return true;
    }

    mount(config: AppConfig): void {
        if (this.mounted) {
            return;
        }

        this.onMount(config);
        this.mounted = true;
    }

    destroy(): void {
        if (!this.mounted) {
            return;
        }

        this.onDestroy();
        this.mounted = false;
    }

    isMounted(): boolean {
        return this.mounted;
    }

    protected abstract onMount(config: AppConfig): void;

    protected abstract onDestroy(): void;
}
