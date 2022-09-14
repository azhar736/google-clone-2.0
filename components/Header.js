import { MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

function Header() {
const router=useRouter();
const searchInputRef=useRef(null);
const search =(e)=>{
    e.preventDefault();
    const term=searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`)
}
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
         <Image src="https://www.google.com.pk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        width="120"
        height="40"
        alt="Google"
        className="cursor-pointer"
        onClick={()=>router.push('/')}
        />
        <form className="flex px-6 flex-grow py-3 ml-10 mr-5 border-gray-500 boder-2 rounded-full shadow-lg
        max-w-3xl items-center">
            <input type="text" className="flex-grow w-full focus:outline-none" ref={searchInputRef} />
         <XMarkIcon className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
         onClick={()=>searchInputRef.current.value=""}
         />
         <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
         <MagnifyingGlassIcon onClick={search} className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
        <button type="submit" hidden onClick={search}>Search</button>
        </form>
        <Avatar className="ml-auto" url={"https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"}/>
        </div>
        <HeaderOptions />
    </header>
  )
}

export default Header