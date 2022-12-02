import { Button } from '@/components/Button'
import { useState } from 'react'
import axios from 'axios'

export function Newsletter() {
  const [buttonText, setButtonText] = useState('Notify me')
  const [inputText, setInputText] = useState('')

  /**
   * Handle newsletter form submit
   * @param {event} e
   */
  function handleSubmit(e) {
    const portalId = '21900111'
    // const formGuid = '0692c516-a41f-4e10-9edd-85b6a724809a' // pre-launch
    const formGuid = '5c66f9d4-c6cf-4aed-9ece-81b9dcb561a9' // phase 2 pre-launch
    const hsUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`
    // const hsUrl = `http://localhost:4000/${portalId}/${formGuid}`

    const payload = {
      fields: [
        {
          objectTypeId: '0-1',
          name: 'email',
          value: inputText,
        },
      ],
    }

    setButtonText('Loading')

    axios
      .post(hsUrl, payload)
      .then((resp) => {
        console.log('hs', resp.data)
      })
      .catch((err) => {
        setButtonText('Error!')
        setTimeout(() => {
          setButtonText('Notify me')
        }, 2000)
      })
      .finally(() => {
        setInputText('')
        setButtonText('Thank you!')
      })

    e.preventDefault()
  }

  /**
   * Handle newsletter input change
   * @param {event} e
   */
  function handleChange(e) {
    setInputText(e.target.value)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Stay up to date</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Get notified about{' '}
          <span className="font-bold text-violet-500">Ghost</span> news,
          unsubscribe at any time.
        </p>
        <div className="mt-6 flex">
          <input
            onChange={handleChange}
            value={inputText}
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:ring-violet-400/10 sm:text-sm"
          />
          <Button type="submit" className="ml-4 w-28 flex-none">
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  )
}

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
