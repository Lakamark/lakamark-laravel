export interface AppConfig {
    name: string;
    env: 'local' | 'production' | 'testing';
    locale: string;
}