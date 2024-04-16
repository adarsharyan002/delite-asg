import { Input } from "@/components/ui/input";
import signUp from '@/assets/signup.png';
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';


import { Link, useNavigate } from "react-router-dom";
import {  UserSignUpSchema, UserSignUpSchemaType } from "@/lib/schema";

const SignUp =()=> {

    const [showPassword,setShowPassword]=useState(false)
    const [passType,setPassType]=useState("password")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
      } = useForm<UserSignUpSchemaType>({ resolver: zodResolver(UserSignUpSchema) })

      // on submit handler
       const onSubmit =async ()=>{
        const formData = getValues();

        console.log(formData.password)

        if(formData.password !== confirmPassword){
            alert("Passwords don't match")
            return
        }

        try {
           
            setIsLoading(true); 
            const response = await axios.post('http://localhost:3000/api/v1/auth/register',formData);
            navigate('/email-sent')
        
            console.log('Response:', response.data);
            // Optionally, perform actions based on the response (e.g., show success message)
        
          } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error - show error message to the user or perform fallback actions
            alert('Failed to submit form. Please try again.');
          }finally {
            setIsLoading(false); // Set loading state back to false after request completes
          }
        
       }

       
    const handleShowPassword=()=>{
        if(passType=="password")setPassType("text")
            else setPassType("password")
         setShowPassword(!showPassword)
    }
  return (
    <div className="w-full lg:grid lg:min-h-[90vh] lg:grid-cols-2 xl:min-h-[60vh] mt-10 lg:mt-0">
      <div className="hidden lg:flex items-center justify-center dark:lg:bg-gray-800">
        <img alt="Image" src={signUp} className="aspect-square object-cover" width="800" height="800" />
      </div>
      <div className="flex items-center justify-center">
        <div className="mx-auto space-y-6 shadow-md border w-[80vw] lg:w-[33vw] border-gray-100 p-4 md:px-10 py-10 rounded-xl">
          <div className="flex justify-between space-y-2">
            <h1 className="text-3xl font-bold text-[#3A244A] ">Let us Know<span className="text-[#D72638]">!</span></h1>
            <Link to="/sign-in"><p className="text-gray-500 dark:text-gray-400 underline">Sign <span className="text-[#D72638]">In</span></p></Link>
          </div>
          <form className="space-y-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2 focus:border-0 ">
              <Input
                className="border-0 border-b focus:border-b focus-visible:ring-transparent"
                placeholder="First Name"
            
                {...register("firstName")}
              />
              {errors.firstName && <span className="text-red-400">{errors.firstName.message}</span>}
            </div>
           

      <div className="space-y-2">
        <Input
          className="border-0 border-b focus:border-b focus-visible:ring-transparent"
          placeholder="Last Name"
         
          {...register("lastName")}
        />
        {errors.lastName && <span className="text-red-400">{errors.lastName.message}</span>}
      </div>

      <div className="relative space-y-2">
        <Input
          className="border-0 border-b pr-2 focus:border-b focus-visible:ring-transparent"
          placeholder="Set Password"
          type={showPassword ? 'text' : 'password'}
         
          {...register("password")}
        />
        {showPassword ? (
          <FaEyeSlash className="absolute right-2 top-2 text-gray-400" onClick={handleShowPassword} />
        ) : (
          <FaEye className="absolute right-2 top-2 text-gray-400" onClick={handleShowPassword} />
        )}
        {errors.password && <span className="text-red-400">{errors.password.message}</span>}
      </div>

      <div className="space-y-2">
        <Input
          className="border-0 border-b focus:border-b focus-visible:ring-transparent"
          placeholder="Retype Password"
          type={showPassword ? 'text' : 'password'}
          onChange={(e)=>setConfirmPassword(e.target.value)}
         
         
        />
        
      </div>

      <div className="space-y-2">
      <select
          className=" w-full border-0 p-2 rounded-sm border-b text-gray-500 focus:border-b focus-visible:ring-transparent text-sm"
          {...register("contactMethod")}
        >
          <option value="">Contact Method</option>
          <option value="email">Email</option>
          {/* Add more options for other contact modes */}
        </select>
        {errors.contactMethod && <span className="text-red-400">{errors.contactMethod.message}</span>}

      </div>

      <div className="space-y-2">
        <Input
          className="border-0 border-b focus:border-b focus-visible:ring-transparent"
          placeholder="Email"
          
         
          {...register("email")}
        />
        {errors.email && <span className="text-red-400">{errors.email.message}</span>}
      </div>

            <Button className="w-full bg-[#3A244A] rounded-xl p-5" type="submit" disabled={isLoading}>
              {isLoading ? 'Signing Up...' : 'Sign up'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;