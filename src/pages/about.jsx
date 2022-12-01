import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/founders.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
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

export default function About() {
  return (
    <>
      <Head>
        <title>Ghost Security - About</title>
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
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Ghost origins.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Picture this: February in Southern California. The weather is
                beautiful (isn’t it always?), spirits are high, and mouths are
                on fire at a local Mexican restaurant.
              </p>
              <p>
                The first time Greg Martin, Josh Larsen, and Eric Cornelius met
                in person was arguably the perfect setting to make magic happen.
                Each of them have spent years in the security space as serial
                entrepreneurs - building technology and teams from the ground up
                with the shared goal of creating solutions that solve problems
                better. Essentially, making security less painful without
                sacrificing efficacy. The trio was ready to do it again. This
                time, focusing their sights on securing something that is
                growing at rates that nobody can keep up with: modern
                applications and the infrastructure that supports them.
              </p>
              <p>
                How exactly this could be done was a discussion that could only
                be had over beer, tacos, and ghost peppers.
              </p>
              <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                Challenge the Status Quo
              </h3>
              <p>
                We live in a digital world. An overplayed sentence, yes, but
                true nonetheless.
              </p>
              <p>
                With quite literally the majority of the world relying on
                applications for both communication and entertainment, ensuring
                that everyone - not just global 2000 organizations and the
                government - are protected as they go about their lives each day
                is top of mind for the Ghost founding trio.
              </p>
              <p>
                As the years go on, the industry is bursting at the seams with
                point solutions that are purpose-built to solve a particular
                part of the problem. This is always painstakingly apparent at
                industry conferences like Black Hat and RSA where the show floor
                somehow manages to always get bigger. Although it’s great to see
                growth, it’s a tough time to be a consumer. It’s hard to tell
                where one solution stops and another starts.
              </p>
              <p>
                For some reason, we’ve come to accept this. Despite the ‘single
                pane of glass’ promises made by companies everywhere, we rely on
                disparate technologies that lead to significant overlap in
                capabilities, a workforce that’s tired of being expected to
                understand a myriad of different technologies, and immense
                budget inefficiencies because of what’s required to bring risk
                down to an acceptable level.
              </p>
              <p>
                When it comes to application security, Ghost is going to change
                that.
              </p>
              <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                Enter: Ghost Security
              </h3>
              <p>
                The application security space is already getting pretty busy.
                By busy, we mean that sooner or later, just like the rest of the
                industry, there’s going to be significant bloat and an onus on
                the user to understand how to pick and choose vendors in order
                to implement the best solution for them.
              </p>
              <p>
                Most of today’s approaches to application security are quickly
                losing effectiveness because they miss addressing the nuances
                created by modern cloud infrastructure. They rely on the user
                for continuous inventorying of assets, they don’t leverage
                machine learning in a forward thinking way, and they certainly
                aren’t equipped to scale at the rate demanded by today’s cloud
                scale microservice-driven architectures.
              </p>
              <p>
                This is where there’s room for change. More than change, there’s
                room to completely flip what’s acceptable on its head and build
                a comprehensive, easy to implement, effective solution to
                protect users and protect the data that they are sharing.
              </p>
              <p>
                This is what Greg, Eric, Josh, and the entire team at Ghost
                Security are dedicated to doing.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/ghostsecurityhq"
                icon={TwitterIcon}
              >
                Ghost on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/ghostsecurity/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Ghost on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://github.com/ghostsecurity"
                icon={GitHubIcon}
                className="mt-4"
              >
                Ghost on GitHub
              </SocialLink>
              <SocialLink
                href="https://instagram.com/ghostsecurityhq"
                icon={InstagramIcon}
                className="mt-4"
              >
                Ghost on Instagram
              </SocialLink>
              <SocialLink
                href="mailto:hello@ghost[dot]security"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hello@ghost.security
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
