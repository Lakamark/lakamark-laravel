import { queryRequired } from '@/frontend/dom';

describe('queryRequired', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    it('returns the matching element', () => {
        document.body.innerHTML = `
            <button class="button"></button>
        `;

        const element = queryRequired<HTMLButtonElement>(document, '.button');

        expect(element).toBeInstanceOf(HTMLButtonElement);
    });

    it('throws when the element does not exist', () => {
        expect(() => {
            queryRequired(document, '.missing');
        }).toThrow('Missing required element: ".missing".');
    });
});
