import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Newsletter } from '@/components/Newsletter'
import { Jobs } from '@/components/Jobs'
import brad from '@/images/photos/team/brad.png'
import david from '@/images/photos/team/david.png'
import don from '@/images/photos/team/don.png'
import eric from '@/images/photos/team/eric.jpeg'
import greg from '@/images/photos/team/greg.jpeg'
import jack from '@/images/photos/team/jack.jpg'
import jay from '@/images/photos/team/jay.png'
import jen from '@/images/photos/team/jen.png'
import joel from '@/images/photos/team/joel.png'
import josh from '@/images/photos/team/josh.jpg'
import luis from '@/images/photos/team/luis.png'
import megan from '@/images/photos/team/megan.png'
import stevie from '@/images/photos/team/stevie.png'
import yuri from '@/images/photos/team/yuri.png'
import chuck from '@/images/photos/team/chuck.png'
import sean from '@/images/photos/team/sean.png'
import owen from '@/images/photos/team/owen.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { getAllJobs } from '@/lib/getAllJobs'
import { formatDate } from '@/lib/formatDate'
import { useEffect } from 'react'

let sliderSetupTimeout, sliderTimeout, removerTimeout

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

function Photos() {
  const { useState, useRef } = React
  const inputRef = useRef(null)

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
    'rotate-2',
    '-rotate-2',
  ]
  let team = [
    greg,
    josh,
    eric,
    don,
    david,
    brad,
    yuri,
    stevie,
    luis,
    jay,
    joel,
    sean,
    jack,
    megan,
    chuck,
    jen,
    owen,
  ]
  const [teamArray, updateTeamArray] = useState(team)

  const slidePhotos = () => {
    if (inputRef.current) {
      // let element = document.getElementById('teamPhotos').children[0]
      let element = inputRef.current.children[0]

      // Use the transition property to create a smooth animation
      element.style.transition = 'opacity 1s, transform 2s, width 1s, margin 1s'

      let offset = 32

      // small screens
      if (window.screen.width < 640) {
        offset = 20
      }

      // calculate shift amount
      let gapWidth = offset * 1
      let width = element.scrollWidth
      let shift = `${(width + gapWidth) * -1}px`

      // decrease the element's scale and margin
      element.style.transform = 'scaleX(0)'
      element.style.marginLeft = shift

      removerTimeout = setTimeout(() => {
        // remove first item and push a new item
        updateTeamArray((arr) => [...arr.slice(1), arr[0]])
      }, 1100)

      sliderTimeout = setTimeout(() => {
        slidePhotos()
      }, 3000)
    }
  }

  useEffect(() => {
    // start the slider
    sliderSetupTimeout = setTimeout(() => {
      slidePhotos()
    }, 2000)

    // cleanup
    return () => {
      clearTimeout(sliderSetupTimeout)
      clearTimeout(sliderTimeout)
      clearTimeout(removerTimeout)
    }
  }, [])

  return (
    <div className="mt-16 sm:mt-20">
      <div
        ref={inputRef}
        id="teamPhotos"
        className="teamPhotos -my-4 flex gap-5 overflow-hidden py-4 sm:gap-8"
      >
        {teamArray.map((image, idx) => (
          <div
            key={`${image.src}${idx}`}
            className={clsx(
              'relative aspect-[2/3] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 duration-1000 dark:bg-zinc-800 sm:w-56 sm:rounded-2xl',
              rotations[team.indexOf(image)]
            )}
          >
            <Image
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
      <SimpleLayout
        title="Meet the Ghost team."
        intro="Ghost Security is founded by career cyber security professionals, multiple time founders,
        and senior security leaders. The founding team is supported by security industry experts and veterans.
        The Ghost team's combination of deep domain knowledge and proven success create the perfect recipe
        to bring this game-changing technology to market."
      ></SimpleLayout>
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
