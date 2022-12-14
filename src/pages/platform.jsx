import Image from 'next/image'
import Head from 'next/head'
import axios from 'axios'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAWS from '@/images/logos/aws.svg'
import logoAzure from '@/images/logos/azure.svg'
import logoGCP from '@/images/logos/gcp.svg'
import logoAPIgw from '@/images/logos/apigw.svg'
import logoContainers from '@/images/logos/containers.svg'
import logoWorkflows from '@/images/logos/workflows.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const platforms = [
  {
    name: 'AWS',
    description:
      'Protect applications and APIs deployed in Amazon Web Services by integrating with load balancer traffic and API Gateways.',
    link: { href: '#', label: 'Learn more' },
    logo: logoAWS,
  },
  {
    name: 'Azure',
    description:
      'Protect applications and APIs deployed in Microsoft Azure by integrating with Azure Virtual Network TAP, Azure Application Gateway, and Azure API Management.',
    link: { href: '#', label: 'Learn more' },
    logo: logoAzure,
  },
  {
    name: 'Google Cloud',
    description:
      'Protect applications and APIs deployed on Google Cloud Platform by integrating with VPC Packet Mirroring, and Google Cloud API Gateways.',
    link: { href: '#', label: 'Learn more' },
    logo: logoGCP,
  },
  {
    name: 'Edge',
    description:
      'Reduce automated attacks, bots, and mass scanner noise by extending Ghost Platform Intelligence to your edge presence in Cloudflare and AWS Lambda@Edge.',
    link: { href: '#', label: 'Learn more' },
    logo: logoPlanetaria,
  },
  {
    name: 'API Gateway',
    description:
      'Leverage your existing API Gateway infrastructure to accelerate API surface area discovery and inventory.',
    link: { href: '#', label: 'Learn more' },
    logo: logoAPIgw,
  },
  {
    name: 'Containers',
    description:
      'Gain visibility into workload level attacks against your applications and APIs by seamlessly integrating with Isto, Linkerd, or Cillium service mesh.',
    link: { href: '#', label: 'Learn more' },
    logo: logoContainers,
  },
  {
    name: 'Event Management',
    description:
      "Ghost Platform event forwarders can be configured to send critical events to your existing SIEM tools to enhance your operations team's visibility.",
    link: { href: '#', label: 'Learn more' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Workflows',
    description:
      'Achieve deeper workflow integration by integration Ghost Platform lifecycle management with your existing workflow management and ticketing systems.',
    link: { href: '#', label: 'Learn more' },
    logo: logoWorkflows,
  },
]

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

