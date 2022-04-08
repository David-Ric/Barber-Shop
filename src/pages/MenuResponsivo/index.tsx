import styles from './MenuResponsivo.module.scss';
import { Link } from 'react-router-dom';
import MenuFechar from 'components/MenuFechar';
import logo from 'assets/logob.png';

export default function MenuResponsivo(){
 
    const rotas = [
        {
          label: 'INÍCIO',
          to: '/',
        },
        {
          label: 'LOJA',
          to: '/loja',
        },
        {
          label: 'SOBRE',
          to: '/sobre',
        },
        {
          label: 'AGENDAMENTO',
        to: '/agendamento',
      },
      
      ];
    return(
      <>
      <div>
        <MenuFechar/>
      </div>
        <section className={styles.nav}>
             <ul className={styles.list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
         <div className={styles.logo}>
        <img src={logo} alt="ds" />
      </div>
      </ul>
        </section>
        
        </>
    )
}