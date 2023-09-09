import { SocialLinksWrapper } from './styles'
import {
  GrLinkedinOption,
  GrGithub,
  GrInstagram,
  GrFacebookOption
} from 'react-icons/gr'
import React, { memo } from 'react'

const SocialIcons: React.FC<TSocialLinks> = ({
  facebook,
  github,
  instagram,
  linkedin
}) => (
  <SocialLinksWrapper>
    {instagram && (
      <a href={`https://t`} target="_blank">
        <GrInstagram />
      </a>
    )}

    {github && (
      <a href={`https://github.com/${github}`} target="_blank">
        <GrGithub />
      </a>
    )}
    {linkedin && (
      <a href={`https://linkedin.com/in/${linkedin}`} target="_blank">
        <GrLinkedinOption />
      </a>
    )}
    {facebook && (
      <a href={`https://facebook.com/${facebook}`} target="_blank">
        <GrFacebookOption />
      </a>
    )}
  </SocialLinksWrapper>
)

export default memo(SocialIcons)
