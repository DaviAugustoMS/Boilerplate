// import { addDecorator } from '@storybook/react'
import GlobalStyles from '../src/styles/globals'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
