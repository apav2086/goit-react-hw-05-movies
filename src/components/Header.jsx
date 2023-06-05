import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
    
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li>
          <NavLink className="nav" to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/Movies" >Movies</NavLink>
        </li>
        
      </ul>
    </div>
  );
}