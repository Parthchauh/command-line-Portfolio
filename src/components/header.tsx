import React from 'react';

const Header = () => {
  return (
    <div className="bg-[#0d1117] text-[#58a6ff] w-screen overflow-x-hidden font-mono p-4">
      <div className="max-w-3xl mx-auto">
        <pre className="text-[#58a6ff] font-bold mb-4">
          {`
 _____           _   _     
|  __ \         | | | |    
| |__) |__  _ __| |_| |__  
|  ___/ _ \| '__| __| '_ \ 
| |  | (_) | |  | |_| | | |
|_|   \___/|_|   \__|_| |_|
`}
        </pre>
        <div className="text-left text-[#c9d1d9]">
          <p>Welcome to my portfolio!</p>
          <p>
            Type <span className="text-[#f0883e]">help</span> to get a list of available commands.
          </p>
          <p>
            Use <span className="text-[#f0883e]">↑</span> and <span className="text-[#f0883e]">↓</span> to navigate command history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
