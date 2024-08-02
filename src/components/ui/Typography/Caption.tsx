import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import styles from './Typography.module.scss'
import { Colors } from '@/components/types/Colors'

interface CaptionProps extends HTMLAttributes<HTMLElement> {
    color?: Colors
}

export const Caption: FC<CaptionProps> = ({ color, children, className, ...otherProps }) => {
    return (
        <caption className={classNames(styles.caption, styles[color || ''], className)} {...otherProps}>
            {children}
        </caption>
    )
}