function InterestModal({ isOpen, onClose }) {
  const defaultText = 'Contact me'
  const thankYouText = 'Thank you!'
  const [buttonText, setButtonText] = useState(defaultText)
  const [inputText, setInputText] = useState('')
  const [inputCspField, setInputCspField] = useState(new Set())
  const [inputUseCaseField, setInputUseCaseField] = useState(new Set())

  /**
   * Handle interest form submit
   * @param {event} e
   */
  function handleSubmit(e) {
    const portalId = '21900111'
    const formGuid = '5c66f9d4-c6cf-4aed-9ece-81b9dcb561a9' // phase 2 pre-launch
    const hsUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

    const payload = {
      fields: [
        {
          objectTypeId: '0-1',
          name: 'email',
          value: inputText,
        },
        {
          objectTypeId: '0-1',
          name: 'cloud_provider',
          value: Array.from(inputCspField).join(';'),
        },
        {
          objectTypeId: '0-1',
          name: 'use_cases',
          value: Array.from(inputUseCaseField).join(';'),
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
          setButtonText(defaultText)
        }, 2000)
      })
      .finally(() => {
        setInputText('')
        setTimeout(() => {
          setButtonText(thankYouText)
        }, 1000)
      })

    e.preventDefault()
  }

  /**
   * Handle input changes
   * @param {event} e
   */
  function handleChange(e) {
    let inputCspFieldSet = inputCspField
    let inputUseCaseFieldSet = inputUseCaseField
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    // valid values
    let csp = ['csp-aws', 'csp-azure', 'csp-gcp']
    let uc = [
      'integration-edge',
      'integration-apigw',
      'integration-containers',
      'integration-events',
      'integration-workflows',
    ]

    // checkboxes
    if (target.type === 'checkbox') {
      console.log('check', name, value)

      if (csp.includes(name)) {
        value ? inputCspFieldSet.add(name) : inputCspFieldSet.delete(name)
        setInputCspField(inputCspFieldSet)
      }
      if (uc.includes(name)) {
        value
          ? inputUseCaseFieldSet.add(name)
          : inputUseCaseFieldSet.delete(name)
        setInputUseCaseField(inputUseCaseFieldSet)
      }
    } else {
      // email
      setInputText(e.target.value)
    }

    // debug
    // setTimeout(() => {
    //   console.log('state', inputCspField)
    //   console.log('state', inputUseCaseField)
    // }, 100)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0 bg-black bg-opacity-50">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
                  <form onSubmit={handleSubmit} className="platform-interest">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold leading-6 tracking-tight text-zinc-100"
                    >
                      Ghost Platform Interest
                    </Dialog.Title>
                    <p className="mt-2 mb-8 text-base text-zinc-400">
                      {`Select your primary cloud provider(s) and any integration
                      use cases you'd like to explore. Enter your email and the
                      Ghost Team will follow up to schedule a discussion.`}
                    </p>
                    <div className="mt-2">
                      <div className="flex space-x-4">
                        <div className="w-full">
                          <fieldset className="space-y-5">
                            <h3 className="text-sm font-semibold text-zinc-300">
                              Cloud Providers
                            </h3>
                            <legend className="sr-only">Notifications</legend>
                            <div className="relative flex items-center">
                              <div className="flex h-5 items-center">
                                <input
                                  onChange={handleChange}
                                  id="csp-aws"
                                  aria-describedby="csp-aws-description"
                                  name="csp-aws"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="csp-aws"
                                  className="text-gray-400"
                                >
                                  AWS
                                </label>
                              </div>
                            </div>
                            <div className="relative flex items-center">
                              <div className="flex h-5 items-center">
                                <input
                                  onChange={handleChange}
                                  id="csp-azure"
                                  aria-describedby="csp-azure-description"
                                  name="csp-azure"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="csp-azure"
                                  className="text-gray-400"
                                >
                                  Azure
                                </label>
                              </div>
                            </div>
                            <div className="relative flex items-center">
                              <div className="flex h-5 items-center">
                                <input
                                  onChange={handleChange}
                                  id="csp-gcp"
                                  aria-describedby="csp-gcp-description"
                                  name="csp-gcp"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="csp-gcp"
                                  className="text-gray-400"
                                >
                                  GCP
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div className="w-full">
                          <fieldset className="space-y-5">
                            <h3 className="text-sm font-semibold text-zinc-300">
                              Integrations
                            </h3>
                            <legend className="sr-only">Notifications</legend>
                            <div className="relative flex items-center">
                              <div className="flex h-5 items-center">
                                <input
                                  onChange={handleChange}
                                  id="integration-edge"
                                  aria-describedby="integration-edge-description"
                                  name="integration-edge"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="integration-edge"
                                  className="font-medium text-gray-400"
                                >
                                  Edge
                                </label>
                              </div>
                            </div>
                            <div className="relative flex items-center">
                              <div className="flex h-5 items-center">
                                <input
                                  onChange={handleChange}
                                  id="integration-apigw"
                                  aria-describedby="integration-apigw-description"
                                  name="integration-apigw"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="integration-apigw"
                                  className="font-medium text-gray-400"
                                >
                                  API Gateway
                                </label>
                              </div>
                            </div>
                            <div className="relative flex items-center">
                              <div className="flex h-5 items-center">
                                <input
                                  onChange={handleChange}
                                  id="integration-containers"
                                  aria-describedby="integration-containers-description"
                                  name="integration-containers"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="integration-containers"
                                  className="font-medium text-gray-400"
                                >
                                  Containers
                                </label>
                              </div>
                            </div>
                            <div className="relative flex items-center">
                              <div className="flex h-5 items-center">
                                <input
                                  onChange={handleChange}
                                  id="integration-events"
                                  aria-describedby="integration-events-description"
                                  name="integration-events"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="integration-events"
                                  className="font-medium text-gray-400"
                                >
                                  Event Management
                                </label>
                              </div>
                            </div>
                            <div className="relative flex items-center">
                              <div className="flex h-5 items-center">
                                <input
                                  onChange={handleChange}
                                  id="integration-workflows"
                                  aria-describedby="integration-workflows-description"
                                  name="integration-workflows"
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="integration-workflows"
                                  className="font-medium text-gray-400"
                                >
                                  Workflows
                                </label>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="mt-8 space-y-4 sm:flex sm:justify-between sm:space-y-0 sm:space-x-4">
                        <div className="w-full sm:w-64">
                          <input
                            onChange={handleChange}
                            value={inputText}
                            type="email"
                            placeholder="Email address"
                            aria-label="Email address"
                            required
                            className="w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 dark:focus:ring-violet-400/10 sm:text-sm"
                          />
                        </div>
                        <div className="">
                          <button
                            type="submit"
                            className="w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:inline-flex"
                          >
                            {buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default function Platforms() {
  let [isOpen, setIsOpen] = useState(false)

  function openModal() {
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  function closeModal(e) {
    setIsOpen(false)
  }

  return (
    <>
      <Head>
        <title>Ghost Security - Platform Integrations</title>
        <meta
          name="description"
          content="The Ghost Platform integrates at every layer of your stack."
        />
      </Head>
      <SimpleLayout
        title="The Ghost Platform integrates at every layer of your stack."
        intro="We are building the Ghost Platform guided by the North Star of meeting our customers where they are. This means deployment models supporting all major cloud providers and purpose built integrations for every layer of your application stack from the edge, to the workloads, to the operations tools."
      >
        <ul
          role="list"
          className={`${
            isOpen ? 'pointer-events-none' : ''
          } grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {platforms.map((platform) => (
            <Card as="li" key={platform.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-md bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={platform.logo}
                  alt=""
                  className="h-8 w-8 rounded-md"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link
                  onClick={openModal}
                  href={platform.link.href}
                  scroll={false}
                >
                  {platform.name}
                </Card.Link>
              </h2>
              <Card.Description>{platform.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-violet-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{platform.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
      <InterestModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
