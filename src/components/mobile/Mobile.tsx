import Link from "next/link"
import React from "react";

export const Mobile = () => {
  return (
    <>
      <div>
        <span className="text technology">— </span>
        <Link target="_blank" href="https://youtu.be/K-aD8ClG1FQ" className="text yes">React Native</Link>
        <span className="text technology"> / </span>
        <Link target="_blank" href="https://www.jscamp.app/ru/docs/reactnative016" className="text yes">Expo cli</Link>
        <span className="text technology"> / </span>
        <Link target="_blank" href="https://habr.com/ru/companies/neoflex/articles/428912/" className="text yes">React Native cli</Link>
      </div>
    </>
  );
};
