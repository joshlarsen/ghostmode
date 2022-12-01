import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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
      <Card.Link className="text-zinc-500" href={href}>Remote</Card.Link>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
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
        <div className="space-y-20">
          <JobsSection title="Engineering">
            <Job title="Senior Engineering Manager" href="https://jobs.lever.co/ghostsecurity/88b36420-b254-497e-b433-9ad272f1185e">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Job>
            <Job title="Senior Software Engineer - Backend" href="https://jobs.lever.co/ghostsecurity/25d2ed3e-91a6-4e33-9c5b-12a4072ebbf1">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Job>
            <Job title="Senior Software Engineer - Frontend" href="https://jobs.lever.co/ghostsecurity/5a86897b-e1fe-4f7c-8c3a-e745e5929925">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every
              pixel you can get counts.
            </Job>
            <Job title="Senior Software Engineer - Platform" href="https://jobs.lever.co/ghostsecurity/bbd735a5-a861-4910-9896-136d48990c57">
              They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main.
            </Job>
            <Job title="Cloud Infrastructure Engineer" href="https://jobs.lever.co/ghostsecurity/c63ebb61-ee99-492e-a09f-fd09ed7e66c3">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Job>
            <Job title="Herman Miller Aeron Chair" href="#">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Job>
          </JobsSection>
          <JobsSection title="Research">
            <Job title="Senior Threat Researcher" href="https://jobs.lever.co/ghostsecurity/c071b4b5-f357-4ff0-9388-2bfa0568c519">
              I don’t care if it’s missing all of the fancy IDE features
              everyone else relies on, Sublime Text is still the best text
              editor ever made.
            </Job>
            <Job title="Threat Researcher" href="https://jobs.lever.co/ghostsecurity/987c5fe0-2e1d-4360-907c-5d0b8f432cc0">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Job>
          </JobsSection>
          <JobsSection title="Product">
            <Job title="Figma" href="#">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Job>
          </JobsSection>
        </div>
      </SimpleLayout>
    </>
  )
}