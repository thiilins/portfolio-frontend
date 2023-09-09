import React from 'react'
import { FooterWrapper } from './styles'
import Link from 'next/link'
import SocialIcons from '@components/SocialIcons'
import moment from 'moment'
interface IProps {
  links?: {
    name: string
    url: string
  }[]
  socialLinks?: TSocialLinks
}
export const Footer: React.FC<IProps> = ({ links, socialLinks }) => {
  const year = moment().year()
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME
  const siteUrl = process.env.NEXT_PUBLIC_URL
  return (
    <FooterWrapper>
      <div className="row">
        <SocialIcons {...socialLinks} />
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
        Copyright © {year} <Link href={siteUrl ?? '#'}> {siteName} </Link> -
        All rights reserved | Designed with
        {'  '}
        <i style={{ color: 'red', fontSize: '1.5rem' }}>♥</i> by{' '}
        <Link href="https://thiagolins.dev.br">Thiago Lins</Link>
      </div>
    </FooterWrapper>
  )
}
