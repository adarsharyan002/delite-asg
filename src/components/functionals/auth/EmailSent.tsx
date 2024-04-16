// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";


const EmailSent = () => {
//   const navigate = useNavigate();

  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-gray-400 text-white p-8 max-w-[800px] flex-1 rounded-md">
        <h1 className=" text-2xl font-semibold mb-3">Email Sent</h1>
        <p className=" text-lg">
          We have sent an email to your email address. Please follow the link to
          verify your mail.
        </p>
      </div>
    </div>
  );
};

export default EmailSent;
