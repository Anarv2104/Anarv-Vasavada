import PostLayout from '../../components/PostLayout'
import { mdxComponents } from '../../components/mdxComponents.jsx'
import Content, { meta } from '../../content/posts/context-is-not-memory.mdx'

export default function ContextIsNotMemory() {
  return (
    <PostLayout meta={meta}>
      <Content components={mdxComponents} />
    </PostLayout>
  )
}