import React from 'react'

let currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <>
        <footer className='w-100 py-2 text-center bg-yellow-400 text-white  '>
            <p>&copy;Copyright Allright Reserved | {currentYear}</p>
        </footer>
    </>
  )
}

export default Footer