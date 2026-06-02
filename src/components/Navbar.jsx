import '../App.css';

const Navbar = ({ logo, havola }) => {
  return (
    <nav className="navbar">
      <h1>Navbar: {logo}</h1>
      <a href={`${havola}`}>Instagramga o'ting</a>
    </nav>
  )
}

export default Navbar;