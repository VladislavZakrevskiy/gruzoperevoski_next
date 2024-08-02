import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import styles from './Typography.module.scss'
import { Colors } from '@/components/types/Colors'

interface TitleProps extends HTMLAttributes<HTMLElement> {
    color?: Colors
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    size?: number
}

export const Title: FC<TitleProps> = ({ size, tag: Tag = 'h1', color, children, className, ...otherProps }) => {
    return (
        <Tag
            style={{ fontSize: size }}
            className={classNames(styles.title, styles[color || ''], className)}
            {...otherProps}
        >
            {children}
        </Tag>
    )
}
