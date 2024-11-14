import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { appInformation } from "../../App";
const Header = () => {
    const appData = useContext(appInformation)
    return (
        <>
            <div className="header">
                <div className="firstELement">
                    <span>{appData.appName}</span>
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