import PostLayout from '../../components/PostLayout'
import { mdxComponents } from '../../components/mdxComponents.jsx'
import Content, { meta } from '../../content/posts/building-in-silence.mdx'

export default function BuildingInSilence() {
  return (
    <PostLayout meta={meta}>
      <Content components={mdxComponents} />
    </PostLayout>
  )
}