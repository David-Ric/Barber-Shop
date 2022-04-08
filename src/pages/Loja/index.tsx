import styles from './Loja.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
 import Filtros from './Filtros';
// import Ordenador from './Ordenador';
import Itens from './Itens';
import stylesTema from 'styles/Tema.module.scss';
import Menu from 'components/Menu';

export default function Loja() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, ] = useState('');
  return (
    <>
      <Menu />
      <div className={stylesTema.container}>
        <section className={styles.cardapio}>
          <h3 className={stylesTema.titulo}>Nossos Produtos</h3>
          <Buscador busca={busca} setBusca={setBusca} />
          <div className={styles.cardapio__filtros}>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            {/* <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} /> */}
          </div>
          <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
        </section>
      </div>
    </>
  );
}
