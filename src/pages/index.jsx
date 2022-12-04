import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import { Jobs } from '@/components/Jobs'
import dnx from '@/images/logos/dnx.png'
import foursixeight from '@/images/logos/468.png'
import munichre from '@/images/logos/munichre.svg'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { getAllJobs } from '@/lib/getAllJobs'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read more</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Investors() {
  return (
    <div>
      <h3 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
        Backed by world class investors.
      </h3>
      <div className="mt-4">
        <div className="flex justify-start gap-5 overflow-hidden py-4 sm:gap-8">
          {[foursixeight, dnx, munichre].map((image, _) => (
            <div
              key={image.src}
              className="relative flex aspect-[9/10] w-44 items-center overflow-hidden rounded-xl bg-zinc-800 px-4 dark:bg-zinc-800 sm:w-44 sm:rounded-2xl"
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home({ articles, jobs }) {
  return (
    <>
      <Head>
        <title>Ghost Security - The modern application security platform</title>
        <meta
          name="description"
          content="Ghost is a venture backed, product-led startup building the new standard in application security for the modern enterprise."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            The modern application security platform.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            The Ghost Platform is built from the ground up to enable enterprises
            to bring contextually relevant security insights to their modern
            applications at cloud scale and DevOps speed. Stop chasing false
            positives, vague alerts, and mountains of useless findings.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/ghostsecurityhq"
              aria-label="Follow Ghost on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/company/ghostsecurity/"
              aria-label="Follow Ghost on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/ghostsecurity"
              aria-label="Follow Ghost on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://instagram.com/ghostsecurityhq"
              aria-label="Follow Ghost on Instagram"
              icon={InstagramIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-20">
        <div className="mx-auto flex max-w-xl flex-col justify-between lg:max-w-5xl lg:grid-cols-2 lg:flex-row">
          <Investors />
          <div className="flex max-w-sm items-end pb-4 pt-10 sm:pt-0">
            <Newsletter />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-8 sm:gap-16">
            <h3 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Recent blog posts.
            </h3>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Jobs jobs={jobs} />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      jobs: (await getAllJobs()).slice(0, 5),
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
