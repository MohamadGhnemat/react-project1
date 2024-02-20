import style from "./Navbar.module.css"
function Navbar({count,age}){
    
   
return (
    <nav className={style.bg}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact {age}</a>
        <a href="#">Cart {count}</a>
    </nav>
)
}

export default Navbar;