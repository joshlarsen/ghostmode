import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoCosmos from '@/images/logos/cosmos.svg'

import { getAllJobs } from '@/lib/getAllJobs'

const benefits = [
  {
    name: 'Global Team',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'Learn more' },
    logo: logoPlanetaria,
  },
  {
    name: 'Competitive Compensation',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Health & Wellness',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'Professional Growth',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
]

function JobsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Job({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Link className="text-sm font-semibold text-zinc-500" href={href}>
        Remote
      </Card.Link>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Positions({ jobs }) {
  return (
    <>
      <Head>
        <title>Ghost Security - Careers</title>
        <meta
          name="description"
          content="Ghost is a venture backed, product-led startup building the new standard in application security for the modern enterprise."
        />
      </Head>
      <SimpleLayout
        title="Do you believe in Ghosts?"
        intro="Great teams build great products. We work hard to maintain an environment where our team is empowered to do their best work."
      >
        <div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 pb-20 sm:grid-cols-2 lg:grid-cols-2"
          >
            {benefits.map((benefit) => (
              <Card as="li" key={benefit.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={benefit.logo}
                    alt={benefit.name}
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {benefit.name}
                </h2>
                <Card.Description>{benefit.description}</Card.Description>
              </Card>
            ))}
          </ul>
        </div>
        <div className="space-y-20">
          <h3 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Open Positions.
          </h3>
          <JobsSection title="Engineering">
            {jobs
              .filter((j) => j.team == 'Engineering')
              .map((job, idx) => (
                <Job title={job.position} href={job.link} key={idx}>
                  {job.description}
                </Job>
              ))}
          </JobsSection>
          <JobsSection title="Research">
            {jobs
              .filter((j) => j.team == 'Research')
              .map((job, idx) => (
                <Job title={job.position} href={job.link} key={idx}>
                  {job.description}
                </Job>
              ))}
          </JobsSection>
          <JobsSection title="Product">
            {jobs
              .filter((j) => j.team == 'Product')
              .map((job, idx) => (
                <Job title={job.position} href={job.link} key={idx}>
                  {job.description}
                </Job>
              ))}
          </JobsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
export async function getStaticProps() {
  return {
    props: {
      jobs: await getAllJobs(),
    },
  }
}
