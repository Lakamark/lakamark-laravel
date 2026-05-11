import type { FrontendKernel } from '@/frontend/core/contracts/FrontendKernel';

export class TurboKernel {
    public constructor(private readonly kernel: FrontendKernel) {}

    boot(): void {
        document.addEventListener('DOMContentLoaded', this.handleLoad);
        document.addEventListener('turbo:load', this.handleLoad);
        document.addEventListener('turbo:before-cache', this.handleBeforeCache);
    }

    destroy(): void {
        document.removeEventListener('DOMContentLoaded', this.handleLoad);
        document.removeEventListener('turbo:load', this.handleLoad);
        document.removeEventListener(
            'turbo:before-cache',
            this.handleBeforeCache,
        );

        this.kernel.destroy();
    }

    private readonly handleLoad = (): void => {
        this.kernel.boot();
    };

    private readonly handleBeforeCache = (): void => {
        this.kernel.destroy();
    };
}