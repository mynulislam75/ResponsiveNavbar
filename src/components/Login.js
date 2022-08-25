import React from 'react';
import useFirebase from '../Hooks/useFirebase';
import { Link} from 'react-router-dom';

const Login = () => {
    const {email,password,handleEmail,handlePassword,handleGoogleSignin,handleSignin}=useFirebase();
    return (
        <div className=' flex flex-col justify-center items-center w-5/12 p-5 bg-gray-200'>
            <div className='p-5'>
                <div>
                  <h1>Log In</h1>
                </div>
                <form>
                    <div className="mb-3">
                        <label className="mb-2 block text-xs font-semibold">Email</label>
                        <input type="email" onChange={handleEmail} placeholder="Enter your email" className="block w-full 
                          rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1
                        focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                    </div>
                    <div className="mb-3">
                        <label className="mb-2 block text-xs font-semibold">Password</label>
                        <input type="password" onChange={handlePassword} placeholder="*****" className="block w-full 
                                    rounded-md border border-gray-300 focus:border-purple-700
                                    focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                    </div>
                    {/* <div className="mb-3 flex flex-wrap content-center">
                        <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" />
                        <label for="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
                        <a href="#" className="text-xs font-semibold text-purple-700">Forgot password?</a>
                    </div> */}
                    <div className="mb-3">

                        <button onClick={handleSignin} className="mb-1.5 block w-full text-center text-white bg-purple-700
                         hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign in</button>

                        <button onClick={handleGoogleSignin} className="flex flex-wrap justify-center w-full border border-gray-300
                         hover:border-gray-500 px-2 py-1.5 rounded-md">
                            <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                            Sign in with Google
                        </button>
                    </div>
                    <div className="text-center">
                        <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
                       
                            <Link className='text-xs font-semibold text-purple-700' to='/register'>Register</Link>
                    
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;