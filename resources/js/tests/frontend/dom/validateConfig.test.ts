import type { AppConfig } from '@/frontend/dom';
import { validateConfig } from '@/frontend/dom';
import { createAppConfig } from '@/tests/fixtures';

describe('validateConfig', (): void => {
    it('accepts a valid configuration', (): void => {
        const config: AppConfig = createAppConfig();

        expect((): void => validateConfig(config)).not.toThrow();
    });

    it('throws when the application name is missing', (): void => {
        const config: AppConfig = createAppConfig();

        config.app.name = '';

        expect((): void => validateConfig(config)).toThrow(
            'Missing application name.',
        );
    });

    it('throws when the application environment is missing', (): void => {
        const config: AppConfig = createAppConfig();

        config.app.env = '';

        expect((): void => validateConfig(config)).toThrow(
            'Missing application environment.',
        );
    });

    it('throws when the home route is missing', (): void => {
        const config: AppConfig = createAppConfig();

        config.routes.home = '';

        expect((): void => validateConfig(config)).toThrow(
            'Missing home route.',
        );
    });
});
