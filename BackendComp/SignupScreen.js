import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../pages/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function SignupScreen() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    
    const auth = getAuth();

   

    const handleSignIn = () => {
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value,
            )
    .then((userCredential) => {
        dispatch(login({
            uid: userCredential.uid,
            email: userCredential.email,
        }))
        console.log(dispatch)
    const user = userCredential.user;
    console.log("login Hua Hai Ye --",user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    
    return (
              <div class="flex xl:ml-20   items-center justify-center min-h-screen">
              <div class="w-full px-6 py-16  xl:w-2/5 ">
                  <h2 className="mb-12 text-4xl antialiased text-center font-bold  text-gray-800">Sign In</h2>
                  <form className="mx-8   space-y-12 ">
                      <div>
                      <input ref={emailRef} placeholder="Email Id" type="email"
                              className="w-full p-2 text-sm border-b-2  outline-none opacity-90 text-gray-900 focus:text-purple-900"/>
                      </div>
                      <div>
                      <input ref={passwordRef} placeholder="Password" type="Password"
                              className="w-full p-2 text-sm border-b-2  outline-none opacity-90 text-gray-900 focus:text-purple-900"
                             />
                      </div>
          
                      <p  onClick={handleSignIn} className="block ml-auto mr-auto   justify-center  text-center  px-10 py-4 w-full  font-bold my-3 hover:shadow-xl shadow-md   rounded-md active:scale-90 transition duration-150 text-white bg-purple-500" > SIGN IN </p>
                    
                  </form>
                  
              </div>
              
                
          </div>
        
    )
}

export default SignupScreen
