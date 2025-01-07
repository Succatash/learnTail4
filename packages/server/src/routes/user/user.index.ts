import {createRouter} from '@/lib/create-app.ts';

import * as handlers from './user.handler.ts';
import * as routes from '@/routes/user/user.route.ts';

const user = createRouter()
	.openapi(routes.userListAll, handlers.list)
	.openapi(routes.create, handlers.create);
// .openapi(routes.getOne, handlers.getOne)
// .openapi(routes.patch, handlers.patch)
// .openapi(routes.remove, handlers.remove);

export default user;
