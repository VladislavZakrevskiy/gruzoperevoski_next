import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import styles from './Typography.module.scss'
import { Colors } from '@/components/types/Colors'

interface ParagraphProps extends HTMLAttributes<HTMLElement> {
    color?: Colors
}

export const Paragraph: FC<ParagraphProps> = ({ children, color, className, ...otherProps }) => {
    return (
        <p className={classNames(styles.paragraph, styles[color || ''], className)} {...otherProps}>
            {children}
        </p>
    )
}
