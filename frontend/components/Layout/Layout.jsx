import { Header } from './Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <p>footer</p>
    </div>
  );
};

export { Layout };
