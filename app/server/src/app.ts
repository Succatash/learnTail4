import createApp from '@/lib/create-app.ts';
import {user} from '@/routes/user/user.routes.ts';
import {openApi} from '@/routes/user/create-open-api.ts';

const app = createApp();

const routes = [user, openApi] as const;

routes.forEach((route) => {
	return app.route('/', route);
});

export default app;
