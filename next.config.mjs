import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },

  async redirects() {
    return [
      {
        source: '/blog/author/ghost',
        destination: '/blog',
        permanent: false,
      },
      {
        source: '/blog/tag/:slug',
        destination: '/blog',
        permanent: false,
      },
      {
        source: '/company',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/three-guys-and-some-tacos-ready-to-change-the-world',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/skeletons',
        destination: '/blog/skeletons-in-your-app-sec-closet',
        permanent: true,
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
