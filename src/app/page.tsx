"use client";

// Import React and necessary hooks from 'react'
import React, { useState, useCallback } from 'react';

// Define the Home functional component
export default function Home() {
  // Use the 'useState' hook to manage the state of the counter variable
  const [counter, setCounter] = useState<number>(0);

  // Define a callback function 'plus' that increments the counter
  const plus = useCallback(() => {
    // Use the updater function form of 'setCounter' to ensure the correct previous state is used
    setCounter(prevCounter => prevCounter + 1);
  }, [counter]); // Depend on 'counter' to avoid stale closures

  // Define a callback function 'minus' that decrements the counter
  const minus = useCallback(() => {
    // Use the updater function form of 'setCounter' to ensure the correct previous state is used
    setCounter(prevCounter => prevCounter - 1);
  }, [counter]); // Depend on 'counter' to avoid stale closures

  // Render the main component
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* Counter display and buttons */}
      <div className='flex  flex-row justify-between w-24'>
        {/* Button to increment counter */}
        <div onClick={() => plus()} className='cursor-pointer'>
          +
        </div>
        {/* Display the current counter value */}
        {counter}
        {/* Button to decrement counter */}
        <div onClick={() => minus()} className='cursor-pointer'>
          -
        </div>
      </div>
    </main>
  );
}