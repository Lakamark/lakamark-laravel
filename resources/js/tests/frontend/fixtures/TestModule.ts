import { AbstractModule } from '@/frontend/core';

type TestModuleOptions = {
    onMount?: () => void;
    onDestroy?: () => void;
};

/**
 * Test frontend module fixture.
 */
export class TestModule extends AbstractModule {
    public constructor(private readonly options: TestModuleOptions = {}) {
        super();
    }

    protected onMount(): void {
        this.options.onMount?.();
    }

    protected onDestroy(): void {
        this.options.onDestroy?.();
    }
}
