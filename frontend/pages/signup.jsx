import Link from 'next/link';
import { Layout } from '../components';

const Signup = () => {
  return (
    <Layout>
      <h2 className="main__title">Signup page</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
};

export default Signup;
