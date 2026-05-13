import { describe, expect, it, vi, beforeEach } from 'vitest';

import { TurboKernel } from '@/frontend/application';
import type { AppRunner } from '@/frontend/core';

describe('TurboKernel', () => {
    let app: Pick<AppRunner, 'mount' | 'destroy'>;

    beforeEach(() => {
        app = {
            mount: vi.fn(),
            destroy: vi.fn(),
        };
    });

    it('mounts the application when booting', () => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();

        expect(app.mount).toHaveBeenCalledOnce();
    });

    it('re-mounts the application on turbo:load', () => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();

        vi.clearAllMocks();

        document.dispatchEvent(new Event('turbo:load'));

        expect(app.destroy).toHaveBeenCalledOnce();
        expect(app.mount).toHaveBeenCalledOnce();
    });

    it('destroys the application on turbo:before-cache', () => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();

        vi.clearAllMocks();

        document.dispatchEvent(new Event('turbo:before-cache'));

        expect(app.destroy).toHaveBeenCalledOnce();
    });

    it('removes listeners when stopped', () => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();
        kernel.stop();

        vi.clearAllMocks();

        document.dispatchEvent(new Event('turbo:load'));
        document.dispatchEvent(new Event('turbo:before-cache'));

        expect(app.mount).not.toHaveBeenCalled();
        expect(app.destroy).not.toHaveBeenCalled();
    });

    it('does not boot twice', () => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();
        kernel.boot();

        expect(app.mount).toHaveBeenCalledOnce();
    });

    it('does not stop twice', () => {
        const kernel = new TurboKernel(app as AppRunner);

        kernel.boot();

        vi.clearAllMocks();

        kernel.stop();
        kernel.stop();

        expect(app.destroy).toHaveBeenCalledOnce();
    });
});
