import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
}