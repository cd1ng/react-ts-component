import React, { memo, CSSProperties, ReactNode, FC, createContext, useState } from 'react'
import { TabItemProps } from './tabItem'
import classNames from 'classnames';

type SelectCallback = (selectedIndex: number) => void

interface TabsProps {
  defaultIndex?: number
  style?: CSSProperties
  onSelect?: SelectCallback
  children: ReactNode
}

interface TabsContext {
  index: number
  onSelect?: SelectCallback
}
export const TabsContext = createContext<TabsContext>({ index: 0 })

const Tabs: FC<TabsProps> = memo((props) => {
  const { style, onSelect, children, defaultIndex } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('my-tab')
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: TabsContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      const { displayName } = childElement.type
      if (displayName === 'TabItem') {
        return React.cloneElement(childElement, { index })
      } else {
        console.error("Warning:Menu has a child which not a TabItem component")
      }
    })
  }
  return (
    <ul className={classes} style={style}>
      <TabsContext.Provider value={passedContext}>
        {renderChildren()}
      </TabsContext.Provider>
    </ul>
  )
})

Tabs.defaultProps = {
  defaultIndex: 0,
}
Tabs.displayName = 'MyTabs'
export default Tabs