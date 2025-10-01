export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <p className="mt-4 text-gray-600">
        Have questions? Reach out to us at{" "}
        <a
          href="mailto:support@opticloud.com"
          className="text-blue-600 hover:underline"
        >
          support@opticloud.com
        </a>
      </p>
    </div>
  );
}
