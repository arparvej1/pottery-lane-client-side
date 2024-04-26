import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGithub, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';


const Register = () => {
  const { user, createUser, signInWithGoogle, signInWithTwitter, signInWithGithub, updateUserInfo, setAvatarIcon, setLoading, setAlreadyLogin, alreadyRegister, setAlreadyRegister, logOut, textDot, setTextDot } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordMsg, setPasswordMsg] = useState('');
  const location = useLocation();

  const [passwordShow, setPasswordShow] = useState(false);
  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo_url = e.target.photo_url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // password validation checking
    if (password.length >= 6) {
      if (/[A-Z]/.test(password) && /[a-z]/.test(password)) {
        setPasswordMsg('');
      } else if (/[A-Z]/.test(password)) {
        setPasswordMsg('Password needs 6+ characters with upper & lowercases.');
        toast.error('Must have a Lowercase letter in the password');
        return;
      } else {
        setPasswordMsg('Password needs 6+ characters with upper & lowercases.');
        toast.error('Must have an Uppercase letter in the password');
        return;
      }
    } else {
      toast.error('Length must be at least 6 character');
      setPasswordMsg('Password needs 6+ characters with upper & lowercases.');
      return;
    }

    setTextDot('...');

    // create user in firebase
    createUser(email, password)
      .then(result => {
        setLoading(true);
        setAlreadyRegister(true);
        logOut();
        updateUserInfo(result.user, name, photo_url)
          .then(() => {
            setAvatarIcon(true);
            e.target.reset();
            setTextDot('');
            console.log('Registration Successfully!');
            navigate(location?.state ? location.state : '/login');
          })
          .catch(error => {
            setTextDot('');
            console.log(error);
          });
      })
      .catch(error => {
        setTextDot('');
        toast.error('Registration failed!');
        console.log(error);
      });
    console.log('Request Registration');
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

  const { register, setFocus } = useForm()
  useEffect(() => {
    setFocus("fullName")
  }, [setFocus])

  useEffect(() => {
    if (user && !location.state && !alreadyRegister) {
      navigate('/');
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <title> Register | InnSight </title>
      </Helmet>
      <h3 className="text-3xl font-semibold mb-6 mt-3 text-black text-center">
        Register Now!
      </h3>
      <div className='md:w-2/3 lg:w-2/5 rounded-2xl bg-gray-100 p-5 md:p-10 md:mx-auto font-semibold'>
        <form onSubmit={handleRegister} className='flex flex-col gap-3 '>
          <div>
            <span>Full Name:</span>
            <input type="text" {...register("fullName")} name='name' placeholder="Full Name" className="input input-bordered w-full" required />
          </div>
          <div>
            <span>Photo URL:</span>
            <input type="text" name='photo_url' placeholder="Photo URL" className="input input-bordered w-full" required />
          </div>
          <div>
            <span>Email:</span>
            <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" required />
          </div>
          <div>
            <span>Password:</span>
            <div className="flex justify-between items-center input input-bordered w-full bg-white">
              <input type={passwordShow ? 'text' : 'password'} name='password' placeholder="Password" className="w-full" required /><span onClick={handlePasswordShow}>{passwordShow ? <FaEye /> : <FaEyeSlash />}</span>
            </div>
            <p className='pt-1 text-red-500'>{passwordMsg}</p>
          </div>
          <div>
            <input type="submit" value={`Register${textDot}`} className="btn btn-primary w-full font-semibold text-xl" />
          </div>
        </form>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>
            Already have an account?{" "}
            <Link state={location?.state} to='/login' className="text-black hover:underline">Login here</Link>
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
      <div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;