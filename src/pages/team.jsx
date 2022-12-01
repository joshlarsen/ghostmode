import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'

import Slider from 'react-slick'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
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
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
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
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

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
        stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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


function Newsletter() {
  return (
    <div>
      <form
        action="/thank-you"
        className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Stay up to date</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Get notified about <span className="text-teal-500 font-bold">Ghost</span> news, unsubscribe at any time.
        </p>
        <div className="mt-6 flex">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
          <Button type="submit" className="ml-4 flex-none">
            Notify me
          </Button>
        </div>
      </form>
    </div>
  )
}

function Jobs() {
  let jobs = [
    {
      company: 'Sr. Software Engineer, Platform',
      title: 'Remote',
      logo: logoPlanetaria,
      team: 'Engineering',
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Software Engineer, Platform',
      title: 'Remote',
      logo: logoAirbnb,
      team: 'Engineering',
      start: '2014',
      end: '2019',
    },
    {
      company: 'Sr. Software Engineer, Frontend',
      title: 'Remote',
      logo: logoFacebook,
      team: 'Engineering',
      start: '2011',
      end: '2014',
    },
    {
      company: 'Threat Research Engineer',
      title: 'Remote',
      logo: logoStarbucks,
      team: 'Engineering',
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Careers</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {jobs.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <span>{role.team}</span>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/careers" variant="secondary" className="group mt-6 w-full">
        All open positions
        <ArrowRightIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  const { useState } = React
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2','rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2','rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2',]
  let team = [brad, david, don, eric, greg, jack, jay, jen, joel, josh, luis, megan, stevie, yuri]
  const [teamArray, updateTeamArray] = useState(team)

  const onClick = () => {
    updateTeamArray( arr => [...arr.slice(1), arr[0]])
    console.log('clicky')
    console.log('team', teamArray)

    setTimeout(onClick, 4000)
  }

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-x-scroll py-4 sm:gap-8">
        {teamArray.map((image, _) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[2/3] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-56 sm:rounded-2xl',
              rotations[team.indexOf(image)]
            )}
          >
            <Image
              onClick={ onClick }
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

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Ghost Security - The modern application security platform
        </title>
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
            Founded by career cyber security professions and multiple time & supported by experts in the security industry, the combination of deep knowledge and proven success create the perfect recipe to bring this game-changing technology to market. 
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
            <Jobs />
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
      articles: (await getAllArticles())
        .slice(0, 3)
        .map(({ component, ...meta }) => meta),
    },
  }
}
