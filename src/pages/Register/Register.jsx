import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { CiUser } from "react-icons/ci";
import { TbPhotoEdit } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { VscEye, VscEyeClosed } from 'react-icons/vsc';


const Register = () => {
  const { user, createUser, updateUserInfo, setAvatarIcon, setLoading, alreadyRegister, setAlreadyRegister, logOut, textDot, setTextDot, womanLottie, apiURL } = useContext(AuthContext);
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
    const newRegister = { name, photo_url, email, password };

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
        // --------- send server start -----
        fetch(`${apiURL}/users`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newRegister)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
        // --------- send server end -----
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
        <title> Register | PotteryLane </title>
      </Helmet>

      <div className='flex flex-col md:flex-row max-w-7xl mx-auto mt-8'>
        <div className='hidden md:block'>
          {womanLottie()}
        </div>
        {/* ------ */}
        <div className='md:w-2/3 lg:w-2/5 rounded-2xl bg-base-200 p-5 md:p-10 md:mx-auto'>
          <h3 className="text-3xl font-semibold mb-6 text-black text-center">
            New Account?
          </h3>
          <form onSubmit={handleRegister} className='flex flex-col gap-3 '>
            <div>
              <span>Full Name:</span>
              <label className="flex items-center input input-bordered gap-3" htmlFor="name">
                <CiUser />
                <input type="text" {...register("fullName")} name='name' placeholder="Full Name" className="w-full" required />
              </label>
            </div>
            <div>
              <span>Photo URL:</span>
              <label className="flex items-center input input-bordered gap-3" htmlFor="email">
                <TbPhotoEdit />
                <input type="text" name='photo_url' placeholder="Photo URL" className="w-full" required />
              </label>
            </div>
            <div>
              <span>Email:</span>
              <label className="flex items-center input input-bordered gap-3" htmlFor="email">
                <MdMailOutline />
                <input type="email" name='email' placeholder="Email" className="w-full" required />
              </label>
            </div>
            <div>
              <span>Password:</span>
              <label className="flex items-center input input-bordered gap-3" htmlFor="email">
                <GoLock />
                <div className="flex justify-between items-center w-full bg-transparent">
                  <input type={passwordShow ? 'text' : 'password'} name='password' placeholder="Password" className="w-full" required /><span onClick={handlePasswordShow}>{passwordShow ? <VscEye /> : <VscEyeClosed />}</span>
                </div>
              </label>
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
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;