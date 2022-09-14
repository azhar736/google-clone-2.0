import Image from "next/image"

function Avatar({url,className}) {
  return (
    <Image 
    className={`h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    loading="lazy"
    src={url}
    alt="Profile Pic"
    />
  )
}

export default Avatar