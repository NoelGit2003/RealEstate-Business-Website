import React, { useState, useEffect } from 'react';
import './BangloreHomePricePrediction.css';

const BangloreHomePricePrediction = () => {
    const [area, setArea] = useState('1000');
    const [bhk, setBhk] = useState('2');
    const [bathrooms, setBathrooms] = useState('2');
    const [location, setLocation] = useState('');
    const [locations, setLocations] = useState([]);
    const [estimatedPrice, setEstimatedPrice] = useState('');

    useEffect(() => {
        fetchLocationNames();
    }, []);

    const getBathValue = () => {
        const uiBathrooms = document.getElementsByName("uiBathrooms");
        for (let i = 0; i < uiBathrooms.length; i++) {
            if (uiBathrooms[i].checked) {
                return parseInt(i) + 1;
            }
        }
        return -1; // Invalid Value
    }

    const getBHKValue = () => {
        const uiBHK = document.getElementsByName("uiBHK");
        for (let i = 0; i < uiBHK.length; i++) {
            if (uiBHK[i].checked) {
                return parseInt(i) + 1;
            }
        }
        return -1; // Invalid Value
    }

    const onClickedEstimatePrice = () => {
        const sqft = area;
        const bhkValue = getBHKValue();
        const bathValue = getBathValue();
        const locationValue = location;

        fetchPrediction(sqft, bhkValue, bathValue, locationValue);
    }

    const fetchLocationNames = () => {
        const url = "http://localhost:5000/get_location_names"; // Use this if you are NOT using nginx
        // const url = "/api/get_location_names"; // Use this if you are using nginx
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data.locations) {
                    setLocations(data.locations);
                    setLocation(data.locations[0]); // Select the first location by default
                }
            })
            .catch(error => console.error('Error fetching location names:', error));
    }

    const fetchPrediction = (sqft, bhk, bath, location) => {
        const url = "http://localhost:5000//predict_home_price"; // Use this if you are NOT using nginx
        // const url = "/api/predict_home_price"; // Use this if you are using nginx
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                total_sqft: parseFloat(sqft),
                bhk: parseInt(bhk),
                bath: parseInt(bath),
                location: location
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setEstimatedPrice(data.estimated_price + " Lakh");
        })
        .catch(error => {
            console.error('Error fetching prediction:', error);
            setEstimatedPrice('Error fetching price');
        });
    }    

    return (
        <div>
            <div className="img"></div>
            <form className="form" style={{ marginTop: '5rem' }}>
                <h2>Area (Square Feet)</h2>
                <input
                    type="text"
                    className="area"
                    id="uiSqft"
                    name="Squareft"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                />
                <h2>BHK</h2>
                <div className="switch-field">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <React.Fragment key={value}>
                            <input
                                type="radio"
                                id={`radio-bhk-${value}`}
                                name="uiBHK"
                                value={value}
                                checked={bhk === value.toString()}
                                onChange={() => setBhk(value.toString())}
                            />
                            <label htmlFor={`radio-bhk-${value}`}>{value}</label>
                        </React.Fragment>
                    ))}
                </div>
            </form>
            <form className="form">
                <h2>Bath</h2>
                <div className="switch-field">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <React.Fragment key={value}>
                            <input
                                type="radio"
                                id={`radio-bath-${value}`}
                                name="uiBathrooms"
                                value={value}
                                checked={bathrooms === value.toString()}
                                onChange={() => setBathrooms(value.toString())}
                            />
                            <label htmlFor={`radio-bath-${value}`}>{value}</label>
                        </React.Fragment>
                    ))}
                </div>
                <h2>Location</h2>
                <div>
                    <select
                        className="location"
                        id="uiLocations"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="" disabled>Choose a Location</option>
                        {locations.map((loc, index) => (
                            <option key={index} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>
                <button className="submit" onClick={onClickedEstimatePrice} type="button">
                    Estimate Price
                </button>
                <div id="uiEstimatedPrice" className="result">
                    <h2>{estimatedPrice}</h2>
                </div>
            </form>
        </div>
    );
};

export default BangloreHomePricePrediction;
