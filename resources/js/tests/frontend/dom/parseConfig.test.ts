import type { AppConfig } from '@/frontend/dom';
import { parseConfig } from '@/frontend/dom';
import { createAppConfig } from '@/tests/fixtures';

describe('parseConfig', (): void => {
    it('parses a valid JSON config', (): void => {
        const json = JSON.stringify(createAppConfig());

        const config: AppConfig = parseConfig(json);

        expect(config.app.name).toBe('LakaMark');
        expect(config.user.isLogged).toBe(false);
        expect(config.routes.account.login).toBe('/login');
    });

    it('throws when JSON is invalid', (): void => {
        expect((): AppConfig => parseConfig('{invalid-json')).toThrow(
            'Invalid application config JSON.',
        );
    });
});
