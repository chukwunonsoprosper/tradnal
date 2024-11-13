import Sidebar from "./layout/sidebar";
import { useContext } from "react";
import { appInformation } from "../App";
const Profile = () => {
    const appData = useContext(appInformation)
    return (
        <div className="appPage">
            <Sidebar />

            <div className="activityOverview">
                <div className="firstScreen">
                    <div className="screen">
                        <h2>profile</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;