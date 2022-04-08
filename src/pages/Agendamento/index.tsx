import stylesTema from 'styles/Tema.module.scss';
import Menu from '../../components/Menu';
import { ReactDOM } from 'react';
import styles from './Agendamento.module.scss';

export default function Agendamento() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div className={stylesTema.container}>
        <h3 className={stylesTema.titulo}>Faça seu agendamento</h3>
        <div className={stylesTema.formulario}>
          Nome: <br />
          <input className={stylesTema.imptNome} name="nome" type="text" /> <br /><br />
          Fone: <br />
          <input className={stylesTema.imptfone} name="fone" type="text" /> <br /> <br />
          Dia: <br />
          <input className={stylesTema.imptDate} type="date" /><br /><br />
          Horario: <br />
          <input className={stylesTema.imptTime} type="time" /> <br /> <br />
          Tipo de serviço: <br />
          <input className={stylesTema.imptNome} name="nome" type="text" /> <br /><br />
          Observações: <br />
          <textarea className={stylesTema.obs}></textarea>
        </div>
        
      </div>
    </>
  );
}
