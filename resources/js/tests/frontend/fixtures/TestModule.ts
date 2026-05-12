import type { AppConfig } from '@/frontend/config';
import { AbstractModule } from '@/frontend/core';

type TestModuleOptions = {
    shouldMount?: (config: AppConfig) => boolean;
    onMount?: (config: AppConfig) => void;
    onDestroy?: () => void;
};

export class TestModule extends AbstractModule {
    moduleName = 'TestModule';

    constructor(private readonly options: TestModuleOptions = {}) {
        super();
    }

    shouldMount(config: AppConfig): boolean {
        return this.options.shouldMount?.(config) ?? true;
    }

    protected onMount(config: AppConfig): void {
        this.options.onMount?.(config);
    }

    protected onDestroy(): void {
        this.options.onDestroy?.();
    }
}
