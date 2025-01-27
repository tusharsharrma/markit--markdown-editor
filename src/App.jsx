import React, { useState } from 'react'
import RawInputArea from './components/RawInputArea'
import MarkdownSanitized from './components/MarkdownSanitized';
import { Header } from './components/Header';

const App = () => {
  const [markdownText, setMarkdownText] = useState(""); // Shared state

  const handleInputChange = (text) => {
    setMarkdownText(text); // Update shared state with the user's input
  };


  return (
      <>
        <Header className/>
        <div className='content-container'>
          {/* <Header/> */}
          <div className='editor-container'>
            <RawInputArea onInputChange={handleInputChange}/>
          </div>
          <div className="preview-container">
            <MarkdownSanitized markdownText={markdownText}/>
          </div>
        </div>
      </>
 
  )
}

export default App
