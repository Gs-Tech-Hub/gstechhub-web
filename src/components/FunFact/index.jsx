import React from 'react';

export default function FunFact({ data, colorVariant }) {
  const funFacts = data && data.data ? data.data : [];

  if (!Array.isArray(funFacts) || funFacts.length === 0) {
    return <div>No fun facts available.</div>;
  }

  return (
    <div className="cs_counter_1_wrap">
      {funFacts.map((fact, index) => {
        const number = fact.attributes.Number;
        const shortenedNumber = number > 999 ? (number / 1000).toFixed(1) + 'k' : number;

        return (
          <div
            className={`cs_counter cs_style_1 position-relative d-flex align-items-center ${
              colorVariant ? colorVariant : ''
            }`}
            key={index}
          >
            <div
              className={`cs_counter_nmber mb-0 cs_fs_68 d-flex align-items-center cs_bold cs_primary_color`}
            >
              {shortenedNumber}
            </div>
            <p className="cs_counter_title mb-0">{fact.attributes.Title}</p>
          </div>
        );
      })}
    </div>
  );
}
