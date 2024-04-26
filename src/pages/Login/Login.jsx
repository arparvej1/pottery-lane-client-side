import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { GoLock } from 'react-icons/go';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { MdMailOutline } from 'react-icons/md';


const Login = () => {
  const { user, signInUser, signInWithGoogle, signInWithTwitter, signInWithGithub, registerCheck, setAlreadyLogin, textDot, setTextDot, womanLottie } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginFailedMsg, setLoginFailedMsg] = useState('');
  const location = useLocation();

  const { register, setFocus } = useForm();
  useEffect(() => {
    setFocus("focusEmail");
  }, [setFocus]);

  useEffect(() => {
    registerCheck();
    if (user && !location.state) {
      navigate('/');
    }
  }, [user]);

  const [passwordShow, setPasswordShow] = useState(false);
  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setTextDot('...');

    // create user in firebase
    signInUser(email, password)
      .then(result => {
        console.log(result.user.email);
        toast.success('Successfully Login!');
        console.log('Successfully Login!');
        e.target.reset();
        setLoginFailedMsg('');
        setAlreadyLogin(true);
        setTextDot('');
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.log(error);
        toast.error('Email & Password Not Match!');
        setLoginFailedMsg('Please enter correct Email & Password.');
        setTextDot('');
      });
  }

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
        setAlreadyLogin(true);
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleLoginWithTwitter = () => {
    signInWithTwitter()
      .then(result => {
        console.log(result.user);
        setAlreadyLogin(true);
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleLoginWithGithub = () => {
    signInWithGithub()
      .then(result => {
        console.log(result.user);
        setAlreadyLogin(true);
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <Helmet>
        <title> Login | PotteryLane </title>
      </Helmet>

      <div className='flex max-w-7xl mx-auto mt-8'>
        <div>
          {womanLottie()}
        </div>
        {/* ------ */}
        <div className='md:w-2/3 lg:w-2/5 rounded-2xl bg-gray-100 p-5 md:p-10 md:mx-auto'>
          <h3 className="text-3xl font-semibold mb-6 text-black text-center">
            Login Now!
          </h3>
          <form onSubmit={handleLogin} className='flex flex-col gap-3 '>
            <div>
              <span>Email:</span>
              <label className="flex items-center input input-bordered gap-3" htmlFor="email">
                <MdMailOutline />
                <input type="email" {...register("focusEmail")} name='email' placeholder="Email" className="w-full" required />
              </label>
            </div>
            <div>
              <span>Password:</span>
              <label className="flex items-center input input-bordered gap-3" htmlFor="email">
                <GoLock />
                <div className="flex justify-between items-center w-full bg-white">
                  <input type={passwordShow ? 'text' : 'password'} name='password' placeholder="Password" className="w-full" required /><span onClick={handlePasswordShow}>{passwordShow ? <VscEye /> : <VscEyeClosed />}</span>
                </div>
              </label>
              <p className='pt-1 text-red-500'>{loginFailedMsg}</p>
            </div>
            <div>
              <input type="submit" value={`Login${textDot}`} className="btn btn-primary w-full  font-semibold text-xl" />
            </div>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              New user?{" "}
              <Link state={location?.state} to='/register' className="text-black hover:underline">Register here</Link>
            </p>
          </div>
          <div className="text-sm text-gray-600 text-center">
            <div className="divider">OR</div>
          </div>
          <div>
            <h3 className='text-center'>Join with social accounts.</h3>
            <div className="mt-4 flex flex-wrap gap-3 items-center justify-center">
              <div>
                <button
                  onClick={handleLoginWithGoogle}
                  className="flex gap-2 btn border border-gray-200 bg-white"
                >
                  <FcGoogle className='text-2xl' />
                  Google
                </button>
              </div>
              <div>
                <button
                  onClick={handleLoginWithGithub}
                  className="flex gap-2 btn border border-gray-200 bg-white"
                >
                  <FaGithub className="text-2xl" />
                  Github
                </button>
              </div>
              <div>
                <button
                  onClick={handleLoginWithTwitter}
                  className="flex gap-2 btn border border-gray-200 bg-white"
                >
                  <FaTwitter className="text-2xl text-[#1DA1F2]" />
                  Twitter
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;