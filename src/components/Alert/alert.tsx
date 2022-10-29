import React, { useRef } from 'react'
import classNames from 'classnames';
export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

export interface AlertAttribute {
  title?: string;
  alertType?: AlertType;
  showClose?: boolean;
  children: React.ReactNode;
}

const Alert: React.FC<AlertAttribute> = (props) => {
  const { title, alertType, showClose, children } = props
  const alert = useRef<null | HTMLDivElement>(null)
  const classes = classNames('alert', {
    [`alert-${alertType}`]: alertType,
    'showClose': showClose
  })
  const handleClose = () => alert.current?.remove()
  return (
    <div className={classes} ref={alert}>
      {title && <p>{title}</p>}
      {showClose && <div onClick={handleClose}></div>}
      {children}
    </div>
  )
}

export default Alert