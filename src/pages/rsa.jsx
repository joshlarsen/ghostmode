import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { Rsvp } from '@/components/Rsvp'
import venueImage from '@/images/photos/rsa.jpg'
import logoGhostLight from '@/images/ghost_in_motion_light.svg'
import logoNetRise from '@/images/logos/fogs/netrise.svg'
import logoNudge from '@/images/logos/fogs/nudge.svg'
import logoSentra from '@/images/logos/fogs/sentra.svg'
import logoGCP from '@/images/logos/gcp.svg'
import logoAPIgw from '@/images/logos/apigw.svg'
import logoContainers from '@/images/logos/containers.svg'

const companies = [
  {
    name: 'Ghost Security',
    description: 'The modern application security platform.',
    link: { href: 'https://ghost.security', label: 'Learn more' },
    logo: logoGhostLight,
  },
  {
    name: 'NetRise',
    description:
      'Comprehensive insight into the many risks present in firmware images.',
    link: { href: 'https://www.netrise.io/', label: 'Learn more' },
    logo: logoNetRise,
  },
  {
    name: 'Nudge Security',
    description:
      "Transforming SaaS security for today's highly distributed organizations.",
    link: { href: 'https://www.nudgesecurity.com/', label: 'Learn more' },
    logo: logoNudge,
  },
  {
    name: 'Sentra',
    description: 'Data Travels. Now Security Does Too.',
    link: { href: 'https://www.sentra.io/', label: 'Learn more' },
    logo: logoSentra,
  },
  // {
  //   name: 'Pangea',
  //   description:
  //     'Protect applications and APIs deployed on Google Cloud Platform by integrating with VPC Packet Mirroring, and Google Cloud API Gateways.',
  //   link: { href: '#', label: 'Learn more' },
  //   logo: logoGCP,
  // },
  // {
  //   name: 'CmdZero',
  //   description:
  //     'Leverage your existing API Gateway infrastructure to accelerate API surface area discovery and inventory.',
  //   link: { href: '#', label: 'Learn more' },
  //   logo: logoAPIgw,
  // },
  // {
  //   name: 'Descope',
  //   description:
  //     'Gain visibility into workload level attacks against your applications and APIs by seamlessly integrating with Isto, Linkerd, or Cillium service mesh.',
  //   link: { href: '#', label: 'Learn more' },
  //   logo: logoContainers,
  // },
]

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-violet-500 dark:text-zinc-200 dark:hover:text-violet-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-violet-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function LinkIcon(props) {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Ghost Security and Friends @ RSA</title>
        <meta
          name="description"
          content="Ghost is a venture backed, product-led startup building the new standard in application security for the modern enterprise."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={venueImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              RSA 2023 Hottest 🔥 Security Innovators
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Join us for an exclusive,{' '}
                <span className="font-bold">invite-only</span> happy hour
                celebrating the hottest innovators in security!
              </p>
              <p>
                Hosted in a fun and unique venue just a 5 minute walk from{' '}
                <span className="font-bold">Moscone Center</span>. Mingle with
                other leaders across the security space and enjoy appetizers and
                drinks before heading out for your evening commitments.
              </p>
              <p>
                Come enjoy good food, great drinks, and even better company!
              </p>
            </div>
            <div className="pt-20">
              <div className="mb-10 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Brought to you by
              </div>
              <ul
                role="list"
                className="grid grid-cols-1 gap-x-2 gap-y-16 sm:grid-cols-1"
              >
                {companies.map((company) => (
                  <Card as="li" key={company.name}>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-md bg-zinc-800 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image
                        src={company.logo}
                        alt=""
                        className="h-8 w-8 rounded-md"
                        unoptimized
                      />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      <Card.Link
                        href={company.link.href}
                        target="_blank"
                        scroll={false}
                      >
                        {company.name}
                      </Card.Link>
                    </h2>
                    <Card.Description>{company.description}</Card.Description>
                    {/* <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-violet-500 dark:text-zinc-200">
                      <LinkIcon className="h-6 w-6 flex-none" />
                      <span className="ml-2">{company.link.label}</span>
                    </p> */}
                  </Card>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:pl-20">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  Venue
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                  Focus Innovation Studio
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  Location
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                  181 2<sup>nd</sup> Street <br />
                  San Francisco, CA
                  <br />
                  <div className="space-x-4 text-xs text-zinc-500 dark:text-zinc-500">
                    <a href="#" target="_blank">
                      Google Map
                    </a>
                    <a href="#" target="_blank">
                      Apple Map
                    </a>
                  </div>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  Date
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                  Wednesday, April 26, 2023
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                  Time
                </dt>
                <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-100">
                  3:30pm - 6:30pm
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
