import { useState } from 'react';
import "./css/Event.css";

const Event = () => {
    const [pageID, setPageID] = useState(0);
    const [subCat, setSubCat] = useState(0);
    const [mainDropdownOpen, setMainDropdownOpen] = useState(false);
    const [subDropdownOpen, setSubDropdownOpen] = useState(false);

    const mainOptions = ["AInnovation", "DataQuest", "CUCAI"];
    const subOptions = ["Images", "Winners", "Metrics"];

    const toggleMainDropdown = () => {
        setMainDropdownOpen(!mainDropdownOpen);
        if (!mainDropdownOpen) setSubDropdownOpen(false);
    };

    const toggleSubDropdown = () => {
        setSubDropdownOpen(!subDropdownOpen);
        if (!subDropdownOpen) setMainDropdownOpen(false);
    };

    return (
        <div className="Event">
            <div className="bar">
                <div className="row">
                    <div className="col">
                        <div className="cat">
                            <div className="dropdown">
                                <button onClick={toggleMainDropdown} className="dropdown-button">
                                    {mainOptions[pageID]} ▾
                                </button>
                                {mainDropdownOpen && (
                                    <div className="dropdown-menu">
                                        {mainOptions.map((option, index) => (
                                            <div 
                                                key={index} 
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setPageID(index);
                                                    setMainDropdownOpen(false);
                                                }}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="profile-circle"></div>
                </div>
                <div className="row">
                    <div className="descript">
                        {pageID === 0 && <p>short description for AInnov</p>}
                        {pageID === 1 && <p>short description for DataQuest</p>}
                        {pageID === 2 && <p>short description for CUCAI</p>}
                    </div>
                    <div className="dropDown">
                        <div className="dropdown subCat">
                            <button onClick={toggleSubDropdown} className="dropdown-button">
                                {subOptions[subCat]} ▾
                            </button>
                            {subDropdownOpen && (
                                <div className="dropdown-menu">
                                    {subOptions.map((option, index) => (
                                        <div 
                                            key={index} 
                                            className="dropdown-item"
                                            onClick={() => {
                                                setSubCat(index);
                                                setSubDropdownOpen(false);
                                            }}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pageInfo">
                {(pageID === 0 && subCat === 0) && <div className="info">images for ai</div>}
                {(pageID === 0 && subCat === 1) && <div className="info">w for ai</div>}
                {(pageID === 0 && subCat === 2) && <div className="info">metric for ai</div>}

                {(pageID === 1 && subCat === 0) && <div className="info">images for data</div>}
                {(pageID === 1 && subCat === 1) && <div className="info">win for data</div>}
                {(pageID === 1 && subCat === 2) && <div className="info">metric for data</div>}

                {(pageID === 2 && subCat === 0) && <div className="info">images for cu</div>}
                {(pageID === 2 && subCat === 1) && <div className="info">win for cu</div>}
                {(pageID === 2 && subCat === 2) && <div className="info">metric for cu</div>}
            </div>
        </div>
    );
};

export default Event;