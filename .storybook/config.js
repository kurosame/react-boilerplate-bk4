import { configure } from '@storybook/react'

const req = require.context('../stories', true, /.stories.tsx$/)
const loadStories = () => {
  req.keys().forEach(f => req(f))
}

configure(loadStories, module)
