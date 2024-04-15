import { Input } from "@/components/ui/input";
import signIn from '@/assets/signupin.png';
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import {  useState } from "react";
import { Link } from "react-router-dom";


export default function SignIn() {

    const [showPassword,setShowPassword]=useState(false)
    const [passType,setPassType]=useState("password")

    const handleShowPassword=()=>{
        if(passType=="password")setPassType("text")
            else setPassType("password")
         setShowPassword(!showPassword)
    }
  return (
    <div className="w-full lg:grid lg:min-h-[90vh] lg:grid-cols-2 xl:min-h-[60vh] mt-10 lg:mt-0">
      <div className="hidden lg:flex items-center justify-center dark:lg:bg-gray-800">
        <img alt="Image" src={signIn} className="aspect-square object-cover" width="800" height="800" />
      </div>
      <div className="flex items-center justify-center">
        <div className="mx-auto space-y-6 shadow-md border w-[80vw] lg:w-[33vw] border-gray-100 p-4 md:px-10 py-10 rounded-xl">
          <div className="flex justify-between space-y-2">
            <h1 className="text-3xl font-bold text-[#3A244A] ">Fill what we know<span className="text-[#D72638]">!</span></h1>
          </div>
          <form className="space-y-4 flex flex-col gap-4">

          <div className="space-y-2">
              <Input
                className="border-0 border-b focus:border-b focus-visible:ring-transparent"
                placeholder="Email"
                type="email"
                required
              />
            </div>
          
            <div className="relative space-y-2">
            <Input
                className="border-0 border-b  pr-2 focus:border-b focus-visible:ring-transparent" 
                placeholder="Password"
                type={passType}           
                 required
            />
            {showPassword?<FaEyeSlash className="absolute right-2 top-2 text-gray-400"  onClick={handleShowPassword}  />:<FaEye onClick={handleShowPassword} className="absolute right-2 top-2 text-gray-400" /> }
            </div>
           
            
            <Button className="w-full bg-[#3A244A] rounded-xl p-5" type="submit">
              Sign In
            </Button>
            <Link to="/"><Button className="w-full bg-transparent border-2 border-[#3A244A] rounded-xl p-5 text-black hover:bg-[#3A244A] hover:text-white " type="submit">
              Sign up
            </Button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}
