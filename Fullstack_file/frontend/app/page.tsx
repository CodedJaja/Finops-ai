import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 max-w-4xl">
          Cut Cloud Costs <span className="text-blue-600">Smarter</span>, Not
          Slower
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          OptiCloud helps enterprises, startups, and cloud-native teams reduce
          AWS, Azure, and GCP costs with real-time dashboards, AI-powered
          forecasting, and automated optimization.
        </p>
        <div className="mt-8 flex space-x-4">
          <Link
            href="/auth/signup"
            className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            Get Started Free
          </Link>
          <Link
            href="#features"
            className="px-6 py-3 rounded-lg font-semibold text-blue-600 border border-blue-600 hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-slate-900">Key Features</h2>
        <p className="mt-3 text-gray-600">
          Everything you need to manage, monitor, and optimize your cloud costs.
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div className="p-6 rounded-xl shadow-md bg-white">
            <h3 className="text-xl font-semibold">Multi-Cloud Support</h3>
            <p className="mt-3 text-gray-600">
              Seamlessly connect AWS, Azure, and GCP in one unified dashboard.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-white">
            <h3 className="text-xl font-semibold">Smart Cost Optimization</h3>
            <p className="mt-3 text-gray-600">
              Get AI-driven recommendations to cut waste and boost efficiency.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-white">
            <h3 className="text-xl font-semibold">Forecasting & Insights</h3>
            <p className="mt-3 text-gray-600">
              Predict future spend with AI-powered forecasting and trend
              analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Pricing Plans</h2>
        <p className="mt-3 text-gray-600">Simple pricing for any team size.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-8 rounded-xl shadow-md bg-white">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="mt-2 text-gray-600">Get started with basic features</p>
            <p className="mt-4 text-3xl font-bold">$0</p>
            <Link
              href="/auth/signup"
              className="mt-6 inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Start Free
            </Link>
          </div>
          <div className="p-8 rounded-xl shadow-md bg-white border-2 border-blue-600">
            <h3 className="text-xl font-semibold">Startup</h3>
            <p className="mt-2 text-gray-600">
              For small teams scaling cloud workloads
            </p>
            <p className="mt-4 text-3xl font-bold">$99/mo</p>
            <Link
              href="/auth/signup"
              className="mt-6 inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
          <div className="p-8 rounded-xl shadow-md bg-white">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-2 text-gray-600">Custom solutions at scale</p>
            <p className="mt-4 text-3xl font-bold">Contact Us</p>
            <Link
              href="#about"
              className="mt-6 inline-block px-6 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">About OptiCloud</h2>
        <p className="mt-4 text-gray-600">
          At OptiCloud, we believe cloud optimization shouldn’t be complex. Our
          mission is to empower businesses to innovate without worrying about
          runaway costs. Backed by AI, OptiCloud ensures your infrastructure is
          lean, efficient, and future-proof.
        </p>
      </section>
    </div>
  );
}
