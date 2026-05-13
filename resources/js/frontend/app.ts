import '@hotwired/turbo';
import { createApp, TurboKernel } from '@/frontend/application';

const app = createApp();

const kernel = new TurboKernel(app);

kernel.boot();