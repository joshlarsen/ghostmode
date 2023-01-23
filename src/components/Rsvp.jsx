import { Button } from '@/components/Button'
import { useState } from 'react'
import axios from 'axios'

export function Rsvp() {
  const [buttonText, setButtonText] = useState('RSVP')
  const [inputName, setInputName] = useState('')
  const [inputCompany, setInputCompany] = useState('')
  const [inputTitle, setInputTitle] = useState('')
  const [inputEmail, setInputEmail] = useState('')

  /**
   * Handle newsletter form submit
   * @param {event} e
   */
  function handleSubmit(e) {
    const portalId = '21900111'
    const formGuid = '03be8ad7-de2c-4307-8c25-34fee62b99e3' // rsa 2023
    const hsUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`
    // const hsUrl = `http://localhost:4000/${portalId}/${formGuid}`

    const payload = {
      fields: [
        {
          objectTypeId: '0-1',
          name: 'firstname',
          value: inputName.split(' ')[0],
        },
        {
          objectTypeId: '0-1',
          name: 'lastname',
          value: inputName.split(' ')[1],
        },
        {
          objectTypeId: '0-1',
          name: 'company',
          value: inputCompany,
        },
        {
          objectTypeId: '0-1',
          name: 'jobtitle',
          value: inputTitle,
        },
        {
          objectTypeId: '0-1',
          name: 'email',
          value: inputEmail,
        },
      ],
    }

    setButtonText('...')

    axios
      .post(hsUrl, payload)
      .then((resp) => {
        console.log('hs', resp.data)
      })
      .catch((err) => {
        setButtonText('Error!')
        setTimeout(() => {
          setButtonText('RSVP')
        }, 2000)
      })
      .finally(() => {
        setInputName('')
        setInputCompany('')
        setInputTitle('')
        setInputEmail('')
        setButtonText('Thank you!')
      })

    e.preventDefault()
  }

  /**
   * Handle newsletter input change
   * @param {event} e
   */
  function handleNameChange(e) {
    setInputName(e.target.value)
  }
  function handleCompanyChange(e) {
    setInputCompany(e.target.value)
  }
  function handleTitleChange(e) {
    setInputTitle(e.target.value)
  }
  function handleEmailChange(e) {
    setInputEmail(e.target.value)
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <form onSubmit={handleSubmit} className="rsa-signup">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Reserve my spot</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          I'll be at the
          <span className="font-bold text-violet-500"> RSA 2023</span> Hottest
          Security Innovators Event
        </p>
        <div className="mt-6 sm:flex">
          <input
            onChange={handleNameChange}
            value={inputName}
            type="text"
            placeholder="Name"
            aria-label="Name"
            required
            className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:ring-violet-400/10 sm:text-sm"
          />
        </div>
        <div className="mt-6 space-y-6 sm:flex sm:space-y-0 sm:space-x-4">
          <input
            onChange={handleCompanyChange}
            value={inputCompany}
            type="text"
            placeholder="Company"
            aria-label="Company"
            required
            className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:ring-violet-400/10 sm:text-sm"
          />
          <input
            onChange={handleTitleChange}
            value={inputTitle}
            type="text"
            placeholder="Title"
            aria-label="Title"
            required
            className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:ring-violet-400/10 sm:text-sm"
          />
        </div>
        <div className="mt-6 sm:flex">
          <input
            onChange={handleEmailChange}
            value={inputEmail}
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:ring-violet-400/10 sm:text-sm"
          />
          <Button
            type="submit"
            className="mt-4 w-full sm:mt-0 sm:ml-4 sm:w-28 sm:flex-none"
          >
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
