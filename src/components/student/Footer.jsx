import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
     <footer className="bg-[#0B1A2B] text-gray-300 px-6 md:px-16 lg:px-24 py-5">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3">
            
            {/* Logo Circle */}
            <div className="rounded-full flex items-center justify-center">
              <img src={assets.logo1} alt="logo" className='h-10'/>
            </div>

            <h2 className="text-white text-xl font-semibold">LMS</h2>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            LMS is a modern learning management system designed to help students 
            and trainers manage courses, track progress, and achieve their goals efficiently.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* NEW Meaningful Section (Resources / Contact) */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>

          <div className="mt-4 text-sm text-gray-400">
            <p>Email: support@lms.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2026 LMS. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer