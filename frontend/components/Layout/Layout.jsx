import { Header } from './Header';

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      {children}
      <p>footer</p>
    </div>
  );
};

export { Layout };
