import { Header } from './Header';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <p>footer</p>
    </div>
  );
};

export { Layout };
