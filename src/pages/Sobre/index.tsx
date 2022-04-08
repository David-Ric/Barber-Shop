import stylesTema from 'styles/Tema.module.scss';
import Menu from '../../components/Menu';
import styles from './Sobre.module.scss';

export default function Sobre() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div className={stylesTema.container}>
        <h3 className={stylesTema.titulo}>Robinson Barbearia</h3>
        <p className={styles.inicio__tex}>"Nossa historia"</p>
        <img className={styles.inicio__banner} src="../../assets/sobre.jpg" alt="imagem" />
        <div className={styles.inicio__text}>
          <p>
            Estamos a mais de 10 anos com vocês, ja fazemos parta da sua vida,
            podemos falar que em todos os momentos, fáceis ou difíceis estivemos
            ao seu lado, dando o real sentido da palavra "amigo barbeiro"!!!
          </p>
        </div>
      </div>
    </>
  );
}
