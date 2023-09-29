import React from 'react'
import '../styles/Booking.css'
import pic5 from "../images/5.jpg"

function Booking () {
  return (
    <div className="booking-container">
      <img src={pic5} alt="Booking Image" className="booking-image" />
      <div className="booking-content">
        <div className="booking-text">
          <h2>Welcome to Our Pet Paradise</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem vel justo
            posuere gravida. Vestibulum varius libero nec metus faucibus, in semper justo
            bibendum. Suspendisse potenti. Proin ut est ac libero ultricies commodo.
          </p>
        </div>
        <div className="booking-form">
          <h3>Book Your Appointment</h3>
          <form>
            {/* Your booking form inputs go here */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking
