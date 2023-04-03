import styles from '../styles/Header.module.css';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle} className={styles.header}>
      <h1>Add Your To-Do</h1>
      <p>
        Using a to-do list can help you stay organized and
        on track with your tasks and responsibilities.
      </p>
    </header>
  );
};
export default Header;
