import { AppRunner } from '@/frontend/core';
import { loadConfig } from '@/frontend/dom';

/**
 * Creates and configures the frontend application instance.
 */
export function createApp(): AppRunner {
    loadConfig();

    return new AppRunner();
}