import { Outlet, Link } from "react-router-dom";
import usesta
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="firstELement">
                    <span>TradNally</span>
                </div>

                <div className="sideN">
                    <Link to='/home'><i className="ri-home-9-line"></i></Link>
                    <Link to='/profile'><i className="ri-user-line"></i></Link>
                    <Link to='/publicjournal'><i className="ri-article-line"></i></Link>
                    <Link to='/stat'><i className="ri-bar-chart-2-line"></i></Link>
                </div>
            </div>


            <Outlet />
        </>
    )
}

export default Header