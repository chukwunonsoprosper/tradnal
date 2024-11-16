import Sidebar from "./layout/sidebar";
import { useContext } from "react";
import { appInformation } from "../App";
import { journalDataArray } from "./home";
const Stat = () => {
    const appData = useContext(appInformation)
    return (
        <div className="appPage">
            <Sidebar savedJournal={journalDataArray} />

            <div className="activityOverview">
                <div className="firstScreen">
                    <div className="statsContainer">
                        <h2>Trading Statistics</h2>
                        <div className="statsGrid">
                            <div className="statBox">
                                <h3>Total Trades</h3>
                                <p>{journalDataArray.length}</p>
                            </div>
                            <div className="statBox">
                                <h3>Win Rate</h3>
                                <p>
                                    {((journalDataArray.filter(trade => trade.outcome === 'Win').length / journalDataArray.length) * 100).toFixed(2)}%
                                </p>
                            </div>
                            <div className="statBox">
                                <h3>Total Profit/Loss</h3>
                                <p>
                                    ${journalDataArray.reduce((total, trade) => total + (trade.profitLoss || 0), 0).toFixed(2)}
                                </p>
                            </div>
                            <div className="statBox">
                                <h3>Average Trade</h3>
                                <p>
                                    ${(journalDataArray.reduce((total, trade) => total + (trade.profitLoss || 0), 0) / journalDataArray.length).toFixed(2)}
                                </p>
                            </div>
                            <div className="statBox">
                                <h3>Best Trade</h3>
                                <p>
                                    ${Math.max(...journalDataArray.map(trade => trade.profitLoss || 0)).toFixed(2)}
                                </p>
                            </div>
                            <div className="statBox">
                                <h3>Worst Trade</h3>
                                <p>
                                    ${Math.min(...journalDataArray.map(trade => trade.profitLoss || 0)).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stat;