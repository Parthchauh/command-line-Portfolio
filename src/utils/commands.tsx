import React from 'react';

import { FaCode, FaFire, FaGithub, FaGlobe, FaLightbulb, FaNpm, FaRocket } from 'react-icons/fa';

interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

export const getOutput = (command: string, setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>): JSX.Element | string => {
  switch (command.toLowerCase()) {
    case 'sudo rm -rf /*':
      const closeWindow = () => {
        const newWindow = window.open('about:blank', '_blank');
        if (newWindow) {
          newWindow.close();
        }

        window.close();
        window.location.href = 'about:blank';
        window.history.back();
      };

      closeWindow();
      return <></>;
    case 'blogs':
      window.open('https://parthdev.hashnode.dev/', '_blank');
      return 'Opening blogs in a new tab...';
    case 'help':
      return (
        <div className="flex flex-col space-y-1">
          <span className="text-[#58a6ff]">Available commands:</span>
          {[
            { cmd: '🌟 about', desc: 'Learn more about me' },
            { cmd: '🌐 socials', desc: 'Find me on the web' },
            { cmd: '💻 skills', desc: 'Check out my technical skills' },
            { cmd: '📄 resume', desc: 'Take a look at my resume' },
            { cmd: '💼 experience', desc: 'Explore my professional journey' },
            { cmd: '🎯 goals', desc: 'Discover my aspirations' },
            { cmd: '🧹 clear', desc: 'Clear the terminal' },
            { cmd: '✍️ blogs', desc: 'Nothing meaningful here :)' },
            { cmd: '⚠️ sudo rm -rf /*', desc: 'Try at your own risk!' },
          ].map(({ cmd, desc }) => (
            <div key={cmd} className="flex">
              <span className="text-[#f0883e] w-44">{cmd}</span>
              <span className="text-[#8b949e]">- {desc}</span>
            </div>
          ))}
        </div>
      );
    case 'about':
      return (
        <div className="space-y-2">
          <p>Hey there! Thanks for your interest in getting to know me better.</p>
          <p>
            I'm <span className="text-[#f0883e]">Parth Chauhan</span>, a MERN stack developer(beginner) with a passion for building web applications.
          </p>
          <p>
            I’m enthusiastic about creating clean and efficient code. I love exploring new technologies and frameworks, and I'm always up for solving challenging problems.
          </p>
          <p>
            When I’m not coding, I enjoy photography and playing around with new gadgets. 
            <span className="text-[#f0883e]">Tech is my playground!</span> 📸
          </p>
        </div>
      );
    case 'socials':
      return (
        <div className="space-y-2">
          <p>Here's where you can find me online:</p>
          <div className="flex flex-col space-y-1">
            <div className="flex">
              <span className="text-[#f0883e] w-24">GitHub</span>
              <a href="https://github.com/Parthchauh" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff]">
                parthcodehub
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">X</span>
              <a href="https://x.com/ParthCh96425915" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff]">
                Parth Chauhan
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">LinkedIn</span>
              <a href="https://www.linkedin.com/in/parthchauhan0702/" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff]">
                Parth Chauhan(linkedin)
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">Instagram</span>
              <a href="https://www.instagram.com/parthcodehub/" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff]">
                @parthcodehub
              </a>
            </div>
          </div>
        </div>
      );
    case 'skills':
      return (
        <div className="space-y-2">
          <div>
            <span className="text-[#f0883e]">Languages (in order of proficiency):</span>
            <p className="text-[#8b949e]">JavaScript, TypeScript, Python, Java</p>
          </div>
          <div>
            <span className="text-[#f0883e]">Frameworks/Libraries:</span>
            <p className="text-[#8b949e]">React (NextJS), Express, Node.js, MongoDB</p>
          </div>
          <div>
            <span className="text-[#f0883e]">Databases/Infrastructure:</span>
            <p className="text-[#8b949e]">MongoDB, SQL, Docker</p>
          </div>
        </div>
      );
    case 'clear':
      setCommand([]);
      return '';
    case 'resume':
      window.open('https://drive.google.com/file/d/1JPknA4k1APiF4_kY-tASxelkuLOFeRAo/view?usp=drive_link', '_blank');
      return 'Opening resume in a new tab...';
    case 'experience':
      return (
        <div className="space-y-6">
          {[
            {
              company: 'Infonaya Softwares',
              role: 'Database Developer Intern',
              location: 'Location:- Anand,Gujarat',
              date: '2022 - 2023',
              description:
                'As a Database Developer Intern, I managed and maintained relational databases, ensuring optimal performance, security, and data integrity. I developed and optimized database structures, schemas, and queries to meet business requirements.',
              achievements: [
                'Managed and maintained relational databases for optimal performance.',
                'Developed and optimized database structures, schemas, and queries.',
                'Implemented backup and recovery strategies to safeguard data.',
                'Conducted database performance tuning and optimization for scalability.',
                'Collaborated with cross-functional teams to align database solutions with business needs.',
              ],
              icon: <FaRocket />,
            },
          ].map((exp, index) => (
            <div key={index} className="space-y-2">
              <div className="flex space-x-4">
                {exp.icon}
                <div>
                  <h3 className="text-[#f0883e] font-semibold">{exp.role}</h3>
                  <p className="text-[#8b949e]">{exp.company}</p>
                  <p className="text-[#8b949e]">{exp.date}</p>
                </div>
              </div>
              <p className="text-[#8b949e]">{exp.description}</p>
              <ul className="list-disc pl-6 text-[#8b949e]">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case 'goals':
      return (
        <div className="space-y-2">
          <p>
            I'm constantly pushing my limits to become a better developer. Here are some of my short-term and long-term goals:
          </p>
          <div className="space-y-1">
            <div className="flex items-start">
              <FaLightbulb className="mr-2 text-[#58a6ff]" size={20} />
              <span className="text-[#f0883e]">Short-term:</span>
              <p className="text-[#8b949e]">Improve my full-stack development skills and i will learn more about cloud computing.</p>
            </div>
            <div className="flex items-start">
              <FaFire className="mr-2 text-[#58a6ff]" size={20} />
              <span className="text-[#f0883e]">Long-term:</span>
              <p className="text-[#8b949e]">Master cloud computing, specifically AWS and GCP, and become a lead developer in a tech company.</p>
            </div>
          </div>
        </div>
      );
    default:
      return 'Command not found!';
  }
};
