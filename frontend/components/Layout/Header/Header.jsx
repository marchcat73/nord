import { useState } from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  UserDeleteOutlined,
  UserAddOutlined
} from '@ant-design/icons';

import styles from './Header.module.css';

const Header = () => {
  const [current, setCurrent] = useState('login');

  const handleClick = e => {
    console.log('click ', e);

    setCurrent(e.key);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>logo</div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="login">
          <UserOutlined />
          Вход
        </Menu.Item>
        <Menu.Item key="registration">
          <UserAddOutlined />
          Регистрация
        </Menu.Item>
        <Menu.Item key="logout">
          <UserDeleteOutlined />
          Выход
        </Menu.Item>
      </Menu>
    </div>
  );
};

export { Header };
