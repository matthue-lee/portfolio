'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-transparent">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo on the LHS */}
        <div className="flex flex-none">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
            <Image
              alt="Logo"
              src="/images/logo2.png"
              width={100}
              height={100}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Right-Aligned Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12 lg:justify-end flex-1">
          <a href="/contact" className="text-sm font-semibold text-gray-500">
            contact
          </a>
          <Link href="/" className="text-sm font-semibold text-gray-500">
            about
          </Link>
          <a href="/modelling" className="text-sm font-semibold text-gray-500">
            modelling
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-20">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Sliding Menu */}
          <div
            className={`fixed inset-y-0 right-0 z-30 w-full max-w-sm overflow-y-auto bg-black px-6 py-6 sm:ring-1 sm:ring-gray-900/10 transform ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
                <Image
                  alt="Logo"
                  src="/images/logo2.png"
                  width={46}
                  height={46}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-500 hover:bg-gray-100"
                  >
                    contact
                  </a>
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-500 hover:bg-gray-100"
                  >
                    about
                  </Link>
                  <a
                    href="/modelling"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-500 hover:bg-gray-100"
                  >
                    modelling
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
