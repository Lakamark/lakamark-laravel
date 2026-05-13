import { DebugModule } from '@/frontend/modules';
import { createContext } from '@/tests/fixtures';

describe('DebugModule', (): void => {
    beforeEach((): void => {
        document.body.innerHTML = '';
    });

    it('mounts a debug badge in local environment', (): void => {
        const module = new DebugModule();

        module.mount(createContext());

        expect(document.querySelector('[data-debug-module]')).not.toBeNull();
    });

    it('does not mount a debug badge in production', (): void => {
        const module = new DebugModule();

        module.mount(
            createContext({
                config: {
                    app: {
                        env: 'production',
                    },
                },
            }),
        );

        expect(document.querySelector('[data-debug-module]')).toBeNull();
    });

    it('removes the debug badge when destroyed', (): void => {
        const module = new DebugModule();

        module.mount(createContext());
        module.destroy();

        expect(document.querySelector('[data-debug-module]')).toBeNull();
    });
});
