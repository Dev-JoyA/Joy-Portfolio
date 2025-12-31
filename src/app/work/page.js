import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Work() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="text-teal-400 font-bold text-2xl">Dev-Joy</div>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-teal-400 hover:text-teal-300">Home</Link></li>
          <li><Link href="/experience" className="text-teal-400 hover:text-teal-300">Experience</Link></li>
          <li><Link href="/work" className="text-teal-400 hover:text-teal-300">Work</Link></li>
          <li><Link href="/contact" className="text-teal-400 hover:text-teal-300">Contact</Link></li>
        </ul>
      </nav>
      <section className="flex flex-col justify-center items-start px-10 py-20 space-y-10">
        <h1 className="text-3xl font-bold mb-6">My Work</h1>
        <p className="text-gray-400 text-sm max-w-2xl mb-10">
          Here are some of the projects I have worked on, showcasing my skills in web development and backend solutions. Each project demonstrates my ability to create functional and user-friendly applications using a range of technologies.
        </p>
        
        {/* Projects Section */}
        <div className="space-y-6">
            {/* Pick-n-Get Frontend */}
            <div className="border-b border-gray-700 pb-4 mb-6 transition-transform transform hover:scale-105 hover:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Pick-n-Get</h2>
            <p className="text-gray-400 text-sm mb-4">
            A website that rewards users for proper waste disposal. The platform is built on-chain to ensure transparency and security.
            </p>
            <p className="text-gray-400 text-sm mb-4">
            Technologies Used: Solidity, Next.js, TypeScript<br />
            Role: Solidity and Web2 Developer responsible for smart contract security, payment integration, API development, and other key functionalities.
            </p>
            <a href="https://pick-n-get-fe.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-sm">
                View Live <FaExternalLinkAlt className="inline" />
            </a>
            </div>

            {/* NCAA RPAS */}
            <div className="border-b border-gray-700 pb-4 mb-6 transition-transform transform hover:scale-105 hover:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl">
                <h2 className="text-xl font-semibold mb-2">NCAA RPAS</h2>
                <p className="text-gray-400 text-sm mb-4">
                A website for registering and managing Remotely Piloted Aircraft (RPA)/Unmanned Aerial Vehicles (UAV) with the Nigerian Civil Aviation Authority. Users can register their RPA/UAV, stay updated with regulations, and ensure compliance.
                </p>
                <p className="text-gray-400 text-sm mb-4">
                    Technologies Used: Java, Spring Boot<br />
                    Role: Backend Developer worked collaboratively in a team, building APIs, managing database interactions, and ensuring secure and scalable backend functionality.
                </p>
                <a href="https://rpas.ncaa.gov.ng/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-sm">
                    View Live <FaExternalLinkAlt className="inline" />
                </a>
            </div>
          {/* Skool LMS Client */}
          <div className="border-b border-gray-700 pb-4 mb-6 transition-transform transform hover:scale-105 hover:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Skool LMS Client</h2>
            <p className="text-gray-400 text-sm mb-4">
              A dynamic learning management system built with JavaScript and Express.js. This application provides an intuitive platform for managing educational content, assignments, and student progress, offering a user-friendly interface for both students and educators.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Technologies Used: JavaScript, Express.js<br />
              Role: Team Member, contributed to developing features and functionality.
            </p>
            <a href="https://skool-lms-client.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-sm">View Live <FaExternalLinkAlt className="inline" /></a>
          </div>

          {/* CleanHub */}
          <div className="border-b border-gray-700 pb-4 mb-6 transition-transform transform hover:scale-105 hover:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">CleanHub</h2>
            <p className="text-gray-400 text-sm mb-4">
              <b>CleanHub</b> is a comprehensive web application designed to connect professional cleaners with clients seeking cleaning services. It simplifies the process of booking and managing cleaning appointments while ensuring efficient communication and transaction management.
            </p>
           
            <p className="text-gray-400 text-sm mb-4">
              Technologies Used: JavaScript, Express.js<br />
              Role: Team Member, contributed to various functionalities and integration.
            </p>
            <a href="https://cleanhub-khzq.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-sm">View Live <FaExternalLinkAlt className="inline" /></a>
          </div>

          {/* Foodtruck Frontend */}
          <div className="border-b border-gray-700 pb-4 mb-6 transition-transform transform hover:scale-105 hover:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Foodtruck Frontend</h2>
            <p className="text-gray-400 text-sm mb-4">
              The frontend of a foodtruck application built with React. This project brings Figma designs to life, creating a visually appealing and interactive user experience for managing food truck orders and customer interactions.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Technologies Used: React<br />
              Role: Team Member, focused on translating Figma designs into a functional and engaging user interface.
            </p>
            <a href="https://github.com/Dev-JoyA/live-project-frontend-foodtruck-frontend" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-sm">View on GitHub <FaExternalLinkAlt className="inline" /></a>
          </div>

          {/* Foodtruck Backend */}
          <div className="border-b border-gray-700 pb-4 mb-6 transition-transform transform hover:scale-105 hover:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Foodtruck Backend</h2>
            <p className="text-gray-400 text-sm mb-4">
              The backend for the foodtruck application built with Java and Spring Boot. This project integrates various third-party APIs, including Google Cloud Platform and Paystack, to provide a robust backend solution for handling payments and data processing.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Technologies Used: Java, Spring Boot, Google Cloud Platform, Paystack<br />
              Role: Team Member, contributed to backend development, API integration, and data processing.
            </p>
            <a href="https://github.com/Dev-JoyA/live-project-backend-foodtruck" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-sm">View on GitHub <FaExternalLinkAlt className="inline" /></a>
          </div>
        </div>

        {/* Link to GitHub Profile */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Check out my GitHub profile for more projects and repositories:
          </p>
          <a href="https://github.com/Dev-JoyA?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-lg">
            View All Projects on GitHub <FaExternalLinkAlt className="inline" />
          </a>
        </div>
      </section>
    </div>
  );
}
