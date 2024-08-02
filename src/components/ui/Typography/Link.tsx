import classNames from 'classnames'
import { AnchorHTMLAttributes, FC } from 'react'
import styles from './Typography.module.scss'
import { Colors } from '@/components/types/Colors'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

interface LinkProps extends NextLinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    color?: Colors
}

export const Link: FC<LinkProps> = ({ children, color, className, ...otherProps }) => {
    return (
        <NextLink className={classNames(styles.link, styles[color || ''], className)} {...otherProps}>
            {children}
        </NextLink>
    )
}
