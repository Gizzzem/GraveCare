
import "./topBar.css"
import {Link} from "react-router-dom";

export default function TopBar() {
    const user= true;
  return (
    <div className='top'>
        <div className="topLeft">
        <img className="topIcon" src="https://img.icons8.com/metro/26/000000/cemetery.png"/>
       Eskişehir Mezar Bakım
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className= "topListItem" >
                    <Link className="link" to="/home">ANASAYFA</Link>
                </li>
                <li className= "topListItem" ><Link className="link" to="/about">HAKKIMIZDA</Link>
</li>
                <li className= "topListItem" ><Link className="link" to="/write">İLETİŞİM</Link>
</li>
                {/* <li className= "topListItem" ><Link className="link" to="/write">WRITE</Link>
</li>
                <li className= "topListItem" >
                    {user && "LOGOUT"}
                    </li> */}
            </ul>
        </div>
        <div className="topRight">
            {/* { user ? (
            <img
                className="topImage"
                src="https://i.pinimg.com/564x/0e/35/8d/0e358d98578648662715198235ce64ee.jpg" 
                alt="" />
                ): ( */}
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                    {/* )} */}
                    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
    
  )
}
        