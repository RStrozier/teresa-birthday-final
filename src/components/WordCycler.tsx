import { useEffect, useState } from 'react';

const WordCycler = () => {
    const words = ['capture', 'express', 'identify', 'project'];
    const [currentWord, setCurrentWord] = useState(words[0]);
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % words.length; // Cycle through the words
            setCurrentWord(words[index]);
        }, 1950); 

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
      <div className="text-lg poppins-medium">
        Verses that
        <div className="word-array purple-text">
          {currentWord}
        </div>
        your spirit:
      </div>
    );
};

export default WordCycler;