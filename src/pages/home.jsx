import Sidebar from "./layout/sidebar";
import { useContext } from "react";
import { appInformation } from "../App";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import profile from '../pages/image/headshot-pretty-young-woman-with-crisp-dark-hair-enjoys-pleasant-telephone-talk-holds-takeaway-coffee-cup-wears-round-spectacles-purple-jumper-being-talkative-uses-modern-technologies 2.png'
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const appData = useContext(appInformation);
  const [journal, showJournal] = useState(false);
  const [viewJournal, setViewJournal] = useState("");
  const {param} = useParams();


 useEffect(() => {
    param ? (() => {
      showJournal(true);
      toast.info('you are currently viewing this jounral')
    })() : (() => {
      showJournal(false);
    })()
}, [param]);

  return (
    <div className="appPage">
      <Sidebar />
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="activityOverview">
        {journal ? (
          <div className="firstScreen">
            <div className="thejournal">
                <h2>welcome</h2>
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
