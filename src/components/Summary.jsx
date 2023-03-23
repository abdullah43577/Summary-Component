import React from 'react';
import data from '../data';

export default function Summary() {
  const dataObj = data.map((dataEl, i) => {
    return (
      <div className={`summary--component${i + 1} flex items-center justify-between p-4 rounded mb-2`} key={i + 1}>
        <div className="summary--component__detail flex items-center">
          <img src={dataEl.icon} alt={`icon ${dataEl.category}`} />
          <p className="ml-2 font-bold text-orangeYellow">{dataEl.category}</p>
        </div>

        <div className="detail--score flex items-center gap-1">
          <span className="text-darkGrayBlue font-bold">{dataEl.score}</span>
          <span className="text-lightLavender font-bold">/</span>
          <span className="text-lightLavender font-bold">100</span>
        </div>
      </div>
    );
  });

  return (
    <section className="summary mx-8">
      <p className="text-darkGrayBlue text-base font-bold my-4">Summary</p>
      {dataObj}
      <button className="bg-darkGrayBlue w-full py-3 text-white rounded-full my-4">Continue</button>
    </section>
  );
}
