//import context
import { Context } from 'hono'

//import prisma client
import { prisma } from "../../prisma/client/db";

//import user list page
import { UserListPage } from '../Pages/User/UserList';

/**
 * Getting all posts
 */
export const getUser = async (c: Context) => {
    try {
        const user = await prisma.user.findMany();
        return c.html(UserListPage(user))
    } catch (e: unknown) {
        console.error(`Error getting Data Users: ${e}`);
    }
}