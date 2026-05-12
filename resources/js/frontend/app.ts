import {
    createApp,
    TurboKernel
} from '@/frontend/application';
import '@hotwired/turbo';

const kernel = new TurboKernel(createApp());

// boot the kernel
kernel.boot();