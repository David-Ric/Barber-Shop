import styles from './Footer.module.scss';
import logo from 'assets/logob.png';

export default function Footer() {
  return (
    <>
    
    <footer className={styles.footer}>
      <div>
        <p>Rua Adalto Lavrel, 876 - Bom Sucesso</p>
        <p>Fortaleza - Ceará</p><br />
        <p>Fones: (85) 99999-9999 | (85) 3333-3333</p>
        </div>
        <div className={styles.barra}></div>
      <img src={logo} alt="" /> 
    </footer>
    
    </>
  );
}
