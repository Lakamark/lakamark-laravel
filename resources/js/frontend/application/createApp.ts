import { AppRunner } from '@/frontend/core';

/**
 * Creates and configures the frontend application instance.
 */
export function createApp(): AppRunner {
    return new AppRunner();
}