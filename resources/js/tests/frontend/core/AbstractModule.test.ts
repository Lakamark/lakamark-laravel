import { TestModule } from '@/tests/frontend/fixtures';

describe('AbstractModule', () => {
    it('mounts the module', () => {
        const module = new TestModule();

        module.mount();

        expect(module.isMounted()).toBe(true);
    });

    it('prevents double mount', () => {
        const module = new TestModule();

        module.mount();
        module.mount();

        expect(module.isMounted()).toBe(true);
    });

    it('destroys the module', () => {
        const module = new TestModule();

        module.mount();
        module.destroy();

        expect(module.isMounted()).toBe(false);
    });

    it('prevents destroying an unmounted module', () => {
        const module = new TestModule();

        module.destroy();

        expect(module.isMounted()).toBe(false);
    });
});