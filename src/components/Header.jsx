import { NavLink } from 'react-router-dom';
import css from '../styles/header.module.css';
export default function Header() {
  return (
    <div className={css.header}>
    
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={css.nav} to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink className={css.nav} to="/Movies" >Movies</NavLink>
        </li>
        
      </ul>
    </div>
  );
}