import React from 'react';

export default function Component() {
  return (
    <section className="component flex items-center justify-center flex-col text-center p-6 rounded-b-[35px] md:rounded-t-[35px]">
      <p className="text-lg text-lightLavender font-medium">Your Result</p>

      <div className="circle w-[150px] h-[150px] rounded-full bg-violetBlueCircle text-center flex flex-col items-center justify-center my-4">
        <h1 className="text-4xl text-white font-bold">76</h1>
        <p className="text-sm text-lightLavender font-medium">of 100</p>
      </div>

      <h3 className="text-xl text-white font-bold mb-2">Great</h3>
      <p className="text-sm text-lightLavender text-medium max-w-[300px]">You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  );
}
