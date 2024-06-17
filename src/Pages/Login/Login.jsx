import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/login.jpg';
import logo from '../../assets/logo.png';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "@/Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "@/Hooks/useAxiosSecure";



const Login = () => {

    const {loginUser, googleLogin, githubLogin, user} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if(user) {
            navigate('/');
        }
    },[user, navigate]);

    //! Register with Email:
    const handleLogin = async (data) => {
        const { email, password } = data;
        reset();
        const from = location?.state || '/';

        try {
            //* User Registration:
            await loginUser(email, password);
            toast.success('SignIn Successfully');
            navigate(from, {replace: true});
            
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    const handleGoogleLogin = async () => {

        const from = location?.state || '/';
        try {
            await googleLogin()
            .then(res => {
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email,
                    role: 'user',
                    image: res.user?.photoURL
                }
                axiosSecure.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId) {
                        toast.success('SignIn Successfully');
                        navigate(from, {replace: true});
                    }
                })
            })

        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    //! Github Login:
    const handleGithubLogin = async () => {

        const from = location?.state || '/';
        try{
            await githubLogin()
                .then(res => {
                    const userInfo = {
                        name: res.user?.displayName,
                        email: res.user?.email,
                        role: 'user',
                        image: res.user?.photoURL
                    }
                    axiosSecure.post('/users', userInfo)
                    .then(res => {
                        if(res.data.insertedId()) {
                            toast.success('SignIn Successfully');
                            navigate(from, {replace: true});
                        }
                    })
                })
        } catch(err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    return (
        <div className="flex flex-row-reverse w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:max-w-lg lg:max-w-6xl my-10 md:my-16 lg:my-20">
            <div className="hidden bg-cover lg:block lg:w-1/2" style={{backgroundImage: `url(${login})`}}></div>

            <Helmet>
                <title>Second Chance | SignIn</title>
            </Helmet>
        
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <Link to={'/'} className="flex justify-center mx-auto">
                    <img className="w-auto h-14" src={logo} alt="logo" />
                </Link>
                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">Welcome Back!</p>

                {/* //! Google: */}
                <button onClick={handleGoogleLogin} className="py-3 w-full flex items-center justify-center gap-2 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <FcGoogle className="text-[26px]" />
                    <span className="font-bold text-lg text-center">Sign in with Google</span>
                </button>
                {/* //! GitHub: */}
                <button onClick={handleGithubLogin} className="py-3 w-full flex items-center justify-center gap-2 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <FaGithub className="text-2xl text-black" />
                    <span className="font-bold text-lg text-center">Sign in with GitHub</span>
                </button>
        
                <div className="flex items-center justify-between mt-6">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
        
                    <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">or Signin
                        with email</p>
        
                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>
        
                {/* ///! Input fields: */}
                <form onSubmit={handleSubmit(handleLogin)}>
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
                                    message: 'please enter your email address'
                            }})}
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
                                    message: 'please enter your password',
                            }})}
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

                    {/* //! SignIn Btn: */}
                    <div className="mt-6">
                        <input type="submit" value="Sign In" className="w-full px-6 py-3 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#075f47] rounded-lg hover:bg-black focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer"/>
                    </div>
            
                    <div className="flex justify-center mt-4">
                        <p className="text-sm text-center text-gray-500 dark:text-gray-400">Doesn&apos;t have an account?
                            <span>{' '}</span>
                            <Link to={'/register'} className="text-red-500 font-bold hover:underline cursor-pointer">Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;