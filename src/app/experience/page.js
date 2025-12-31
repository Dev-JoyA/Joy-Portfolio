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
          <li><Link href="/about2" className="text-teal-400">About</Link></li>
          <li><Link href="/contact" className="text-teal-400">Contact</Link></li>
        </ul>
      </nav>
      <section className="flex flex-col justify-center items-start px-10 py-20 space-y-6">
        <h1 className="text-4xl font-bold">Experience</h1>

        {/* Web3 Developer */}
        <div className="border-b border-gray-700 pb-4 mb-4">
            <h2 className="text-2xl font-semibold">Web3 Developer (Smart Contracts & Distributed Ledger Systems)</h2>
            <p className="text-gray-400">Jan 2025 — Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>Designed and implemented Smart Contracts in Solidity across Ethereum-compatible and distributed ledger environments, focusing on correctness, security, and gas efficiency.</li>
            <li>Built and deployed contracts on multiple blockchain networks and testnets, adapting logic to chain-specific tooling and deployment workflows.</li>
            <li>Participated in blockchain hackathons, collaborating with engineers to design decentralized solutions under time constraints.</li>
            <li>Applied distributed ledger concepts such as immutability, consensus, and transaction finality when designing contract interactions.</li>
            <li>Studied and implemented token standards and governance-related contracts, following industry best practices and secure design patterns.</li>
            <li>Used modern smart contract development frameworks for compilation, testing, deployment, and verification.</li>
            </ul>
        </div>

        {/* Axendit Software Developer */}
        <div className="border-b border-gray-700 pb-4 mb-4">
            <h2 className="text-2xl font-semibold">Software Developer</h2>
            <h3 className="text-xl text-teal-400">Axendit Ltd</h3>
            <p className="text-gray-400">May 2024 — Present</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>Collaborated with cross-functional teams to design, develop, and test dynamic web applications using Java and React.</li>
            <li>Contributed to both front-end and back-end development, ensuring seamless integration and functionality through clean, efficient, and well-documented code.</li>
            <li>Worked single-handedly on the backend development for Axendit Academy, designing and maintaining scalable services for internal learning and certification workflows.</li>
            <li>Joined a team to build NCAA RPAS (Nigerian Civil Aviation Authority Remotely Piloted Aircraft Systems) solutions, contributing to secure and compliant enterprise systems.</li>
            <li>Developed SOAP APIs, improving communication between enterprise applications and reducing downtime by 20%.</li>
            <li>Built a scalable backend for certificate verification using CRL analytics, cutting verification time by 50% and enhancing accuracy by 30%.</li>
            </ul>
        </div>

        {/* Decagon Software Engineer */}
        <div className="border-b border-gray-700 pb-4 mb-4">
            <h2 className="text-2xl font-semibold">Software Engineer</h2>
            <h3 className="text-xl text-teal-400">Decagon Institute</h3>
            <p className="text-gray-400">Oct 2023 — Dec 2023</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
            <li>Contributed to a collaborative team environment as a Junior Software Developer.</li>
            <li>Participated in the design and maintenance of software applications.</li>
            <li>Wrote efficient, well-documented code to meet project requirements.</li>
            <li>Collaborated with experienced developers to address technical challenges.</li>
            <li>Applied programming skills effectively to contribute to team projects.</li>
            <li>Adapted to evolving priorities and participated in ongoing learning opportunities.</li>
            </ul>
        </div>
        </section>

    </div>
  );
}
