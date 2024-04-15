import { Link } from "react-router-dom";
import background from '@/assets/backround.jpg'

export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <img
        alt="Hero"
        className="absolute inset-0 z-[-1] object-cover"
        height="1440"
        src={background}
        style={{
          aspectRatio: "1",
          objectFit: "cover",
        }}
        width="1440"
      />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl lg:text-7xl text-white">Welcome to the Future</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Connect with your team using the platform built for collaboration. Share ideas, manage projects, and bring
              your best ideas to life.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              to='#'
            >
              Get Started
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              to="#"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

