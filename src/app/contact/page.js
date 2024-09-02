import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex flex-col items-center">
      <nav className="flex justify-between items-center px-10 py-6 w-full">
        <div className="text-teal-400 font-bold text-2xl">Dev-Joy</div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-teal-400 hover:text-teal-300">Home</Link></li>
          <li><Link href="/experience" className="text-teal-400 hover:text-teal-300">Experience</Link></li>
          <li><Link href="/work" className="text-teal-400 hover:text-teal-300">Work</Link></li>
          <li><Link href="/contact" className="text-teal-400 hover:text-teal-300">Contact</Link></li>
        </ul>
      </nav>
      
      <section className="px-10 py-20 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Me</h1>
        
        <div className="flex flex-wrap justify-center gap-10 mb-8">
          <div className="flex items-center gap-2 text-gray-400">
            <FaPhoneAlt className="text-teal-400 text-xl" />
            <span className="text-sm">+2348062356261</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <FaEnvelope className="text-teal-400 text-xl" />
            <span className="text-sm">joy.gold13@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <FaLinkedin className="text-teal-400 text-xl" />
            <a href="https://www.linkedin.com/in/joy-aruku-a23361195/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">LinkedIn</a>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <FaGithub className="text-teal-400 text-xl" />
            <a href="https://github.com/Dev-JoyA?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">GitHub</a>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">Based in Lagos, Nigeria</p>
          <p className="text-gray-400 text-sm mb-2">Open to Remote Opportunities</p>
          <p className="text-gray-400 text-sm">Open to Relocate</p>
        </div>
      </section>
    </div>
  );
}
