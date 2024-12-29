import Link from 'next/link';

const IndexPage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to the Apple Watch Studio Clone</h2>
      <Link href="/watch-studio">
        <a>Start Customizing</a>
      </Link>
    </div>
  );
};

export default IndexPage;
