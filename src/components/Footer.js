import React from 'react'
import "../styles/Footer.css"
import "../App.css"

function Footer () {
  return (
    <div className="footer">
      <div className="footer-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p>
          <strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 5:00 PM
        </p>
        <p>
          <strong>Phone Number:</strong> +1 (123) 456-7890
        </p>
      </div>
    </div>
  )
}

export default Footer