import type { AppConfig} from '@/frontend/dom';
import { loadConfig } from '@/frontend/dom';

describe('loadConfig', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    it('loads the config from the default DOM element', () => {
        document.body.innerHTML = `
            <script id="lmk-config" type="application/json">
                {
                    "app": {
                        "name": "LakaMark",
                        "env": "local",
                        "locale": "fr"
                    },
                    "user": {
                        "id": null,
                        "username": null,
                        "role": null,
                        "theme": null,
                        "language": "fr",
                        "isLogged": false,
                        "isStaff": false,
                        "canAccessDashboard": false
                    },
                    "routes": {
                        "home": "/",
                        "account": {
                            "login": "/login",
                            "logout": "/logout",
                            "register": "/register",
                            "dashboard": "/dashboard"
                        }
                    },
                    "apiEndpoints": {},
                    "features": {
                        "darkMode": true,
                        "accountMenu": true
                    }
                }
            </script>
        `;

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
