import { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './Flex.module.scss'
import classNames from 'classnames'

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    tag?: 'section' | 'div'
    justifyContent?: 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
    alignItems?: 'center' | 'start' | 'end'
    max?: boolean
    gap?: number
    children?: ReactNode
}

export const Flex: FC<
    FlexProps & {
        direction: 'row' | 'column'
    }
> = ({ tag: Tag = 'div', children, max, justifyContent, alignItems, gap, direction, className, ...otherProps }) => {
    return (
        <Tag
            className={classNames(
                styles.flex,
                styles[direction],
                {
                    [styles.max]: max,
                    [styles[`jc-${justifyContent}`]]: Boolean(justifyContent),
                    [styles[`ai-${alignItems}`]]: Boolean(alignItems),
                },
                className
            )}
            style={{ gap }}
            {...otherProps}
        >
            {children}
        </Tag>
    )
}
