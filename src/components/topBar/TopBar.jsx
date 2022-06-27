
import "./topBar.css"
import {Link} from "react-router-dom";

export default function TopBar() {
    const user= false;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-solid fa-tornado"></i>
        <i className="topIcon fa-brands fa-pinterest-p"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className= "topListItem" >
                    <Link className="link" to="/home">HOME</Link>
                </li>
                <li className= "topListItem" ><Link className="link" to="/">ABOUT</Link>
</li>
                <li className= "topListItem" ><Link className="link" to="/">CONTECT</Link>
</li>
                <li className= "topListItem" ><Link className="link" to="/write">WRITE</Link>
</li>
                <li className= "topListItem" >
                    {user && "LOGOUT"}
                    </li>
            </ul>
        </div>
        <div className="topRight">
            { user ? (
            <img
                className="topImage"
                src="https://i.pinimg.com/564x/0e/35/8d/0e358d98578648662715198235ce64ee.jpg" 
                alt="" />
                ): (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                    )}
                    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
    
  )
}
        