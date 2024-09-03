
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <>
        <nav className="container flex flex-row justify-around items-center">
            <a href="#">About</a>
            <a href="#">Explore</a>
            <a href="#"><img src={Logo} alt="" className="w-14"/></a>
            <a href="#">Journal</a>
            <a href="#">Search</a>
        </nav>   
    </>
  )
}

export default Navbar
