import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Card } from '@/components/Card'
import { Rsvp } from '@/components/Rsvp'
import venueImage from '@/images/photos/blackhat.png'
import sushiImage from '@/images/photos/sushi.avif'
import logoGhostLight from '@/images/ghost_in_motion_light.svg'

const companies = [
  {
    name: 'Ghost Security',
    description: 'The supernatural application security platform.',
    link: { href: 'https://ghost.security', label: 'Learn more' },
    logo: logoGhostLight,
  },
]

export default function LandingPage({ jobs }) {
  return (
    <>
      <Head>
        <title>Ghost Security BlackHat CISO Dinner</title>
        <meta
          name="description"
          content="Ghost is a venture backed, product-led startup building the new standard in application security for the modern enterprise."
        />
      </Head>
      <Container className="mt-24">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="mx-auto max-w-xs px-2.5 ">
              <Image
                src={sushiImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Omakase Sushi Dinner
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Come join us for an unforgettable evening to celebrate the
                launch of the{' '}
                <span className="border-b-2 border-b-violet-900">
                  Ghost Security Platform
                </span>
                ! Enjoy the stunning views of Las Vegas, savor delicious sushi
                prepared to your individual preference, and sample a variety of
                sakes - it&apos;s sure to be a night to remember!
              </p>
              <p>
                Join us for this exclusive,{' '}
                <span className="border-b-2 border-b-violet-900">
                  invite-only
                </span>{' '}
                event and enjoy amazing food, great drinks, and even better
                company!
              </p>
            </div>
            <div className="pt-20 pb-9 sm:pb-20">
              <Image
                src={venueImage}
                alt="Ghost team in Vail, CO"
                className="rounded-xl "
              />
            </div>
          </div>
          <div className="lg:pl-16">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  Venue
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                  Private Suite & Balcony
                </dd>
                <p className="text-xs text-neutral-500">
                  Check your email before the event.
                </p>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  Location
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                  Overlooking the Las Vegas Strip
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  Date
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                  Wednesday, August 9, 2023
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  Time
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                  6:00pm - 9:00pm PDT
                </dd>
              </div>
            </dl>

            <div className="-ml-1 pt-8">
              <Rsvp />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
