import React from 'react'
import { ThemeMode } from '../utlits/ThemeModeContext'
import { useContext } from 'react'

function Mode() {
  const{nightMode,setnightMode}=useContext(ThemeMode);
  return (
    <div className='mode' onClick={()=>setnightMode(!nightMode)}>
      <div className={`mode-image ${nightMode ? 'dark' : ''}`}>
          
      </div>
    </div>
  )
}

export default Mode