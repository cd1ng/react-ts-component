import React, { memo, useContext } from 'react'
import classNames from 'classnames';
import { TabsContext } from "./tabs"

export interface TabItemProps {
  index: number;
  label: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const TabItem: React.FC<TabItemProps> = memo((props) => {
  const { index, label, disabled, className, style, children } = props
  const context = useContext(TabsContext)
  const classes = classNames('tab-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'number')) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
})

TabItem.displayName = 'TabItem'
export default TabItem