import Sidebar from "./layout/sidebar";
import { useContext } from "react";
import { appInformation } from "../App";
import { journalDataArray } from "./home";
const Publicjournal = () => {
    const appData = useContext(appInformation)
    return (
        <div className="appPage">
            <Sidebar savedJournal={journalDataArray} />

            <div className="activityOverview">
                <div className="firstScreen">
                    <div className="screen">
                        <h2>{appData.publicJournal[0].welcome}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publicjournal;