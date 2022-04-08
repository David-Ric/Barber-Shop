
import stylesTema from 'styles/Tema.module.scss';
import Menu from '../../components/Menu';
import styles from './Inicio.module.scss';

export default function Inicio() {
  return (
    <>
    <div>
      <Menu/>
    </div>
    <div className={stylesTema.container}>

      <h3 className={stylesTema.titulo}>Robinson Barbearia</h3>
      <p className={styles.inicio__text}>"A melhor Barbearia da cidade"</p>
      <img className={styles.inicio__banner} src="../../assets/frenteinicio.jpeg" alt="imagem" />
      <div className={styles.inicio__text}>
      <p>Os melhores serviços e produtos</p>
      <p>você encontra aqui!!!</p>
      </div>
  
    </div>
   
    </>
  );
}
