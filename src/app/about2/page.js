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
            My name is Joy Aruku, a Backend web2 and Web3 developer passionate about building high-quality, accessible web applications and decentralized solutions. 
            I specialize in smart contract development, dApps, and distributed ledger systems. I have participated in various hackathons and open-source programs, contributing to innovative projects across Web3 and blockchain ecosystems.
        </p>


        {/* Skills Section */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold">Programming Languages</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Solidity</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Web Development</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Hardhat</li>
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
        <div className="border-t border-gray-700 pt-6 mt-6">
                <h2 className="text-3xl font-bold mb-4">Web3 & Hackathons</h2>
                <p className="text-gray-400 max-w-2xl mb-4">
                    Actively building decentralized applications and smart contracts on Ethereum, Hashgraph, and other blockchain platforms. 
                    Participated in multiple hackathons and open-source initiatives, focusing on innovative solutions for Web3 adoption.
                </p>
                <ul className="list-disc list-inside text-gray-400">
                    <li>Smart contract development using Solidity and Hardhat</li>
                    <li>Decentralized application (dApp) development with Typescript and express.js</li>
                    <li>Hackathon participant</li>
                </ul>
            </div>
            {/* Open Source Contributions Section */}
            <div className="border-t border-gray-700 pt-6 mt-6">
                <h2 className="text-3xl font-bold mb-4">Open Source Contributions</h2>
                <p className="text-gray-400 max-w-2xl mb-4">
                    Actively contributing to open-source projects
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-3">
                    <li>
                    <strong>Creative Commons (ccos-website & legaldb)</strong> – Implemented new website designs, improved front-end usability, and contributed bug fixes and enhancements across multiple repositories.  
                    <br />
                    Links: 
                    <a href="https://github.com/creativecommons/ccos-website-source/pull/834" target="_blank" className="text-teal-400">PR #834</a>, 
                    <a href="https://github.com/creativecommons/ccos-website-source/pull/822" target="_blank" className="text-teal-400">PR #822</a>, 
                    <a href="https://github.com/creativecommons/legaldb/pull/222" target="_blank" className="text-teal-400">PR #222</a>
                    </li>
                    <li>
                    <strong>MediaWiki – PendingChangesBot-ng</strong> – Built front-end integration for decentralized applications and improved automation workflows.  
                    <br />
                    Links: 
                    <a href="https://github.com/Wikimedia-Suomi/PendingChangesBot-ng/pull/59" target="_blank" className="text-teal-400">PR #59</a>, 
                    <a href="https://github.com/Wikimedia-Suomi/PendingChangesBot-ng/issues/105" target="_blank" className="text-teal-400">Issue #105</a>
                    </li>
                    <li>
                    <strong>Yocaml</strong> – Created a blog using OCaml, contributed in the documentation, and implemented bug fixes for distributed ledger integration.  
                    <br />
                    Links: 
                    <a href="https://github.com/Dev-JoyA/yocaml_blog" target="_blank" className="text-teal-400">Blog Repo</a>, 
                    <a href="https://github.com/xhtmlboi/yocaml/pull/101" target="_blank" className="text-teal-400">PR #101</a>, 
                    <a href="https://github.com/xhtmlboi/yocaml/pull/106" target="_blank" className="text-teal-400">PR #106</a>
                    </li>
                </ul>
            </div>

      </section>
    </div>
  );
}

