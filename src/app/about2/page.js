import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="text-teal-400 font-bold text-2xl">Dev-Joy </div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-teal-400">Home</Link></li>
          <li><Link href="/experience" className="text-teal-400">Experience</Link></li>
          <li><Link href="/work" className="text-teal-400">Work</Link></li>
          <li><Link href="/contact" className="text-teal-400">Contact</Link></li>
        </ul>
      </nav>
      <section className="flex flex-col justify-center items-start px-10 py-20 space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-gray-400 max-w-2xl">
         My name is Joy Aruku, a full-stack web developer passionate about building high-quality, accessible web applications. With a background in both frontend and backend technologies, I create seamless digital experiences. I am enthusiastic about leveraging my diverse skill set and experiences to tackle new challenges and contribute to innovative projects.
        </p>

        {/* Skills Section */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold">Programming Languages</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Web Development</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Spring Boot</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Database Management</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Software Development Methodologies</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Agile Software Development</li>
                <li>Scrum</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Emotional Intelligence and Communication</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Emotional Intelligence</li>
                <li>Communication</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Certifications</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Scrum Fundamentals Certified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

