import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <h1>Select your option</h1>
      <nav>
        <NavLink to="/users">Users List</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </HeaderContainer>
  );
}
