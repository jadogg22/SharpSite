import Link from "next/link"
import { MyHeader } from "@/components/MyHeader"
import { MyFooter } from "@/components/MyFooter"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <MyHeader />
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <p className="text-2xl font-medium text-gray-600">Page Not Found</p>
          <p className="mt-4 text-lg text-gray-500">Sorry, the page you are looking for does not exist.</p>
          <Link href="/">
            <a className="mt-8 inline-block rounded-md bg-primary px-6 py-3 text-lg font-medium text-white hover:bg-primary/90">Go Home</a>
          </Link>
        </div>
      </main>
      <MyFooter />
    </div>
  )
}
