import { AppRunner } from '@/frontend/core';
import { TestModule } from '@/tests/frontend/fixtures';

describe('AppRunner', () => {
    it('registers modules', () => {
        const app = new AppRunner();

        app.register(new TestModule());

        expect(app.getModules()).toHaveLength(1);
    });

    it('mounts registered modules in registration order', () => {
        const calls: string[] = [];

        const first = new TestModule({
            onMount: () => calls.push('first'),
        });

        const second = new TestModule({
            onMount: () => calls.push('second'),
        });

        new AppRunner().register(first).register(second).mount();

        expect(calls).toEqual(['first', 'second']);
    });
});
