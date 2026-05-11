import type { FrontendKernel } from '@/frontend/core/contracts/FrontendKernel';

export class BrowserKernel implements FrontendKernel {
    private booted = false;

    boot() {
        if (this.booted) {
            return;
        }

        this.booted = true;

        // Future modules here:
        // theme.boot()
        // menu.boot()
        // analytics.boot()
    }

    destroy(): void {
        if (!this.booted) {
            return;
        }

        this.booted = false;

        // Future cleanup here
    }
}