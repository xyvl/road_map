import Link from "next/link";
import React from "react";

export const Blockchain = () => {
  return (
    <>
      <div>
        <span className="technology">— </span>
        <Link
          href="https://youtube.com/playlist?list=PLgG7lPwNdp556iIin-9eaJLlu7HL6YFv0"
          className="no"
        >
          Rust
        </Link>
        <span className="technology"> / </span>
        <Link href="https://youtube.com/playlist?list=PLgG7lPwNdp57aUoqLpR0Rk7Q5v4dFHsjg" className="no">
          Golang
        </Link>
      </div>
    </>
  );
};
