import React from "react";
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button, { ButtonSize, ButtonType } from './button'

const styles: React.CSSProperties = {
  textAlign: 'center'
}

const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const defaultButton = () => (
  <Button>Default</Button>
)

const buttonWithSize = () => (
  <>
    <Button size={ButtonSize.Large}>large button</Button>
    <Button size={ButtonSize.Small}>small button</Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType={ButtonType.Default}>Default</Button>
    <Button btnType={ButtonType.Primary}>Primary</Button>
    <Button btnType={ButtonType.Danger}>Danger</Button>
    <Button btnType={ButtonType.Link}>Link</Button>
  </>
)
storiesOf('Button', module)
  .addDecorator(CenterDecorator)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: 'this is a very nice component',
      inline: true
    }
  })
  .add('默认Button', defaultButton)
  .add('不同尺寸的Button', buttonWithSize)
  .add('不同类型的Button', buttonWithType)