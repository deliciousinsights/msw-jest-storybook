import Post from './Post'

export default {
  title: 'Posts/Detail',
}

const Template = (args) => Post(args)

export const Regular = Template.bind({})
Regular.args = { id: 1 }
