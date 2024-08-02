import classNames from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'
import style from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, ...otherProps }) => {
    return (
        <button className={classNames(style.button, className)} {...otherProps}>
            {children}
        </button>
    )
}
