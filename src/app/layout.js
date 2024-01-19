import Background from '@/components/Background/Background'
import { roboto300 } from '@/fonts'
import '@/styles/globals.css'

export const metadata = {
  title: 'Jorge González Dev',
  description: 'Portafolio de proyectos de Jorge González, full stack developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
      </head>
      <body className={roboto300.className}>
        <Background />
        {children}
      </body>
    </html>
  )
}
