import type { AppConfig} from '@/frontend/dom';
import { loadConfig } from '@/frontend/dom';
import { mountAppConfig } from '@/tests/fixtures';

describe('loadConfig', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    it('loads the config from the default DOM element', () => {
        mountAppConfig();

        const config: AppConfig = loadConfig();

        expect(config.app.name).toBe('LakaMark');
        expect(config.app.locale).toBe('fr');
        expect(config.routes.account.dashboard).toBe('/dashboard');
    });

    it('throws when the config element is missing', (): void => {
        expect(() => loadConfig()).toThrow(
            'Missing required element: "#lmk-config".',
        );
    });

    it('throws when the config element is empty', (): void => {
        document.body.innerHTML = `
            <script id="lmk-config" type="application/json"></script>
        `;

        expect(() => loadConfig()).toThrow(
            'Missing config content.',
        );
    });
});
