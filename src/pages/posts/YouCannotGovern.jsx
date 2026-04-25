import PostLayout from '../../components/PostLayout'
import { mdxComponents } from '../../components/mdxComponents.jsx'
import Content, { meta } from '../../content/posts/you-cannot-govern-what-you-cannot-trace.mdx'

export default function YouCannotGovern() {
  return (
    <PostLayout meta={meta}>
      <Content components={mdxComponents} />
    </PostLayout>
  )
}