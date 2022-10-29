import React, { memo } from 'react'
import Button from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import DoughnutChart from './components/DoughnutChart/DoughnutChart'
import TabItem from './components/Tabs/tabItem'
import Tabs from './components/Tabs/tabs'
const App: React.FC = memo(() => {
  return (
    <>
      <Alert alertType={AlertType.Default} title='标题栏' showClose>213213123213213213213421311111111111111111111111111111111111111111111111111111111111111111111111</Alert>
      <Alert alertType={AlertType.Default} title='标题栏' showClose>你好你哈还啊你的能赛虚拟三星先弄死啊你行啊是你想那是xx你好你哈还啊你的能赛虚拟三星先弄死啊你行啊是你想那是xx你好你哈还啊你的能赛虚拟三星先弄死啊你行啊是你想那是xx你好你哈还啊你的能赛虚拟三星先弄死啊你行啊是你想那是xx</Alert>

      <Button>1211</Button>
      <Menu defaultIndex={0}>
        <MenuItem index={0}>cool link1</MenuItem>
        <MenuItem index={1} disabled>cool link2</MenuItem>
        <MenuItem index={2}>cool link3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem index={3}>1</MenuItem>
          <MenuItem index={4}>2</MenuItem>
          <MenuItem index={5}>3</MenuItem>
        </SubMenu>
      </Menu>
      <Tabs defaultIndex={0}>
        <TabItem index={0} label={'a'}>aaa</TabItem>
        <TabItem index={1} label={'b'}>bbb</TabItem>
        <TabItem index={2} label={'c'}>ccc</TabItem>
        <TabItem index={3} label={'d'}>ddd</TabItem>
      </Tabs>
      <DoughnutChart width={100} height={100} progress={80} />
      <DoughnutChart width={100} height={100} progress={6} />
      <DoughnutChart width={100} height={100} progress={10} />
      <DoughnutChart width={100} height={100} progress={100} />
      <DoughnutChart width={100} height={100} progress={0} />
    </>
  )
})

export default App