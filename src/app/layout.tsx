import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalThemeWrapper from '@/lib/GlobalThemeWrapper'
import { cookies } from 'next/headers'
import DefaultLayout from '@layout/DefaultLayout'
export const metadata: Metadata = {
  title: 'Boilerplate Next + Typescript',
  description: 'TypeScript, ReactJS, NextJS e Styled Components',
  icons: {
    icon: '/assets/img/favicon.svg'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
}
export default function RootLayout({ children }: TChildProps) {
  const theme = cookies().get('theme')
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <>
            <DefaultLayout ssrCookieTheme={theme?.value ?? 'dark'}>
              {children}
            </DefaultLayout>
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
