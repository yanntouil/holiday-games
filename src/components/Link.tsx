/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Link as WouterLink, type LinkProps as WouterLinkProps } from "wouter"

/**
 * Link
 */
export type LinkProps = WouterLinkProps
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ className, children, ...props }, ref) => {
  return (
    <WouterLink {...props}>
      <a className={className} ref={ref}>
        {children}
      </a>
    </WouterLink>
  )
})
export default Link
