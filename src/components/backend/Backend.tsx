import Link from "next/link";
import React from "react";

export const Backend = () => {
  // 	— Node.JS
  // — NestJS / Express
  // — PostgreSQL
  // — RESTApi
  // — JWT / PassportJS
  // — WebSocket
  return (
    <>
      <div>
        <span className="text technology">— </span>
        <Link target="_blank" href="https://youtu.be/243pQXC5Ebs" className="text no">
          Node.JS
        </Link>
      </div>
      <div>
        <span className="text technology">— </span>
        <Link target="_blank" href="https://youtu.be/j2-GqaeSueA" className="text no">
          NestJS
        </Link>
        <span className="text technology"> / </span>
        <Link target="_blank"
          href="https://youtube.com/playlist?list=PLcvhF2Wqh7DP4tZ851CauQ8GqgqlCocjk"
          className="text yes"
        >
          Express
        </Link>
      </div>
      <div>
        <span className="text technology">— </span>
        <Link target="_blank" href="https://youtube.com/playlist?list=PLW-WSOmS5ONLUtq3dac8000Q5cXnoPbMT" className="text no">PostgreSQL</Link>
      </div>
      <div>
        <span className="text technology">— </span>
        <Link target="_blank" href="https://youtu.be/v7zq1DntN_Y" className="text yes">RESTApi</Link>
      </div>
      <div>
        <span className="text technology">— </span>
        <Link target="_blank" href="https://youtu.be/7iuwfKOcvkE" className="text no">JWT</Link>
        <span className="text technology"> / </span>
        <Link target="_blank" href="https://www.youtube.com/live/LDnwNtWIq_4?feature=share" className="text no">PassportJS</Link>
      </div>
      <div>
        <span className="text technology">— </span>
        <Link target="_blank" href="https://youtu.be/18E5B1AJ5mM" className="text no">WebSocket</Link>
      </div>
    </>
  );
};
