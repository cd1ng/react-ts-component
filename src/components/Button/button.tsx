import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC, ReactNode } from 'react'
import classNames from 'classnames';
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}
export enum ButtonShape {
  Rectangular = 'rectangular',
  Round = 'round',
  SmallRound = 'sm-round',
  Heterogeneous = 'heterogeneous'
}
export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  shape?: ButtonShape;
  btnType?: ButtonType;
  children: ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, shape, children, href } = props
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`btn-${shape}`]: shape,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button;