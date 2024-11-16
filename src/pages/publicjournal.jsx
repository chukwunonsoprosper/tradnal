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
                    <div className="profileContainer">
                        <div className="profileHeader">
                            <h2>Public Trading Journals</h2>
                        </div>

                        <div className="journalsList">
                            {journalDataArray.map((journal, index) => (
                                <div key={index} className="journalEntry">
                                    <div className="authorInfo">
                                        <img src={journal.authorImage || 'default-avatar.png'} alt="" className="authorImage" />
                                        <span className="authorName">{journal.author || 'Anonymous Trader'}</span>
                                    </div>

                                    <div className="journalContent">
                                        <div className="journalDetails">
                                            <div className="detailRow">
                                                <span className="label">Currency Pair</span>
                                                <span className="value">{journal.chartName}</span>
                                            </div>
                                            <div className="detailRow">
                                                <span className="label">Trade Type</span>
                                                <span className="value">{journal.type === 'statuewin' ? 'Win' : 'Loss'}</span>
                                            </div>
                                            <div className="detailRow">
                                                <span className="label">Profit/Loss</span>
                                                <span className={`value ${journal.profit.startsWith('-') ? 'loss' : 'profit'}`}>
                                                    {journal.profit} pips
                                                </span>
                                            </div>
                                            <div className="detailRow">
                                                <span className="label">Trade Strategy</span>
                                                <span className="value">{journal.strategy || 'Not specified'}</span>
                                            </div>
                                            <div className="detailRow">
                                                <span className="label">Date</span>
                                                <span className="value">{journal.date || 'Not specified'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publicjournal;