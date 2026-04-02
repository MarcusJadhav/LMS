import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/react'
import { AppContext } from './../../context/AppContext'

const Navbar = () => {

  const {navigate} = useContext(AppContext)

  const isCourseListPage = location.pathname.includes('/course-list')

  const {openSignIn} = useClerk()
  const {user} = useUser()

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4
     ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>

      <div onClick={()=>{navigate('/')}} className='flex items-center gap-2 sm:gap-3 text-gray-800 cursor-pointer'> 
      <img src="./../src/assets/logo.png" alt="logo" className='w-12 lg:w-12 sm:w-20 cursor-pointer' />
      <h1 className='text-2xl font-bold cursor-pointer' >LMS</h1>
      </div>

      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          
          { user && <>
          <button>
            Become Educator
            </button> |
          <Link to='/my-enrollments'> My Enrollments
          </Link>
          </> 
          }

        </div>
        
        {user ? <UserButton /> :
        <button onClick={()=> openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full hover:cursor-pointer'>
          Create Account
          </button>
        }

      </div>

      {/* Mobile Screen */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
           { user && 
           <>
          <button>
            Become Educator
            </button> |
          <Link to='/my-enrollments'> My Enrollments
          </Link>
          </> 
          }
        </div>
        {user ? <UserButton /> :
        <button onClick={()=> openSignIn()}>
          <img src="./../src/assets/user-icon.png" alt="user-icon" className='w-8 hover:cursor-pointer'>
          </img>
          </button>
          }
      </div>
    </div>
  )
}

export default Navbar