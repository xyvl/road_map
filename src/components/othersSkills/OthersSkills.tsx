import Link from "next/link"
import React from "react";

export const OthersSkills = () => {
  // 	— Git / GitHub / GitLab
  // — SOLID / ООП
  // — Docker
  // — JSON
  return (
    <>
      <div>
        <span className="text technology">— </span>
        <Link target="_blank" href="https://youtu.be/O00FTZDxD0o" className="text yes">Git</Link>
        <span className="text technology"> / </span>
        <Link target="_blank" href="https://github.com" className="text yes">GitHub</Link>
      </div>
      <div>
        <span className="text technology">— </span>
        <Link target="_blank" href="https://youtu.be/TxZwqVTaCmA" className="text no">SOLID</Link>
        <span className="text technology"> / </span>
        <Link target="_blank" href="https://youtu.be/-6DWwR_R4Xk" className="text yes">ООП</Link>
      </div>
      <div>
        <span className="text technology">— </span>
        <Link target="_blank" href="https://youtu.be/94fHz4w65PY" className="text yes">JSON</Link>
      </div>
    </>
  );
};
