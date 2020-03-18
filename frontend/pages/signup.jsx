import { Layout, SignupComponent } from '../components';

const Signup = () => {
  return (
    <Layout>
      <h2 className="main__title">Регистрация пользователя</h2>
      <SignupComponent />
    </Layout>
  );
};

export default Signup;
