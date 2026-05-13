import type { AppConfig } from '@/frontend/dom/AppConfig';

/**
 * Shared frontend application context.
 *
 * The application context acts as the central source of truth
 * shared across the frontend runtime.
 *
 * It provides access to global application services, configuration
 * and shared state used by modules during their lifecycle.
 *
 * The context is created once by the application bootstrap
 * and passed to every module through the AppRunner.
 *
 * This architecture helps:
 * - avoid global variables
 * - improve module decoupling
 * - simplify testing
 * - centralize shared services
 * - preserve state across Turbo visits
 *
 * Additional services can progressively be added to the context:
 * - event bus
 * - logger
 * - API clients
 * - theme manager
 * - feature flags
 * - analytics
 */
export type AppContext = {
    /**
     * Frontend application configuration loaded from the DOM.
     */
    config: AppConfig;
};
