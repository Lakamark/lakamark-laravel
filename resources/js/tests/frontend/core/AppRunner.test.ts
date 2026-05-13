import type { AppContext } from '@/frontend/application';
import type { AppModule } from '@/frontend/core/contracts';
import { AppRunner } from '@/frontend/core';

function createAppContext(): AppContext {
    return {
        config: {
            app: {
                name: 'LakaMark',
                env: 'local',
                locale: 'fr',
            },
            user: {
                id: null,
                username: null,
                role: null,
                theme: null,
                language: 'fr',
                isLogged: false,
                isStaff: false,
                canAccessDashboard: false,
            },
            routes: {
                home: '/',
                account: {
                    login: '/login',
                    logout: '/logout',
                    register: '/register',
                    dashboard: '/dashboard',
                },
            },
            apiEndpoints: {},
            features: {
                darkMode: true,
                accountMenu: true,
            },
        },
    };
}

function createModule(name = 'test-module'): AppModule {
    return {
        name,
        mount: vi.fn(),
        destroy: vi.fn(),
    };
}

describe('AppRunner', (): void => {
    it('registers and mounts a module with the application context', (): void => {
        const context = createAppContext();
        const module = createModule();

        const runner = new AppRunner(context);

        runner.register(module);
        runner.mount();

        expect(module.mount).toHaveBeenCalledOnce();
        expect(module.mount).toHaveBeenCalledWith(context);
    });

    it('supports fluent module registration', (): void => {
        const context = createAppContext();
        const firstModule = createModule('first-module');
        const secondModule = createModule('second-module');

        const runner = new AppRunner(context);

        const result = runner.register(firstModule).register(secondModule);

        expect(result).toBe(runner);
    });

    it('mounts modules in registration order', (): void => {
        const context = createAppContext();
        const calls: string[] = [];

        const firstModule: AppModule = {
            name: 'first-module',
            mount: vi.fn((): void => {
                calls.push('first');
            }),
            destroy: vi.fn(),
        };

        const secondModule: AppModule = {
            name: 'second-module',
            mount: vi.fn((): void => {
                calls.push('second');
            }),
            destroy: vi.fn(),
        };

        const runner = new AppRunner(context);

        runner.register(firstModule).register(secondModule).mount();

        expect(calls).toEqual(['first', 'second']);
    });

    it('destroys modules in reverse registration order', (): void => {
        const context = createAppContext();
        const calls: string[] = [];

        const firstModule: AppModule = {
            name: 'first-module',
            mount: vi.fn(),
            destroy: vi.fn((): void => {
                calls.push('first');
            }),
        };

        const secondModule: AppModule = {
            name: 'second-module',
            mount: vi.fn(),
            destroy: vi.fn((): void => {
                calls.push('second');
            }),
        };

        const runner = new AppRunner(context);

        runner.register(firstModule).register(secondModule);

        runner.destroy();

        expect(calls).toEqual(['second', 'first']);
    });
});
