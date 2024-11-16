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
                                        <img src={journal.authorImage || 'https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-1/460893366_557998126567581_8735046666777833700_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFkYelOu4K-K6UwU-2azpyQZrSHvOSluRxmtIe85KW5HDBwhfplGzhp4C3GbLtJL608gSZNFOVuhYue2E_DqS1I&_nc_ohc=DDzcSiZ9-a0Q7kNvgEpFHel&_nc_zt=24&_nc_ht=scontent-lis1-1.xx&_nc_gid=AnHcGgRA-RSVVlq3JXBonNA&oh=00_AYBgH-YXTamlzObbsZowbPeSrNIBFyEprsJyktpZibZXSg&oe=673E6403'} alt="" className="authorImage" />
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