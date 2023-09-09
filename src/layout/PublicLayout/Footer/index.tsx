import React from 'react'
import { FooterWrapper } from './styles'
import Link from 'next/link'
import SocialIcons from '@components/SocialIcons'
import moment from 'moment'

import socials from '@constants/socialLinks'
import links from '@constants/footerLinks'
import Image from 'next/image'
import Logo from '@shared/svg/Logo'
export const Footer: React.FC = () => {
  const year = moment().year()
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME
  const siteUrl = process.env.NEXT_PUBLIC_URL
  return (
    <FooterWrapper>
      <div className="row">
        <Logo className="footer_logo" />
      </div>
      <div className="row">
        <SocialIcons {...socials} />
      </div>
      <div className="row">
        <ul>
          {links &&
            links.map(({ name, url }, index) => (
              <li key={`footer_link_${index}`}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="row copyright">
        Copyright © {year}{' '}
        <Link href={siteUrl ?? '#'}>
          {' '}
          {'  '}
          {siteName}{' '}
        </Link>{' '}
        - All rights reserved | Designed with
        {'  '}
        <i style={{ color: 'red', fontSize: '1.5rem' }}>♥</i>
        {'  '}
        by <Link href="https://thiagolins.dev.br">Thiago Lins</Link>
      </div>
    </FooterWrapper>
  )
}
