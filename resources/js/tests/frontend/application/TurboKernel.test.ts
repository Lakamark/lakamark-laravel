import { beforeEach, describe, expect, it, vi } from 'vitest';

import { TurboKernel } from '@/frontend/application';
import type { AppRunner } from '@/frontend/core';

describe('TurboKernel', (): void => {
    let app: Pick<AppRunner, 'mount' | 'destroy'>;

    beforeEach((): void => {
        app = {
            mount: vi.fn(),
            destroy: vi.fn(),
        };
    });

    it('does not mount the application when booting', (): void => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();

        expect(app.mount).not.toHaveBeenCalled();
    });

    it('re-mounts the application on turbo:load', (): void => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();

        document.dispatchEvent(new Event('turbo:load'));

        expect(app.destroy).toHaveBeenCalledOnce();
        expect(app.mount).toHaveBeenCalledOnce();
    });

    it('destroys the application on turbo:before-cache', (): void => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();

        document.dispatchEvent(new Event('turbo:before-cache'));

        expect(app.destroy).toHaveBeenCalledOnce();
    });

    it('removes listeners when stopped', (): void => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();
        kernel.stop();

        vi.clearAllMocks();

        document.dispatchEvent(new Event('turbo:load'));
        document.dispatchEvent(new Event('turbo:before-cache'));

        expect(app.mount).not.toHaveBeenCalled();
        expect(app.destroy).not.toHaveBeenCalled();
    });

    it('does not register listeners twice', (): void => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();
        kernel.boot();

        document.dispatchEvent(new Event('turbo:load'));

        expect(app.destroy).toHaveBeenCalledOnce();
        expect(app.mount).toHaveBeenCalledOnce();
    });

    it('does not stop twice', (): void => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();

        vi.clearAllMocks();

        kernel.stop();
        kernel.stop();

        expect(app.destroy).toHaveBeenCalledOnce();
    });
});
