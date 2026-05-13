import { createApp } from '@/frontend/application';
import { mountAppConfig } from '@/tests/fixtures';
import { AppRunner } from '@/frontend/core';

describe('createApp', (): void => {
    beforeEach((): void => {
        mountAppConfig();
    });

    it('creates an application runner instance', (): void => {
        const app: AppRunner = createApp();

        expect(app).toBeInstanceOf(AppRunner);
    });
});
