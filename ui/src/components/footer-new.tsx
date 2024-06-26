/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/NjnJbyy3VeS
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function FooterNew() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-4 py-6 sm:px-6 lg:px-8 w-full">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            W3
          </div>
          <span className="text-lg font-semibold">Web3 Dapp</span>
        </div>
        <p className="text-sm mt-4 sm:mt-0">© 2024 Web3 Dapp. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            className="hover:text-gray-300 transition-colors duration-300"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a
            className="hover:text-gray-300 transition-colors duration-300"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SignalIcon className="w-6 h-6" />
          </a>
          <a
            className="hover:text-gray-300 transition-colors duration-300"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function SignalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
