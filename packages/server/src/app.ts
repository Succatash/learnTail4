import {rootRouter} from './routes/root.route.ts';
import createApp from '@/lib/create-app.ts';
import configureOpenAPI from '@/lib/configure-open-api.ts';
import user from '@/routes/user/user.index.ts';

const app = createApp();

configureOpenAPI(app);

//Add these to a root router

app.get('/err', () => {
	throw Error('This is an error');
});

const routes = [rootRouter, user] as const;

app.get('/err', () => {
	throw Error('This is an error');
});

routes.forEach((route) => {
	return app.route('/', route);
});

export default app;
