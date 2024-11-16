import Sidebar from "./layout/sidebar";
import { useContext } from "react";
import { appInformation } from "../App";
import { journalDataArray } from "./home";
const Profile = () => {
    const appData = useContext(appInformation)
    return (
        <div className="appPage">
            <Sidebar savedJournal={journalDataArray} />

            <div className="activityOverview">
                <div className="firstScreen">
                    <div className="profileContainer">
                        <div className="profileHeader">
                            <h2>Trading Profile</h2>
                            <div className="profileStats">
                                <div className="statBox">
                                    <span className="statLabel">Total Trades</span>
                                    <span className="statValue">{journalDataArray.length}</span>
                                </div>
                                <div className="statBox">
                                    <span className="statLabel">Win Rate</span>
                                    <span className="statValue">
                                        {Math.round((journalDataArray.filter(trade => !trade.profit.startsWith('-')).length / journalDataArray.length) * 100)}%
                                    </span>
                                </div>
                                <div className="statBox">
                                    <span className="statLabel">Total Pips</span>
                                    <span className="statValue">
                                        {journalDataArray.reduce((total, trade) => {
                                            const pips = parseInt(trade.profit);
                                            return total + (isNaN(pips) ? 0 : pips);
                                        }, 0)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="recentTrades">
                            <h3>Recent Trades</h3>
                            <div className="tradesList">
                                {journalDataArray.slice(0, 5).map((trade, index) => (
                                    <div key={index} className="tradeItem">
                                        <span className="tradePair">{trade.chartName}</span>
                                        <span className="tradeProfit" style={{color: trade.profit.startsWith('-') ? 'red' : 'green'}}>
                                            {trade.profit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;