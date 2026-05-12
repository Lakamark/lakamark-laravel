import { describe, expect, it, vi } from 'vitest';
import { TurboKernel } from '@/frontend/application';
import type { AppConfig } from '@/frontend/config';
import { AppRunner } from '@/frontend/core';
import { createAppConfig } from '@/tests/frontend/factories';

describe('TurboKernel', (): void => {
    it('mounts the app on turbo:load', (): void => {
        const app = new AppRunner(createAppConfig());
        const mount = vi.spyOn(app, 'mount');

        const kernel = new TurboKernel(app);

        kernel.boot();

        document.dispatchEvent(new Event('turbo:load'));

        expect(mount).toHaveBeenCalledTimes(2);


        kernel.stop();
    });

    it('destroys the app on turbo:before-cache', (): void => {
        const config: AppConfig = createAppConfig();
        const app = new AppRunner(config);
        const destroy = vi.spyOn(app, 'destroy');

        const kernel = new TurboKernel(app);

        kernel.boot();

        document.dispatchEvent(new Event('turbo:before-cache'));

        expect(destroy).toHaveBeenCalledOnce();

        kernel.stop();
    });

    it('removes listeners when stopped', (): void => {
        const app = new AppRunner(createAppConfig());
        const mount = vi.spyOn(app, 'mount');

        const kernel = new TurboKernel(app);

        kernel.boot();
        kernel.stop();

        document.dispatchEvent(new Event('turbo:load'));

        expect(mount).toHaveBeenCalledTimes(1);
    });
});
