import Sidebar from "./layout/sidebar";
import { useContext } from "react";
import { appInformation } from "../App";
const Stat = () => {
    const appData = useContext(appInformation)
    return (
        <div className="appPage">
            <Sidebar />

            <div className="activityOverview">
                <div className="firstScreen">
                    <div className="screen">
                        <h2>{appData.stat[0].statistic}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stat;