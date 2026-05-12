import {
    createApp,
    TurboKernel
} from '@/frontend/application';

const kernel = new TurboKernel(createApp());

// boot the kernel
kernel.boot();