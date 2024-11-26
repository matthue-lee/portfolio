'use client'

import { useState } from 'react'
import {
  Dialog,
  Disclosure,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'
import Link from 'next/link'

const hikes = [
  { name: 'All Hikes', description: 'Get a better understanding of your traffic', href: '/hikes', icon: ChartPieIcon },
  { name: 'Routebourn', description: 'Get a better understanding of your traffic', href: '/hikes/routebourn', icon: ChartPieIcon },
  { name: 'Tongariro', description: 'Speak directly to your customers', href: '/hikes/tongarairo-alpine-crossing', icon: CursorArrowRaysIcon },
  { name: 'Everest Base Camp', description: 'Your customers’ data will be safe and secure', href: '/hikes/everest-base-camp', icon: FingerPrintIcon },
  { name: 'Gokyo Lakes', description: 'Build strategic funnels that will convert', href: '/hikes/gokyo-lakes', icon: ArrowPathIcon },
  { name: 'Milford Sound', description: 'Build strategic funnels that will convert', href: '/hikes/milford-sound', icon: ArrowPathIcon },
  { name: 'Roys Peak', description: 'Build strategic funnels that will convert', href: '/hikes/roys-peak', icon: ArrowPathIcon },
  { name: 'Fox Glacier', description: 'Build strategic funnels that will convert', href: '/hikes/fox-glacier', icon: ArrowPathIcon },


]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt="Logo"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Hikes
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
  transition
  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-y-auto max-h-[80vh] rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
>
  <div className="p-4">
    {hikes.map((item) => (
      <div
        key={item.name}
        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
      >
        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
        </div>
        <div className="flex-auto">
          <a href={item.href} className="block font-semibold text-gray-900">
            {item.name}
            <span className="absolute inset-0" />
          </a>
          <p className="mt-1 text-gray-600">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
    {callsToAction.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
      >
        <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
        {item.name}
      </a>
    ))}
  </div>
</PopoverPanel>

          </Popover>

          <a href="/contact" className="text-sm/6 font-semibold text-gray-900">
            Contact
          </a>
          <Link href="/" className="text-sm/6 font-semibold text-gray-900">
            About
          </Link>
          <a href="/testimonials" className="text-sm/6 font-semibold text-gray-900">
            Testimonials
          </a>
          <a href="/faqs" className="text-sm/6 font-semibold text-gray-900">
            FAQ&apos;s
          </a>

        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Llog in if u care <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
  <div className="fixed inset-0 z-10 bg-black bg-opacity-25" aria-hidden="true" />
  <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <Image
              alt="Logo"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
      </Link>
      <button
        type="button"
        onClick={() => setMobileMenuOpen(false)} // Correctly updates the state
        className="-m-2.5 rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          <Disclosure as="div" className="-mx-3">
            <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
              Hikes
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 space-y-2">
              {[...hikes, ...callsToAction].map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </Disclosure>
          <a
            href="/contact"
            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
          >
            Contact
          </a>
          <Link
            href="/"
            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
          >
            About
          </Link>
          <a
            href="/testimonials"
            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
          >
            Testimonials
          </a>
          <a
            href="/faqs"
            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
          >
            FAQ&apos;s
          </a>
        </div>
        <div className="py-6">
          <a
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
          >
            Log in / Sign up
          </a>
        </div>
      </div>
    </div>
  </Dialog.Panel>
</Dialog>

    </header>
  )
}
