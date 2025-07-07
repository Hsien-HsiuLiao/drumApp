// components/Guzheng.tsx
"use client"; // Marking this component as a Client Component

import React from 'react';

const noteFrequencies: { [key: string]: number } = {
  C: 261.63,
  D: 293.66,
  E: 329.63,
  F: 349.23,
  G: 392.00,
  A: 440.00,
  B: 493.88,
};

const Guzheng: React.FC = () => {
  const playNote = (frequency: number) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // You can change this to 'square', 'sawtooth', etc.
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5); // Play for 0.5 seconds
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-64 bg-yellow-200 border-4 border-gray-800 rounded-lg shadow-lg">
      <div className="relative w-full h-full flex flex-col justify-center">
        {Object.keys(noteFrequencies).map((note, index) => (
          <div
            key={note}
            className={`w-3/4 h-10 mb-2 bg-gray-600 rounded-lg cursor-pointer flex items-center justify-center text-white font-bold transition duration-200 hover:bg-gray-500 transform hover:scale-105`}
            onClick={() => playNote(noteFrequencies[note])}
            style={{
              position: 'absolute',
              top: `${(index + 1) * 12}rem`, // Adjust spacing between strings
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guzheng;
