import type { AppConfig } from '@/frontend/config';
import { AbstractModule } from '@/frontend/core';

/**
 * Development helper module.
 *
 * This module is only enabled outside production and can be used to expose
 * useful frontend debugging information while developing the application.
 */
export class DebugModule extends AbstractModule {
    readonly moduleName = 'debug';

    shouldMount(config: AppConfig): boolean {
        return config.app.env !== 'production';
    }

    protected onMount(config: AppConfig): void {
        console.log('[DebugModule] mounted', config);
    }

    protected onDestroy(): void {
        console.log('[DebugModule] destroyed');
    }
}
