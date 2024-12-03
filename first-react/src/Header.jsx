export default function HeaderComponent(){
    return(
      <header className="header">
        <img src="src/assets/react-logo.png" width="40px" alt="react-logo" />
        <nav>
          <ul className="nav-class">
            <li className="nav-class-item">Pricing</li>
            <li className="nav-class-item">About</li>
            <li className="nav-class-item">Contact</li>
          </ul>
        </nav>
      </header>
    )
  }