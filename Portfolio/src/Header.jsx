import './Header.css'
import logo from './assets/logo.png'

function Header(){
  return(
    <>
    <header>
      <nav className="navbar">
        <div className="logo"><a href="#">Biraj</a></div>
        <ul className='list'>
          <li><a href="#home">Home</a></li>
          <li> <a href="#home">About</a></li>
          <li><a href="#home">Skills</a></li>
          <li><a href="#home">Projects</a></li>
          <li><a href="#home">Contact</a></li>
        </ul>
      </nav>
      </header>
    </>
  )
}

export default Header