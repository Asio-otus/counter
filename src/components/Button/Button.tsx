import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './Button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type PropsType = DefaultButtonPropsType & {
    disabled?: boolean
}

export const Button: React.FC<PropsType> = ({
    disabled,
    ...restProps
}) => {

    let buttonStyle = () => {
        return disabled ? s.disabled : ''
    }

    return (
        <button className={`${s.btn} ${buttonStyle()}`}
                disabled={disabled}
                {...restProps}
        />
    )
}