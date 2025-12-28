import React from 'react'
import profileImg from './portfolio.img.jpg'

const ProfileImage = ({ className, alt }) => {
  const baseClass = 'mb-2 rounded-xl mx-auto w-[14rem] h-64 md:w-[16rem] md:h-80 object-cover shadow-2xl shadow-primary-color/20'
  return (
    <img
      src={profileImg}
      alt={alt || 'Profile image'}
      className={className ? `${baseClass} ${className}` : baseClass}
      style={{ aspectRatio: '3 / 4', filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }}
    />
  )
}

export default ProfileImage
