import '@hotwired/turbo';
import { queryRequired } from '@/frontend/dom';

const config = queryRequired<HTMLScriptElement>(
    document, '#lmk-config'
);

console.log(config);