import React from 'react'
import "../styles/Services.css"

function Services () {
  return (
    <div className="services-container">
      <h1>Our Services</h1>

      {/* Dog Boarding */}
      <div className="service">
        <h2>Dog Boarding</h2>
        <p>
          At Paws & Kin, we understand that leaving your beloved canine companion
          behind can be a tough decision. That's why we offer top-notch dog boarding
          services. When you entrust your furry family member to us, you can rest
          assured they'll receive the same love and care they do at home. Our spacious
          and comfortable dog boarding facilities are designed to ensure your pet feels
          safe and relaxed. From cozy sleeping quarters to ample playtime, your dog's
          stay with us will be a vacation of its own.
        </p>
        <p><ul>
          <li>Standard Boarding (per night): $40</li>
          <li>Long-term Stay (10+ nights, per night): $35</li></ul>
        </p>
      </div>

      {/* Dog Daycare */}
      <div className="service">
        <h2>Dog Daycare</h2>
        <p>
          Dogs thrive on social interaction and exercise, and our dog daycare services
          are tailored to meet these needs. Our supervised playgroups provide a fun and
          safe environment for your dog to interact with other friendly pups. Our
          experienced staff ensures that all dogs are well-cared for and engaged in
          enriching activities. Whether it's a full day of play or just a few hours, our
          dog daycare is designed to keep tails wagging.
        </p>
        <p>
          <ul>
            <li>Full Day: $25 - $40</li>
            <li>Half Day (up to 5 hours): $15 - $25</li>
          </ul>


        </p>
      </div>

      {/* Grooming Services */}
      <div className="service">
        <h2>Grooming Services</h2>
        <p>
          A well-groomed pet is a happy and healthy pet. Our professional grooming
          services are dedicated to enhancing your pet's appearance and well-being. From
          breed-specific cuts to soothing baths, our skilled groomers pamper your pets
          with personalized care. We use gentle grooming techniques, high-quality
          products, and state-of-the-art equipment to ensure your pet leaves looking and
          feeling their best.
        </p>
        <p>
          <ul>
            <li>Bath and Brush: $30 - $50</li>
            <li>Full Groom (includes haircut): $50 - $80</li>
          </ul> </p>
      </div>

      {/* Cattery Services */}
      <div className="service">
        <h2>Cattery Services</h2>
        <p>
          Cats may have a reputation for independence, but they also appreciate comfort
          and attention. Our cattery is designed with feline sensibilities in mind. Each
          private cat suite is a cozy retreat with a view, complete with plenty of toys
          and scratching posts. Our experienced caregivers provide individualized care
          and companionship for your cats, ensuring their stay is stress-free and
          enjoyable.
        </p>
        <p><ul>
          <li>Standard Cat Suite (per night): $30</li>
          <li>Long-term Stay (10+ nights, per night): $25</li></ul>
        </p>
      </div>

      <p>
        At Paws & Kin, we're dedicated to creating a home away from home for your
        pets. We believe that every pet deserves to be treated like family, and our
        services reflect this commitment. Whether it's a short visit for grooming, a
        fun day of play, or an extended stay while you're away, your pets are in caring
        and capable hands with us. We're here to make tails wag, whiskers purr, and
        your pet's experience truly exceptional.
      </p>
    </div>
  )
}

export default Services
