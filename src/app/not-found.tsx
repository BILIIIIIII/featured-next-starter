import { Button } from "@/shared/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-6xl md:text-9xl font-extrabold text-blue-600">404</h1>
      <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
        Page Not Found
      </h2>
      <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
        Sorry, we couldn`t find the page you`re looking for.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button>Go back home</Button>
        </Link>
      </div>
    </div>
  );
}
