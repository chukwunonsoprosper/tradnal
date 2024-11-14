import Sidebar from "./layout/sidebar";
import { useContext } from "react";
import { appInformation } from "../App";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Home = () => {
  const appData = useContext(appInformation);
  const [journal, showJournal] = useState(false);
  const [viewJournal, setViewJournal] = useState("");
  const {param} = useParams()

  useEffect(() => {
   param ? showJournal(true) : showJournal(false);
  }, []);


  return (
    <div className="appPage">
      <Sidebar />

      <div className="activityOverview">
        {journal ? (
          <div className="firstScreen">
            <div className="thejournal">
              <p>you are currently viewing {param}</p>
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
