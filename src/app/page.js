import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Head>
        <title>Joy Aruku | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Joy Aruku" />
      </Head>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="text-teal-400 font-bold text-2xl">Dev-Joy</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about2" className="text-teal-400">
              01. About
            </Link>
          </li>
          <li>
            <Link href="/experience" className="text-teal-400">
              02. Experience
            </Link>
          </li>
          <li>
            <Link href="/work" className="text-teal-400">
              03. Work
            </Link>
          </li>
          <li>
            <Link href="/contact" className="border border-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-gray-900">
              04. Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-start px-10 py-20 space-y-6">
        <p className="text-teal-400 text-lg">Hi, my name is</p>
        <h1 className="text-6xl font-bold text-white">Joy Aruku.</h1>
        <h2 className="text-5xl font-semibold text-gray-400">
          I build things for the web.
        </h2>
        <p className="text-gray-400 max-w-2xl">
          I am a software engineer specializing in building and occasionally designing exceptional digital experiences. Currently, I am focused on building accessible, human-centered products at a leading tech company.
        </p>
        <Link href="/work" className="border border-teal-400 text-teal-400 px-6 py-3 rounded hover:bg-teal-400 hover:text-gray-900">
          Check out my projects!
        </Link>
      </section>
    </div>
  );
}
