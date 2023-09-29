import React from 'react'
import { Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import logo from "../images/logo.png"
import pic1 from "../images/1.jpg"
import pic2 from "../images/2.jpg"
import pic3 from "../images/3.jpg"
import pic4 from "../images/4.jpg"
import "../styles/Home.css"

function Home () {
  return (
    <div className="home">
      <header className="header">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          interval={2000}
          className="carousel"
        >
          <div className="carousel-slider">
            <img src={pic1} alt="Pet Paradise Image 3" />
          </div>
          <div className="carousel-slider">
            <img src={pic2} alt="Pet Paradise Image 2" />
          </div>
        </Carousel>
        <div className="header-content">
          <h1>Where Pets Feel Loved,Owners Feel Relieved</h1>
          <Link to="/booking"><button className="second-button">Book Now</button></Link>
        </div>
      </header>


      <section className="about-story">
        <div className="about-story-content">
          <div className="about-story-text">
            <h2>Our Story</h2>
            <p>
              Sarah's journey into the world of pet business began with a simple idea: to create a place where pets and their owners could feel the warmth of a true family atmosphere. She envisioned a haven where every wag of a tail and every purr of contentment would be celebrated. This dream led her to establish "Paws & Kin." The inception of Paws & Kin was inspired by Sarah's genuine love for pets and her belief that they deserved the absolute best in care and companionship. She wanted to offer a comprehensive range of services to her community that would ensure pets' well-being and make pet owners' lives easier. Years passed, and Paws & Kin flourished, thanks to Sarah's unwavering dedication. It had become a cherished place where pets found a second home and where their owners discovered a network of fellow pet lovers.
            </p>
          </div>
          <div className="about-story-image">
            <img src={pic4} alt="Pet Paradise Image 3" />
          </div>
        </div>
      </section>


      <section className="about-services">
        <div className="about-services-content">
          <div className="about-servies-image">
            <img src={pic3} alt="Pet Paradise Image 3" />
          </div>
          <div className="about-story-text">
            <h2>Our Services</h2>
            <p>
              <ul>At Paws & Kin, we offer:

                <li>Dog Boarding: Safe, comfortable, and fun stays.</li>
                <li>Dog Daycare: Social playgroups for tail-wagging fun.</li>
                <li>Grooming Services: Professional care for a fresh look.</li>
                <li>Cattery Services: Stress-free stays for your feline friends.</li></ul>
              We treat your pets like family, ensuring exceptional experiences.<Link to="/services">Learn More</Link>




            </p>
          </div>

        </div>
      </section>


      <section className="cta">
        <h2>Book Your Pet's Visit Today!</h2>
        <p>
          Whether it's grooming, boarding, or veterinary care, we've got you covered.
          Give your pet the royal treatment they deserve.
        </p>
        <button className="button">Book Now</button>
      </section>
    </div>
  )
}

export default Home