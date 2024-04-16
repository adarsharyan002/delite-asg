// import { useSearchParams } from "react-router-dom";
// import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EmailVerified = () => {
  const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
   const {token} = useParams()

   console.log(token)


//   const token = searchParams.get("token");
//   const dispatch = useAppDispatch();

  useEffect(() => {

    const verifyToken = async()=>{

    try {
        // Make an HTTP POST request using Axios
        const response = await axios.get(`http://localhost:3000/api/v1/auth/verify/${token}`);
        // navigate('/home')
    
        console.log('Response:', response.data);
        // Optionally, perform actions based on the response (e.g., show success message)
    
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error - show error message to the user or perform fallback actions
        alert('Failed to submit form. Please try again.');
      }
    
    }
    verifyToken();
   
    
  }, [navigate, token]);
//   const { emailVerified, appErr,loading } = useAppSelector(selectUser);
  return (
    
    <>
  
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-gray-400 text-black p-8 max-w-[600px] flex-1 rounded-md">
        <h1 className=" text-2xl font-semibold mb-3">

          
             "Success !"
          
        </h1>
       
       
          <>
          <p className=" text-lg"> Your Email has been verified. </p>
          <p>You can login now on our site</p>
          <Button
            type="submit"
            onClick={() => navigate("/sign-in")}
            className="text-white m-3 "
            // variant={""}
          >
            login
          </Button>
       
         
          </>
          
       
        
      </div>
    </div>

    </>
  );
};

export default EmailVerified;
