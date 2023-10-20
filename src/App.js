import React, { useEffect, useState } from 'react'
import Username from './components/Username'
import axios from 'axios'
import Card from './components/Card'
const App = () => {
  const [userName, setUserName] = useState('') // for getting username from user
  const [loading, setLoading] = useState(false) // show loader during api data fetching
  const [userInfo, setUserInfo] = useState('') //for getting user's information from github  
  const [userCard, setuserCard] = useState(false) // show card after fetching data

  //fetch API data every time the username is changed
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/users/${userName}`);
        const data = response.data;
        setUserInfo(data); // Set the fetched data 
        setLoading(false);
        setuserCard(true);
      } catch (error) {
        console.error('Error fetching data. make sure the entered username is correct:', error);
        setuserCard(false);
        setLoading(false);
        alert('An error occurred while fetching data. Please make sure the entered username is correct. Status: ' + error.message);
      }
    };

    if (userName) {
      fetchData();
    }
  }, [userName])

  return (
    <div className='h-[100dvh] w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-violet-600'>
      <Username setUserName={setUserName} userCard={userCard} setuserCard={setuserCard} loading={loading} />
      <Card userInfo={userInfo} userCard={userCard} setuserCard={setuserCard} />
    </div>
  )
}

export default App