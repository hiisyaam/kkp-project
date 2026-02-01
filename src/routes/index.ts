//import hono
import { Hono } from 'hono';

//import controller
import { getUser } from '../Controllers/User';

//inistialize router
const router = new Hono()

//routes posts index
router.get('/', (c) => getUser(c));
export const Routes = router;