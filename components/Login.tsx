"use client"
import { signIn } from "next-auth/react"
import { Image } from "next/dist/client/image-component"
function Login(){
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
        <Image 
        src={"/images/Login/chatgpt-logo.png"} 
        width={300}
        height={300}
        alt="logo"
        />
        <button className="text-white font-bold text-3xl animate-pulse"
            onClick={()=>{signIn('google')}}
        >Sign In To use ChatGPT</button>
    </div>
  )
}

export default Login