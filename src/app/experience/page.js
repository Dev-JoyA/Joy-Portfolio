import Link from 'next/link';

export default function Experience() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="text-teal-400 font-bold text-2xl">Dev-Joy</div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-teal-400">Home</Link></li>
          <li><Link href="/experience" className="text-teal-400">Experience</Link></li>
          <li><Link href="/work" className="text-teal-400">Work</Link></li>
          <li><Link href="/about" className="text-teal-400">About</Link></li>
          <li><Link href="/contact" className="text-teal-400">Contact</Link></li>
        </ul>
      </nav>
      <section className="flex flex-col justify-center items-start px-10 py-20 space-y-6">
        <h1 className="text-4xl font-bold">Experience</h1>
        
        {/* Experience Item 1 */}
        <div className="border-b border-gray-700 pb-4 mb-4">
          <h2 className="text-2xl font-semibold">Intern</h2>
          <h3 className="text-xl text-teal-400">Asseco Nigeria</h3>
          <p className="text-gray-400">May 2024 — Present</p>
          <p className="text-gray-300 mt-2">
            • Collaborated with cross-functional teams to design, develop, and test dynamic web applications using Java and React.<br />
            • Contributed to both front-end and back-end development, ensuring seamless integration and functionality through clean, efficient, and well-documented code.<br />
            • Troubleshot and resolved issues, participated in code reviews, and engaged in continuous learning to enhance technical skills and adapt to evolving project requirements.
          </p>
        </div>
        
        {/* Experience Item 2 */}
        <div className="border-b border-gray-700 pb-4 mb-4">
          <h2 className="text-2xl font-semibold">Software Engineer</h2>
          <h3 className="text-xl text-teal-400">Decagon Institute</h3>
          <p className="text-gray-400">Oct 2023 — Present</p>
          <p className="text-gray-300 mt-2">
            • Contribute to the collaborative team environment as a Junior Software Developer.<br />
            • Play a key role in the design and maintenance of software applications.<br />
            • Write efficient and well-documented code to meet project requirements.<br />
            • Collaborate closely with experienced developers to address technical challenges.<br />
            • Apply a skillset and solid foundation in programming languages to contribute effectively.<br />
            • Adapt to evolving priorities and actively participate in ongoing learning opportunities.<br />
            • Embrace a dynamic environment, leveraging it for professional growth.<br />
            • Demonstrate enthusiasm for gaining valuable experience in the field.
          </p>
        </div>
        
        {/* Experience Item 3 */}
        <div className="border-b border-gray-700 pb-4 mb-4">
          <h2 className="text-2xl font-semibold">Front-End Developer</h2>
          <h3 className="text-xl text-teal-400">Freelance</h3>
          <p className="text-gray-400">Sep 2022 — Sep 2023</p>
          <p className="text-gray-300 mt-2">
            • Developed and maintained user-facing websites using HTML, CSS, JavaScript, and ReactJS.<br />
            • Created UI components with reusable code for a better user experience.<br />
            • Learned new front-end programming languages and methodologies to perform tasks.<br />
            • Applied best practices in coding standards, semantic markup, SEO optimization techniques.<br />
            • Implemented responsive design principles to ensure cross-platform compatibility of webpages.<br />
            • Wrote code using specific programming languages and tools.
          </p>
        </div>
      </section>
    </div>
  );
}
