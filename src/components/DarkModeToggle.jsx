import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button onClick={handleClick}>
      {`Toggle ${darkMode ? 'Light Mode' : 'Dark Mode'}`}
    </button>
  )
}

export default DarkModeToggle
