import { setConsoleOptions } from '@storybook/addon-console'
import { configure } from '@storybook/react'

setConsoleOptions({ panelExclude: [] })

const req = require.context('../stories', true, /.stories.tsx$/)
const loadStories = () => {
  req.keys().forEach(f => req(f))
}

configure(loadStories, module)
