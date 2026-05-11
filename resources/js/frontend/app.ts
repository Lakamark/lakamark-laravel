import { loadConfig } from '@/frontend/config/loadConfigure';
import { BrowserKernel } from '@/frontend/core/BrowserKernel';
import { TurboKernel } from '@/frontend/core/TurboKernel';

const config = loadConfig();

const kernel = new TurboKernel(new BrowserKernel())

kernel.boot()

console.log('Loaded config', config);