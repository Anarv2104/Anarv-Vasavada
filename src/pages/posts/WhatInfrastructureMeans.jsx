import PostLayout from '../../components/PostLayout'
import { mdxComponents } from '../../components/mdxComponents.jsx'
import Content, { meta } from '../../content/posts/what-infrastructure-actually-means.mdx'

export default function WhatInfrastructureMeans() {
  return (
    <PostLayout meta={meta}>
      <Content components={mdxComponents} />
    </PostLayout>
  )
}