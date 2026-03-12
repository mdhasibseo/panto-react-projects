import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {i < rating ? <FaStar /> : <FaRegStar />}
        </svg>
      ))}
    </div>
  )
}

export default Rating