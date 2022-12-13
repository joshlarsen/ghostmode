import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-violet-500 dark:hover:text-violet-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/team">Team</NavLink>
                <NavLink href="/platform">Platform</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/careers">Careers</NavLink>
                <NavLink href="/about">About</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                <span>
                  &copy; {new Date().getFullYear()} Ghost Security, Inc. All
                  rights reserved.
                </span>
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
