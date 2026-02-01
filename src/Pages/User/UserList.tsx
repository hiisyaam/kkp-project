// src/pages/user/UserList.tsx
import { Layout } from '../../Components/Layout'

export const UserListPage = (users: any[]) => {
  return (
    <Layout>
      <h2 class="text-2xl font-semibold mb-4">User List</h2>

      <table class="w-full border">
        <tr>
          <th class="border p-2">Email</th>
          <th class="border p-2">Name</th>
        </tr>

        {users.map(user => (
          <tr>
            <td class="border p-2">{user.email}</td>
            <td class="border p-2">{user.name}</td>
          </tr>
        ))}
      </table>
    </Layout>
  )
}