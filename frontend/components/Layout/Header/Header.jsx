import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import {
  UserOutlined,
  UserDeleteOutlined,
  UserAddOutlined
} from '@ant-design/icons';

import { APP_NAME } from '../../../config';

import styles from './Header.module.css';

const Header = () => {
  const [current, setCurrent] = useState('login');

  const handleClick = e => {
    console.log('click ', e);

    setCurrent(e.key);
  };

  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <a className={styles.header__logo}>{APP_NAME}</a>
        </Link>
      </div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="signin">
          <UserOutlined />
          <Link href="/signin">
            <a>Вход</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <UserAddOutlined />
          <Link href="/signup">
            <a>Регистрация</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="signout">
          <UserDeleteOutlined />
          Выход
        </Menu.Item>
      </Menu>
    </div>
  );
};

export { Header };
