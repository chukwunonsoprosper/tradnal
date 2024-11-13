import Sidebar from "./layout/sidebar";
import { useContext } from "react";
import { appInformation } from "../App";
import { useState, useEffect } from "react";
const Home = () => {
  const appData = useContext(appInformation);
  const [journal, showJournal] = useState(false);
  const [viewJournal, setViewJournal] = useState("");

  useEffect(() => {
    const href = window.location.href;
    const newJournalData = href.split("?");
    newJournalData[1] != undefined ? showJournal(!journal) : showJournal(false);
    setViewJournal(newJournalData[1]);
  }, []);

  return (
    <div className="appPage">
      <Sidebar />

      <div className="activityOverview">
        {journal ? (
          <div className="firstScreen">
            <div className="thejournal">
              <p>you are currently viewing {viewJournal}</p>
            </div>
          </div>
        ) : (
          <div className="firstScreen">
            <div className="screen">
              <h2>{appData.homepage[0].screen}</h2>
            </div>

            <div className="newJournal">
              <span>+</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
