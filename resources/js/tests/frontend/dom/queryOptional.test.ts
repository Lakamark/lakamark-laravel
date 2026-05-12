import { queryOptional } from '@/frontend/dom';

describe('queryOptional', () => {
    it('returns the matching element', () => {
        document.body.innerHTML = `
            <div class="test"></div>
        `;

        const element = queryOptional<HTMLDivElement>(document, '.test');

        expect(element).toBeInstanceOf(HTMLDivElement);
    });

    it('returns null when the element does not exist', () => {
        const element = queryOptional(document, '.missing');

        expect(element).toBeNull();
    });
});
