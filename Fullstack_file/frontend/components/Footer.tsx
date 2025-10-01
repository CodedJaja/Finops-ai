import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} OptiCloud</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-blue-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-600">
            Terms
          </Link>
          <Link href="/docs" className="hover:text-blue-600">
            Docs
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
