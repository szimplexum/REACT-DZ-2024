import styles from './CssModule.module.css';

export default function CssModule() {
  return (
    <div className={`${styles.container} ${styles.font}`}>
      <h1>Css Module design</h1>
      <p>This text is styled using a css modules.</p>
    </div>
  );
}
