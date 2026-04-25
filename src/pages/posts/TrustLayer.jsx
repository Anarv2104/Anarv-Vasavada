import PostLayout from '../../components/PostLayout'
import { mdxComponents } from '../../components/mdxComponents.jsx'
import Content, { meta } from '../../content/posts/the-trust-layer-ai-is-missing.mdx'

export default function TrustLayer() {
  return (
    <PostLayout meta={meta}>
      <Content components={mdxComponents} />
    </PostLayout>
  )
}