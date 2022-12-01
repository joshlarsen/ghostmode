import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Ghost Security</title>
        <meta
          name="description"
          content="Thanks for subscribing to be notified."
        />
      </Head>
      <div className="min-h-screen">
        <SimpleLayout
          title="Thanks for subscribing."
          intro="Check your email inbox for a signup confirmation. In the future, we’ll send you an email when there's Ghost news, new product announcements, or Early Availability opportunities."
        />
      </div>
    </>
  )
}
