import React, { memo, createContext, useState, CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem';

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  children?: ReactNode;
  onSelect?: SelectCallback;
}

interface MenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<MenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = memo((props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('my-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: MenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index })
      } else {
        console.error("Warning:Menu has a child which not a MenuItem component")
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
})

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu