import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
       
      }}
    >
    
      <ul style={{ display: 'flex',  justifyContent: 'space-between',
        listStyle: 'none',  }}>
        <li style={{marginRight: '20px', }}>
          <NavLink className="nav" to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/Movies" >Movies</NavLink>
        </li>
        
      </ul>
    </div>
  );
}