import type { AppContext } from '@/frontend/application';
import { AbstractModule } from '@/frontend/modules';

class TestModule extends AbstractModule {
    readonly name = 'test';

    protected onMount(): void {}

    protected onDestroy(): void {}
}

describe('AbstractModule', () => {
    it('mounts the module', () => {
        const module = new TestModule();

        module.mount({} as AppContext);

        expect(module.isMounted()).toBe(true);
    });

    it('destroys the module', () => {
        const module = new TestModule();

        module.mount({} as AppContext);
        module.destroy();

        expect(module.isMounted()).toBe(false);
    });

    it('prevents double mount', () => {
        const module = new TestModule();

        const onMount = vi.spyOn(module as never, 'onMount');

        module.mount({} as AppContext);
        module.mount({} as AppContext);

        expect(onMount).toHaveBeenCalledOnce();
    });

    it('prevents double destroy', () => {
        const module = new TestModule();

        const onDestroy = vi.spyOn(module as never, 'onDestroy');

        module.mount({} as AppContext);

        module.destroy();
        module.destroy();

        expect(onDestroy).toHaveBeenCalledOnce();
    });
});
