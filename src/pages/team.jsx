import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'
import { Jobs } from '@/components/Jobs'
import brad from '@/images/photos/team/brad.png'
import david from '@/images/photos/team/david.png'
import don from '@/images/photos/team/don.png'
import eric from '@/images/photos/team/eric.png'
import greg from '@/images/photos/team/greg.png'
import jack from '@/images/photos/team/jack.jpg'
import jay from '@/images/photos/team/jay.png'
import jen from '@/images/photos/team/jen.png'
import joel from '@/images/photos/team/joel.png'
import josh from '@/images/photos/team/josh.jpg'
import luis from '@/images/photos/team/luis.png'
import megan from '@/images/photos/team/megan.png'
import stevie from '@/images/photos/team/stevie.png'
import yuri from '@/images/photos/team/yuri.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { getAllJobs } from '@/lib/getAllJobs'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function Photos() {
  const { useState } = React
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ]
  let team = [
    jen,
    stevie,
    jack,
    luis,
    greg,
    josh,
    eric,
    brad,
    jay,
    david,
    don,
    joel,
    megan,
    yuri,
  ]
  const [teamArray, updateTeamArray] = useState(team)

  const onClick = () => {
    // fade first photo out
    // updateTeamArray( arr => [...arr.slice(1), arr[0]])
    updateTeamArray((arr) => [...arr, arr[0]])

    setTimeout(onClick, 4000)
  }

  return (
    <div className="mt-16 sm:mt-20">
      <div className="teamPhotos -my-4 flex justify-center gap-5 overflow-x-scroll py-4 sm:gap-8">
        {teamArray.map((image, idx) => (
          <div
            key={`${image.src}${idx}`}
            className={clsx(
              'relative aspect-[2/3] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 duration-1000 dark:bg-zinc-800 sm:w-56 sm:rounded-2xl',
              rotations[team.indexOf(image)]
            )}
          >
            <Image
              onClick={onClick}
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
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
            Meet the Ghost team.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Founded by career cyber security professions and multiple time &
            supported by experts in the security industry, the combination of
            deep knowledge and proven success create the perfect recipe to bring
            this game-changing technology to market.
          </p>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
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
