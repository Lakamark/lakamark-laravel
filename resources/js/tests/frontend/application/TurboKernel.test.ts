import { describe, expect, it, vi } from 'vitest';
import { TurboKernel } from '@/frontend/application';
import { AppRunner } from '@/frontend/core';

describe('TurboKernel', () => {
    it('mounts the app on turbo:load', () => {
        const app = new AppRunner();
        const mount = vi.spyOn(app, 'mount');

        const kernel = new TurboKernel(app);

        kernel.boot();

        document.dispatchEvent(new Event('turbo:load'));

        expect(mount).toHaveBeenCalledOnce();

        kernel.stop();
    });

    it('destroys the app on turbo:before-cache', () => {
        const app = new AppRunner();
        const destroy = vi.spyOn(app, 'destroy');

        const kernel = new TurboKernel(app);

        kernel.boot();

        document.dispatchEvent(new Event('turbo:before-cache'));

        expect(destroy).toHaveBeenCalledOnce();

        kernel.stop();
    });

    it('removes listeners when stopped', () => {
        const app = new AppRunner();
        const mount = vi.spyOn(app, 'mount');

        const kernel = new TurboKernel(app);

        kernel.boot();
        kernel.stop();

        document.dispatchEvent(new Event('turbo:load'));

        expect(mount).not.toHaveBeenCalled();
    });
});
