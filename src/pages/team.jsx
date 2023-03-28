import Image from 'next/image'
import Head from 'next/head'
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
import sergio from '@/images/photos/team/sergio.jpeg'
import joel from '@/images/photos/team/joel.png'
import josh from '@/images/photos/team/josh.jpg'
import megan from '@/images/photos/team/megan.png'
import stevie from '@/images/photos/team/stevie.png'
import yuri from '@/images/photos/team/yuri.png'
import chuck from '@/images/photos/team/chuck.png'
import sean from '@/images/photos/team/sean.png'
import owen from '@/images/photos/team/owen.png'
import robert from '@/images/photos/team/robert.jpg'
import liam from '@/images/photos/team/liam.jpg'
import ivan from '@/images/photos/team/ivan.jpg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { getAllJobs } from '@/lib/getAllJobs'
import { formatDate } from '@/lib/formatDate'
import { useEffect } from 'react'

let sliderSetupTimeout, sliderTimeout, removerTimeout

const linkedInLinks = {
  brad: {
    twitter: 'https://twitter.com/bradgeesaman',
    linkedIn: 'https://www.linkedin.com/in/bradgeesaman/',
  },
  david: { twitter: '#', linkedIn: 'https://www.linkedin.com/in/matslofva/' },
  don: {
    twitter: '#',
    linkedIn: 'https://www.linkedin.com/in/don-campbell79/',
  },
  eric: {
    twitter: '#',
    linkedIn: 'https://www.linkedin.com/in/eric-cornelius-7b08b85/',
  },
  greg: {
    twitter: 'https://twitter.com/gregcmartin',
    linkedIn: 'https://www.linkedin.com/in/gregcmartin/',
  },
  sergio: { twitter: '#', linkedIn: 'https://www.linkedin.com/in/serpulga' },
  joel: {
    twitter: 'https://twitter.com/joelschopp',
    linkedIn: 'https://www.linkedin.com/in/schopp/',
  },
  josh: {
    twitter: 'https://twitter.com/josh_larsen',
    linkedIn: 'https://www.linkedin.com/in/joshlarsen/',
  },
  megan: {
    twitter: 'https://twitter.com/meganHorner00',
    linkedIn: 'https://www.linkedin.com/in/meganhorner/',
  },
  stevie: { twitter: '#', linkedIn: 'https://www.linkedin.com/in/slpocina/' },
  yuri: {
    twitter: '#',
    linkedIn: 'https://www.linkedin.com/in/yuri-west-b643b9aa/',
  },
  chuck: {
    twitter: '#',
    linkedIn: 'https://www.linkedin.com/in/chuck-hall-75093726',
  },
  robert: {
    twitter: '#',
    linkedIn: 'https://www.linkedin.com/in/seattlecissp',
  },
  sean: { twitter: '#', linkedIn: 'https://www.linkedin.com/in/macdonsp' },
  owen: { twitter: '#', linkedIn: 'https://www.linkedin.com/in/owenrumney' },
  ivan: {
    twitter: '#',
    linkedIn: 'https://www.linkedin.com/in/ivan-barragan-17310311',
  },
  liam: {
    twitter: '#',
    linkedIn: 'https://www.linkedin.com/in/%E0%B2%A0%EF%BC%BF%E0%B2%A0',
  },
}

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
    'rotate-2',
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
    joel,
    sean,
    sergio,
    megan,
    chuck,
    liam,
    robert,
    owen,
    ivan,
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
  })

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
              'group relative aspect-[2/3] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 duration-1000 dark:bg-zinc-800 sm:w-56 sm:rounded-2xl',
              rotations[team.indexOf(image)]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0"
            />
            <div className="absolute bottom-3 right-3 m-0.5 hidden h-6 w-6 rounded-md bg-zinc-800 group-hover:block">
              <a
                target="blank_"
                href={
                  linkedInLinks[image.src.split('.')[0].split('/')[4]].linkedIn
                }
              >
                <svg
                  fill="currentColor"
                  className="text-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 26 26"
                  width="26px"
                  height="26px"
                >
                  <path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" />
                </svg>
              </a>
            </div>
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
