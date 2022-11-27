import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="hero section center-content illustration-section-01">
      <div className="container-sm">
        <div className="hero-inner section-inner">
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay={200}>
              SydneyJob.
            </h1>
            <div className="container-xs">
              <p className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay={400}>
              Platform career development and recruitment. Where SydneyJob brings
              together professionals and organizations to realize their potential.
              </p>
              <p>
              Join Now!
              </p>
              <p>
              THE BEST CAREER DEVELOPMENT PLACE FOR YOU
              Make the best decision for your career and build your dream career!
              </p>
            </div>
          </div>
          <div className="
									hero-figure
									reveal-from-bottom
									illustration-element-01
								" data-reveal-value="20px" data-reveal-delay={800}>
            <img className="has-shadow" src="images/hero-image.png" alt="Hero image" width={896} height={504} />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero;

