import React from 'react'
import { assets, dummyTestimonial } from './../../assets/assets'

const TestimonialSection = () => {
  return (
    <div className="pb-16 px-6 md:px-12 lg:px-20 cursor-pointer">
  
  {/* Heading */}
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
      Testimonials
    </h2>
    <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
      Hear from our learners as they share their journeys of transformation,
      success, and how our platform has made a difference in their lives.
    </p>
  </div>

  {/* Grid */}
  <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    
    {dummyTestimonial.map((testimonial, index) => (
      <div
        key={index}
        className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        
        {/* Header */}
        <div className="flex items-center gap-4 px-5 py-4 bg-gray-100 rounded-t-xl">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={testimonial.image}
            alt="testimonial"
          />
          <div>
            <h1 className="text-base font-semibold text-gray-800">
              {testimonial.name}
            </h1>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          
          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="h-4"
                src={
                  i < Math.floor(testimonial.rating)
                    ? assets.star
                    : assets.star_blank
                }
                alt="star"
              />
            ))}
          </div>

          {/* Feedback */}
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            {testimonial.feedback}
          </p>
        </div>
      </div>
    ))}
    
  </div>
</div>
  )
}

export default TestimonialSection