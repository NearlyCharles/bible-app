import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/navbar'
import { bible } from './data'

function App() {
const Token = '86d9c4c9d093f2f71ab8927b2c8b6e57f8548e41'
const [chapter, setChapter] = useState([]);
const [chosenBook, setChosenBook] = useState("Exodus")
const [chosenChapter, setChosenChapter] = useState("6")

const handleSwitch = (book) => {
  setChosenBook(book)
}


useEffect(() => {
    const fetchGenesisChapters = async () => {
        try {
            const apiKey = Token;
            const esvApiGenesisEndpoint = `https://api.esv.org/v3/passage/text/?q=${chosenBook}+${chosenChapter}`;
            const response = await axios.get(esvApiGenesisEndpoint, {
                headers: {
                    'Authorization': `Token ${apiKey}`
                }
            });
            // Extracting the chapters
          
            console.log(response)
            setChapter(response.data.passages)

        } catch (error) {
            console.error('Error retrieving chapters of Genesis:', error);
        }
    };

    fetchGenesisChapters();
}, [chosenBook, chosenChapter]); // Empty dependency array 


    


  return (
  <div style={{height: "100vh", width: "100%"}}> 
    <Navbar handleSwitch={handleSwitch}/>
    {chapter}
  </div>

  )
}

export default App

