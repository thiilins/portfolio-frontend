import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import { cookies } from 'next/headers'
import BioLinkThemeWrapper from '@layout/BioLinkLayout'
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
export default function BiolinkLayout({ children }: TChildProps) {
  const theme = cookies().get('theme')
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <>
            <BioLinkThemeWrapper ssrCookieTheme={theme?.value ?? 'dark'}>
              {children}
            </BioLinkThemeWrapper>
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
