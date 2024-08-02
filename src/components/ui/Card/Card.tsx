import { FC, HTMLAttributes } from 'react'
import styles from './Card.module.scss'
import classNames from 'classnames'
import { Colors } from '@/components/types/Colors'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    max?: boolean
    color?: Colors
    borderWidth?: number
}

export const Card: FC<CardProps> = ({ children, borderWidth, color = 'card', max, className, ...otherProps }) => {
    return (
        <div
            style={{ borderWidth }}
            className={classNames(styles.cardContainer, { [styles.max]: max }, className, styles[color])}
            {...otherProps}
        >
            {children}
        </div>
    )
}
