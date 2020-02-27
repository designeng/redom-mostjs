import { listen } from './dispatch';
import Store from '@redom/store';

export const api = (app) => {
    const store = new Store();
    let updating;

    listen(app, {
    	hello (subject) {
    	    set('hello.subject', subject);
    	}
    });

    const set = (path, value) => {
	    store.set(path, value);
	    updating || (updating = window.requestAnimationFrame(() => {
	        updating = false;

	        app.update(store.get());
	    }));
    };
};
