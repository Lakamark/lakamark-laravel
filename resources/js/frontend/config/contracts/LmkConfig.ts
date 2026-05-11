import type { ApiEndpointConfig } from './ApiEndpointConfig';
import type { AppConfig } from './AppConfig';
import type { FeatureConfig } from './FeatureConfig';
import type { RouteConfig } from './RouteConfig';
import type { UserConfig } from './UserConfig';

/**
 * Public frontend configuration exposed by Laravel through Blade.
 *
 * This object only contains safe public data intended for
 * frontend components and UI behavior.
 */
export interface LmkConfig {
    app: AppConfig;
    user: UserConfig;
    routes: RouteConfig;
    apiEndpoints: ApiEndpointConfig;
    features: FeatureConfig;
}
