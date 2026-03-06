  import React, { useEffect, useState, useCallback } from 'react';

  const ConstructionScreen = ({ loop = true, delayBetweenLoops = 2000 }) => {
    const [codeLines, setCodeLines] = useState([]);
    const [completed, setCompleted] = useState(false);



    const restartAnimation = useCallback(() => {
      setCodeLines([]);
      setCompleted(false);
    }, []);

  useEffect(() => {
      let timer;
      let timeout;

      // Mueve codeSnippets dentro del efecto si es constante
      const codeSnippets = [
      '<body>',
      '  <div className="construction-container">',
      '    <h1>',
      '       🚧 Página en Construcción 🚧',
      '    </h1>',
      '    <p>',
      '       Estamos trabajando duro para traerte algo increíble',
      '    </p>',
      '    <p>',
      '       Vuelve pronto!',
      '    </p>',
      '  </div>',
      '</body>',
      ];

      const startTyping = () => {
        timer = setInterval(() => {
          if (codeLines.length < codeSnippets.length) {
            setCodeLines(prev => [...prev, codeSnippets[prev.length]]);
          } else {
            clearInterval(timer);
            setCompleted(true);
            
            if (loop) {
              timeout = setTimeout(() => {
                restartAnimation();
              }, delayBetweenLoops);
            }
          }
        }, 600);
      };

      startTyping();

      return () => {
        clearInterval(timer);
        clearTimeout(timeout);
      };
    }, [codeLines, loop, delayBetweenLoops, restartAnimation]); // Elimina codeSnippets de las dependencias

    return (
      <div className="flex justify-center items-center p-4">
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl 
                      w-full lg:w-[700px] lg:min-w-[700px] lg:max-w-[700px] 
                      h-auto lg:h-[440px] lg:min-h-[440px] lg:max-h-[440px] 
                      border border-gray-700">
          <div className="bg-gray-800 p-2 flex items-center">
            <div className="flex space-x-2 mr-3">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="text-gray-300 text-sm">index.html - Visual Studio Code</div>
          </div>
          <div className="p-4 font-mono text-sm overflow-y-auto h-full">
            {codeLines.map((line, index) => (
              <div key={index} className={`flex ${index % 3 === 0 && index !== 0 && index < 10 ? 'text-pink-500' : 'text-green-400'}`}>
                <span className="w-8 text-gray-500 select-none">{index + 1}</span>
                <span className="whitespace-pre">{line}</span>
              </div>
            ))}
            {!completed && <div className="text-green-400 animate-blink">|</div>}
            {completed && (
              <div className="mt-4 text-center text-cyan-400">
                🚧 Estamos trabajando duro para traerte algo increíble 🚧
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default ConstructionScreen;