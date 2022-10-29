import React, { CSSProperties } from "react";
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import Alert, { AlertType } from './alert'

const styles: CSSProperties = {
  textAlign: 'center'
}

const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
const defaultAlert = () => (
  <Alert>Default</Alert>
)

const alertWithType = () => (
  <>
    <Alert alertType={AlertType.Default}>Default Alert</Alert>
    <Alert alertType={AlertType.Danger}>Danger Alert</Alert>
    <Alert alertType={AlertType.Success}>small Alert</Alert>
    <Alert alertType={AlertType.Warning}>Success Alert</Alert>
  </>
)

storiesOf('Alert', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: '提示菜单',
      inline: true
    }
  })
  .add('默认Alert', defaultAlert)
  .add('不同类型Alert', alertWithType)
