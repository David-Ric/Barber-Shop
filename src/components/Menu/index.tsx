import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import logo from 'assets/logob.png';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const navigate = useNavigate();
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
  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>
        <img src={logo} alt="ds" />
      </div>
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>

      <button
        className={styles.hambuerguer}
        onClick={() => navigate('/MenuResponsivo')}
      ></button>
    </nav>
  );
}
