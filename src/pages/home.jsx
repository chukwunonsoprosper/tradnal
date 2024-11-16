import Sidebar from "./layout/sidebar";
import { useContext } from "react";
import { appInformation } from "../App";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import profile from '../pages/image/headshot-pretty-young-woman-with-crisp-dark-hair-enjoys-pleasant-telephone-talk-holds-takeaway-coffee-cup-wears-round-spectacles-purple-jumper-being-talkative-uses-modern-technologies 2.png'
import 'react-toastify/dist/ReactToastify.css';
export const journalDataArray = [
  { chartName: 'AUDUSD trade analyse', chartid: 'xyet3', entry: '0.5383882', exit: '0288492', profit: '300pips', type: 'statuewin' },
  { chartName: 'EURUSD Analysis', chartid: 'abc123', entry: '1.0892', exit: '1.0945', profit: '53pips', type: 'statuewin' },
  { chartName: 'GBPJPY Setup', chartid: 'def456', entry: '182.450', exit: '183.200', profit: '75pips', type: 'statuewin' },
  { chartName: 'USDJPY Trade', chartid: 'ghi789', entry: '147.850', exit: '147.200', profit: '-65pips', type: 'statueloss' },
  { chartName: 'EURGBP Analysis', chartid: 'jkl012', entry: '0.8645', exit: '0.8595', profit: '-50pips', type: 'statueloss' },
  { chartName: 'NZDUSD Setup', chartid: 'mno345', entry: '0.6125', exit: '0.6185', profit: '60pips', type: 'statuewin' },
  { chartName: 'USDCAD Trade', chartid: 'pqr678', entry: '1.3545', exit: '1.3495', profit: '50pips', type: 'statuewin' },
  { chartName: 'CHFJPY Analysis', chartid: 'stu901', entry: '171.250', exit: '172.100', profit: '85pips', type: 'statuewin' },
  { chartName: 'EURJPY Setup', chartid: 'vwx234', entry: '158.750', exit: '159.200', profit: '45pips', type: 'statuewin' },
  { chartName: 'GBPUSD Trade', chartid: 'yz5678', entry: '1.2645', exit: '1.2595', profit: '-50pips', type: 'statueloss' },
  { chartName: 'AUDJPY Analysis', chartid: 'bcd901', entry: '97.850', exit: '98.200', profit: '35pips', type: 'statuewin' },
  { chartName: 'NZDJPY Setup', chartid: 'efg234', entry: '89.450', exit: '88.950', profit: '-50pips', type: 'statueloss' },
  { chartName: 'USDCHF Trade', chartid: 'hij567', entry: '0.8845', exit: '0.8795', profit: '-50pips', type: 'statueloss' },
  { chartName: 'EURNZD Analysis', chartid: 'klm890', entry: '1.7845', exit: '1.7925', profit: '80pips', type: 'statuewin' },
  { chartName: 'GBPCAD Setup', chartid: 'nop123', entry: '1.7125', exit: '1.7225', profit: '100pips', type: 'statuewin' },
  { chartName: 'AUDNZD Trade', chartid: 'qrs456', entry: '1.0845', exit: '1.0795', profit: '-50pips', type: 'statueloss' },
  { chartName: 'EURCAD Analysis', chartid: 'tuv789', entry: '1.4725', exit: '1.4825', profit: '100pips', type: 'statuewin' },
  { chartName: 'GBPCHF Setup', chartid: 'wxy012', entry: '1.1145', exit: '1.1095', profit: '-50pips', type: 'statueloss' },
  { chartName: 'AUDCAD Trade', chartid: 'zab345', entry: '0.8945', exit: '0.9015', profit: '70pips', type: 'statuewin' }
]
const Home = () => {
  const appData = useContext(appInformation);
  const [journal, showJournal] = useState(false);
  const [viewJournal, setViewJournal] = useState("");
  const [journalArray, updateJournalArray] = useState([])
  const { param } = useParams();



  useEffect(() => {
    param ? (() => {
      showJournal(true);
      toast.info('you are currently viewing journal ' + param)
      updateJournalArray(journalDataArray.filter((x) => x.chartid == param))
    })() : (() => {
      showJournal(false);
    })()
  }, [param]);

  return (
    <div className="appPage">
      <Sidebar savedJournal={journalDataArray}/>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="activityOverview">
        {journal && journalArray.length ? (
          <div className="firstScreen">
            <div className="thejournal">
              {journalArray.map((d, index) => (
                <div className="journalCard" key={index}>
                  <div className="cardHeader">
                    <h2>{d.chartName}</h2>
                    <div className="authorInfo">
                      <img src={profile} alt="Author" className="authorImage" />
                      <span className="authorName">Prosper</span>
                    </div>
                  </div>

                  <div className="journalContent">
                    <div className="journalDetails">
                      <div className="detailRow">
                        <span className="label">Entry Price:</span>
                        <span className="value">{d.entry}</span>
                      </div>
                      <div className="detailRow">
                        <span className="label">Exit Price:</span>
                        <span className="value">{d.exit}</span>
                      </div>
                      <div className="detailRow">
                        <span className="label">Profit/Loss:</span>
                        <span className="value profit" style={{ color: (d.profit.startsWith('-')) ? 'red' : 'green' }}>{d.profit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="firstScreen">
            <div className="screen">
              <h2>{param ? 'This journal does not exit' : 'select a journal to preview'}</h2>
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
