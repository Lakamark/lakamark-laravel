import type { AppConfig } from '@/frontend/config';
import { createAppConfig } from '@/tests/frontend/factories';
import { TestModule } from '@/tests/frontend/fixtures';

describe('AbstractModule', (): void => {
    it('mounts the module', (): void => {
        const config: AppConfig = createAppConfig();
        const module = new TestModule();

        module.mount(config);

        expect(module.isMounted()).toBe(true);
    });

    it('prevents double mount', (): void => {
        const config: AppConfig = createAppConfig();
        const module = new TestModule();

        module.mount(config);
        module.mount(config);

        expect(module.isMounted()).toBe(true);
    });

    it('destroys the module', (): void => {
        const config: AppConfig = createAppConfig();
        const module = new TestModule();

        module.mount(config);
        module.destroy();

        expect(module.isMounted()).toBe(false);
    });

    it('prevents destroying an unmounted module', (): void => {
        const module = new TestModule();

        module.destroy();

        expect(module.isMounted()).toBe(false);
    });
});