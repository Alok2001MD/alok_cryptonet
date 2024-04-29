import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./App.css"

function Userinfo() {
  const [userData, setUserData] = useState(null);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const fetchData = async () => { 
      const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
      setUserData(response.data.results[0]);
      setShowCard(true); // Trigger animation once data is fetched
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-pink-600">
      {userData && (
        <div className={`max-w-lg bg-white rounded-lg overflow-hidden mx-4 shadow-lg hover:shadow-xl transition-all duration-500 ${showCard ? 'animate-slide-in' : ''}`}>
          <div className="flex flex-col md:flex-row items-center p-8">
            <img src={userData.picture.large} alt="User" className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-8" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{userData.name.first} {userData.name.last}</h1>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-5l4-4z" />
                </svg>
                <p className="text-lg text-gray-700">{userData.gender}</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-lg text-gray-700">{userData.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Userinfo;
