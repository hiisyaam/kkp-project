// src/components/Layout.tsx
import { Header } from './Header'

export const Layout = (props: { children: any }) => {
  return (
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body class="bg-gray-100">
        <Header />
        <main class="p-6">
          {props.children}
        </main>
      </body>
    </html>
  )
}
