import React from 'react'
import styled, { css } from 'styled-components'
import { ThemeToggle } from 'components/Theme/ThemeToggle'
import { LinkNavigation } from 'components/Link/LinkNavigation'
import { COLORS } from 'consts/themes'
import { MEDIA } from 'consts/breakpoints'
import { SPACINGS } from 'consts/spacings'
import { useRoutes } from 'hooks/useRoutes'
import { Search } from 'components/Search/Search'
import { createGapStyles } from 'utils/createGapStyles'

const ITEM_SPACING_DESKTOP = SPACINGS.CUSTOM(() => 2.8)

const HeaderActionsWrapper = styled.ul`
  display: flex;
  align-items: center;
  line-height: 1.65;

  ${MEDIA.DESKTOP} {
    ${createGapStyles(ITEM_SPACING_DESKTOP, '', 'li')}
  }
`

const Item = styled.li<{ $hiddenAtCompact?: boolean }>`
  display: flex;
  align-items: center;

  ${({ $hiddenAtCompact }) =>
    $hiddenAtCompact &&
    css`
      ${MEDIA.COMPACT} {
        display: none;
      }
    `};
`

const Link = styled(LinkNavigation)`
  color: ${COLORS.TEXT_MEDIUM_CONTRAST};
  display: inline-flex;
  text-align: center;
  padding: ${SPACINGS.ONE} 0;
`

export const HeaderActions = () => {
  const { hierarchical: routes } = useRoutes()

  return (
    <HeaderActionsWrapper>
      <Item $hiddenAtCompact>
        <nav aria-label="Quick Navigation Menu">
          <HeaderActionsWrapper>
            {routes.map((route) => (
              <Item key={route.id}>
                <Link slug={route.slug}>{route.title}</Link>
              </Item>
            ))}
          </HeaderActionsWrapper>
        </nav>
      </Item>
      <Item>
        <Search />
      </Item>
      <Item $hiddenAtCompact>
        <ThemeToggle />
      </Item>
    </HeaderActionsWrapper>
  )
}
