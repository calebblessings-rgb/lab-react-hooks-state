import React from 'react'

const DarkModeToggle = ({darkMode, setDarkMode}) => {
  // TODO: Implement dark mode toggle logic
const handleClick = () => {
  setDarkMode(!darkMode)
}

  return (
    <button onClick={handleClick}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
