import { Link, useLocation, useNavigate } from "react-router-dom";
import signup from '../../assets/signup.jpg';
import logo from '../../assets/logo.png';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "@/Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "@/Hooks/useAxiosPublic";


const Register = () => {

    const {createUser, updateUser, googleLogin, githubLogin, user, setUser} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();

    const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    //! Register with Email:
    const handleRegister = async (data) => {
        const {name, email, password } = data;
        reset();
        const from = location?.state || '/';

        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if(res.data.success) {

            try {
                //* User Registration:
                await createUser(email, password);
                await updateUser(name, res.data.data.display_url);
                setUser({ ...user, displayName: name, photoURL: res.data.data.display_url })
                toast.success('SignUp Successfully');
                navigate(from, {replace: true});
                
            } catch (err) {
                console.log(err);
                toast.error(err.message);
            }

        }
    }

    //! Google Login:
    const handleGoogleLogin = async () => {

        const from = location?.state || '/';
        try {
            await googleLogin();
            toast.success('SignIn Successfully');
            navigate(from, {replace: true});

        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    //! Github Login:
    const handleGithubLogin = async () => {

        const from = location?.state || '/';
        try{
            await githubLogin();
            toast.success('SignIn Successfully');
            navigate(from, {replace: true});
        } catch(err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    return (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:max-w-lg lg:max-w-6xl my-10 md:my-16 lg:my-20">
            <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: `url(${signup})`}}></div>
        
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <Link to={'/'} className="flex justify-center mx-auto">
                    <img className="w-auto h-14" src={logo} alt="logo" />
                </Link>
                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">New Here!</p>

                {/* //! Google: */}
                <button onClick={handleGoogleLogin} className="py-3 w-full flex items-center justify-center gap-2 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <FcGoogle className="text-[26px]" />
                    <span className="font-bold text-lg text-center">Sign up with Google</span>
                </button>
                {/* //! GitHub: */}
                <button onClick={handleGithubLogin} className="py-3 w-full flex items-center justify-center gap-2 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <FaGithub className="text-2xl text-black" />
                    <span className="font-bold text-lg text-center">Sign up with GitHub</span>
                </button>
        
                <div className="flex items-center justify-between mt-6">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
        
                    <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">or Signup
                        with email</p>
        
                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>
        
                {/* ///! Input fields: */}
                <form onSubmit={handleSubmit(handleRegister)}>
                    {/* //! Name: */}
                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-500 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>

                        <input 
                            type="text" 
                            className="block w-full py-3 text-gray-900 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#075f47] dark:focus:border-[#075f47] focus:ring-[#075f47] focus:outline-none focus:ring focus:ring-opacity-40   placeholder:text-gray-500" 
                            placeholder="Username"
                            required
                            {...register("name")}
                        />
                    </div>
                    
                    {/* //! Image: */}
                    <div>    
                        <label htmlFor="image" className="flex items-center px-3 py-3 mx-auto mt-4 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                        <label htmlFor='image' className='block mb-2 text-sm'>
                        </label>
                            <input
                                required
                                type='file'
                                id='image'
                                accept='image/*'
                                // name="image"
                                className="bg-[#075f47] text-white rounded-md  px-2"
                                {...register("image")}
                            />
                        </label>
                    </div>

                    {/* //! Email: */}
                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-500 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input 
                            type="email" 
                            className="block w-full py-3 text-gray-900 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#075f47] dark:focus:border-[#075f47] focus:ring-[#075f47] focus:outline-none focus:ring focus:ring-opacity-40   placeholder:text-gray-500" 
                            placeholder="Email address"
                            {...register("email", { 
                                required: {
                                    value: true,
                                    message: 'please enter your email address!'
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address!'
                                }
                            })}
                        />
                    </div>
                    {errors.email && <span className="pt-1 text-red-600 font-medium">{errors.email.message}</span>}

                    {/* //! Password: */}
                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-500 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            className="block w-full px-10 py-3 text-gray-900 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#075f47] dark:focus:border-[#075f47] focus:ring-[#075f47] focus:outline-none focus:ring focus:ring-opacity-40   placeholder:text-gray-500" 
                            placeholder="Password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'please enter your password!',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'password must be at least 6 characters!'
                                },
                                validate: {
                                    oneUpperCase: (value) => /^(?=.*[A-Z]).{6,}$/.test(value) || 'password must be at least 1 uppercase letter',
                                    oneNumeric : (value) => /^(?=.*\d).{8,}$/.test(value) || 'password must be at least 1 numeric character'
                                }
                            })}
                        />
                        <span 
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute top-[15px] right-5'
                            >
                            {
                                showPassword ? <FiEye className='text-2xl'/> : <FiEyeOff className='text-2xl'/>
                            }
                        </span>
                    </div>
                    {errors.password && <span className="pt-1 text-red-600 font-medium">{errors.password.message}</span>}

                    {/* //! SignUp Btn: */}
                    <div className="mt-6">
                        <input type="submit" value="Sign Up" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#075f47] rounded-lg hover:bg-black focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer"/>
                    </div>
            
                    <div className="flex justify-center mt-4">
                        <p className="text-sm text-center text-gray-500 dark:text-gray-400">Already have an account?
                            <span>{' '}</span>
                            <Link to={'/login'} className="text-red-500 font-bold hover:underline cursor-pointer">Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;