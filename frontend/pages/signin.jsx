import Link from 'next/link';
import { Layout } from '../components';

const Signin = () => {
  return (
    <Layout>
      <h2 className="main__title">Signin page</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
};

export default Signin;
