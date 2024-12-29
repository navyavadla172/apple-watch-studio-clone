import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link href="/">
          <a>Apple Watch Studio Clone</a>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
