import { AppRunner } from '@/frontend/core';
import { createAppConfig } from '@/tests/frontend/factories';
import { TestModule } from '@/tests/frontend/fixtures';
import { AppConfig } from '@/frontend/config';

describe('AppRunner', (): void => {
    it('registers modules', (): void => {
        const app = new AppRunner(createAppConfig());

        app.register(new TestModule());

        expect(app.getModules()).toHaveLength(1);
    });

    it('returns itself when registering modules', (): void => {
        const app = new AppRunner(createAppConfig());

        expect(app.register(new TestModule())).toBe(app);
    });

    it('mounts registered modules in registration order', (): void => {
        const calls: string[] = [];

        const first = new TestModule({
            onMount: () => calls.push('first'),
        });

        const second = new TestModule({
            onMount: () => calls.push('second'),
        });

        new AppRunner(createAppConfig())
            .register(first)
            .register(second)
            .mount();

        expect(calls).toEqual(['first', 'second']);
    });

    it('does not mount modules when shouldMount returns false', (): void => {
        const module = new TestModule({
            shouldMount: () => false,
        });

        new AppRunner(createAppConfig()).register(module).mount();

        expect(module.isMounted()).toBe(false);
    });

    it('passes the config to mounted modules', (): void => {
        const config: AppConfig = createAppConfig({
            app: {
                env: 'testing',
            },
        });

        let receivedEnv: string | null = null;

        const module = new TestModule({
            onMount: (receivedConfig) => {
                receivedEnv = receivedConfig.app.env;
            },
        });

        new AppRunner(config).register(module).mount();

        expect(receivedEnv).toBe('testing');
    });
});
