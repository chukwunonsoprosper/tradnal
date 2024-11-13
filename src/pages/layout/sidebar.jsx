import image from "../image/headshot-pretty-young-woman-with-crisp-dark-hair-enjoys-pleasant-telephone-talk-holds-takeaway-coffee-cup-wears-round-spectacles-purple-jumper-being-talkative-uses-modern-technologies 2.png";
import { useState } from "react";
const Sidebar = () => {
    const [showNav, updateside] = useState(true);

    const hide = () => {
        updateside((c) => (c = !c));
    };
    return (
        <>
            {showNav ? (
                <div className="activitySection">
                    <div className="closeb">
                        <span onClick={hide}>{"<<"}</span>
                    </div>

                    <div className="inputSearch">
                        <i className="ri-search-line"></i>
                        <input type="text" placeholder="Search your journal" />
                    </div>

                    <div className="savedJournal">
                        <span>Saved Journal</span>

                        <div className="theJournal">
                            <div className="ie">
                                <i className="ri-money-dollar-circle-line"></i>
                                <span id="pair">AUD/USD trade summary</span>
                                <div className="statuewin"></div>
                            </div>

                            <div className="ie">
                                <i className="ri-money-dollar-circle-line"></i>
                                <span id="pair">AUD/USD trade summary</span>
                                <div className="statueloss"></div>
                            </div>
                        </div>
                    </div>

                    <div className="acc">
                        <div className="profile">
                            <img src={image} alt="" />
                            <span>Prosper</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="closebnow">
                    <span onClick={hide}>{">>"}</span>
                </div>
            )}
        </>
    );
};

export default Sidebar;
