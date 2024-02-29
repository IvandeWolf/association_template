"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  EnvelopeOpenIcon,
  FireIcon,
  MapIcon,
  MegaphoneIcon,
  NewspaperIcon,
  RectangleGroupIcon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const association = [
  { name: "Over ons", description: "Informatie over de vereniging en haar geschiedenis", href: "#" },
  { name: "Commissies", description: "De verschillende commissies die de vereniging rijk is", href: "#" },
  { name: "Patrouilles", description: "Onderlinge groepen van leden met dezelfde interesses", href: "#" },
  { name: "Bestuur", description: "Het bestuur van de vereniging", href: "#" }
];
const company = [
  { name: "Lidmaatschap", href: "#", icon: FireIcon },
  { name: "Geschiedenis", href: "#", icon: NewspaperIcon },
  { name: "Nieuws", href: "#", icon: MegaphoneIcon },
  { name: "Activiteiten", href: "#", icon: ClipboardDocumentListIcon },
  { name: "Locatie", href: "#", icon: MapIcon },
];
const resources = [
  { name: "Programma", href: "#", icon: CalendarDaysIcon },
  { name: "FAQ", href: "#", icon: SparklesIcon },
  { name: "Contact", href: "#", icon: EnvelopeOpenIcon },
  { name: "Foto's", href: "#", icon: RectangleGroupIcon },
];
const blogPosts = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    preview: "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
  },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview: "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white relative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">U.F.O.-Stam</span>
            <Image src="/logo.png" alt="U.F.O.-Stam" width={561} height={641} className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Vereniging
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {association.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
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
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Landelijk
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Sociale veiligheid
          </a>

          <Popover>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Meer
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-white" />
                  <div className="w-1/2 bg-gray-50" />
                </div>
                <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                  <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:px-6 sm:py-12 lg:px-8 xl:pr-12">
                    <div>
                      <h3 className="text-base font-medium text-gray-500">Company</h3>
                      <ul role="list" className="mt-5 space-y-6">
                        {company.map((item) => (
                          <li key={item.name} className="flow-root">
                            <a
                              href={item.href}
                              className="group -m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-red-600"
                                aria-hidden="true"
                              />
                              <span className="ml-4">{item.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-500">Resources</h3>
                      <ul role="list" className="mt-5 space-y-6">
                        {resources.map((item) => (
                          <li key={item.name} className="flow-root">
                            <a
                              href={item.href}
                              className="group -m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-red-600"
                                aria-hidden="true"
                              />
                              <span className="ml-4">{item.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                  <div className="bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 xl:pl-12">
                    <div>
                      <h3 className="text-base font-medium text-gray-500">From the blog</h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {blogPosts.map((post) => (
                          <li key={post.id} className="flow-root">
                            <a href={post.href} className="-m-3 flex rounded-lg p-3 hover:bg-gray-100">
                              <div className="hidden flex-shrink-0 sm:block">
                                <img className="h-20 w-32 rounded-md object-cover" src={post.imageUrl} alt="" />
                              </div>
                              <div className="w-0 flex-1 sm:ml-8">
                                <h4 className="truncate text-base font-medium text-gray-900">{post.name}</h4>
                                <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 text-sm font-medium">
                      <a href="#" className="text-red-600 hover:text-red-500">
                        View all posts
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...association].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Company
                        <ChevronDownIcon
                          className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {company.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
