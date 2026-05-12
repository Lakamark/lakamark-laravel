/**
 * Global frontend application configuration injected from Laravel Blade.
 *
 * This configuration object is serialized into the DOM using:
 *
 * <script id="lmk-config" type="application/json">
 *     ...
 * </script>
 *
 * The object is loaded and validated at runtime through `loadConfig()`
 * before being consumed by the frontend application.
 */
export type AppConfig = {
    /**
     * General application metadata.
     */
    app: {
        /**
         * Application display name.
         */
        name: string;

        /**
         * Current application environment.
         *
         * Example:
         * - local
         * - production
         * - testing
         */
        env: string;

        /**
         * Current application locale.
         */
        locale: string;
    };

    /**
     * Authenticated user state and preferences.
     */
    user: {
        /**
         * Authenticated user identifier.
         *
         * Returns null when the visitor is not authenticated.
         */
        id: number | null;

        /**
         * Public username displayed in the interface.
         *
         * Returns null when the visitor is not authenticated.
         */
        username: string | null;

        /**
         * Current user role identifier.
         *
         * Returns null for guests.
         */
        role: string | null;

        /**
         * Preferred user theme.
         *
         * Returns null when no explicit theme is configured.
         */
        theme: string | null;

        /**
         * Preferred user language.
         */
        language: string;

        /**
         * Indicates whether the visitor is authenticated.
         */
        isLogged: boolean;

        /**
         * Indicates whether the current user is considered staff.
         */
        isStaff: boolean;

        /**
         * Indicates whether the current user can access
         * the dashboard application.
         */
        canAccessDashboard: boolean;
    };

    /**
     * Frontend application routes exposed from Laravel.
     */
    routes: {
        /**
         * Public website homepage route.
         */
        home: string;

        /**
         * Account related routes.
         */
        account: {
            /**
             * Login page route.
             */
            login: string;

            /**
             * Logout endpoint route.
             */
            logout: string;

            /**
             * Registration page route.
             */
            register: string;

            /**
             * Dashboard homepage route.
             */
            dashboard: string;
        };
    };

    /**
     * API endpoints exposed to the frontend.
     *
     * This object allows the backend to dynamically expose
     * URLs without hardcoding them in JavaScript.
     */
    apiEndpoints: Record<string, string>;

    /**
     * Frontend feature flags.
     */
    features: {
        /**
         * Enables dark mode support.
         */
        darkMode: boolean;

        /**
         * Enables account dropdown/menu integrations.
         */
        accountMenu: boolean;
    };
};
