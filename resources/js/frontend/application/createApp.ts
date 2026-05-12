import type { AppConfig } from '@/frontend/config';
import { AppRunner } from '@/frontend/core';
import { loadConfig } from '@/frontend/dom';
import { DebugModule } from '@/frontend/modules';

/**
 * Creates and configures the frontend application instance.
 */
export function createApp(): AppRunner {
    const config: AppConfig = loadConfig();

    return new AppRunner(config)
        .register(new DebugModule());
}