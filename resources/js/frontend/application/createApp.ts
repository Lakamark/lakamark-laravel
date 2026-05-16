import type { AppContext } from '@/frontend/application';

import { AppRunner } from '@/frontend/core';
import { loadConfig } from '@/frontend/dom';
import {
    DebugModule,
    HeaderModule
} from '@/frontend/modules';

/**
 * Creates the frontend application instance.
 *
 * The application factory is responsible for:
 * - loading the frontend configuration from the DOM
 * - creating the shared application context
 * - creating the application runner
 * - registering application modules
 *
 * The returned AppRunner instance is later controlled
 * by the TurboKernel lifecycle.
 *
 * @returns Configured frontend application runner.
 */
export function createApp(): AppRunner {
    const config = loadConfig();

    const context: AppContext = {
        config,
    };

    return new AppRunner(context)
        .register(new DebugModule())
        .register(new HeaderModule());
}
