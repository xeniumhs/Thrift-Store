import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

export default function Register() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isloading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") ? sp.get("redirect") : "/";

  // this ll avoid double register
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ username, email, password }).unwrap();
        console.log("Before dispatch", res);
        dispatch(setCredentials({...res}));
        navigate(redirect);
        toast.success("Registration successful");
        console.log("After dispatch", userInfo);
      } catch (error) {
        toast.error(error?.data?.message || error.message || "Register failed");
      }
    }
  };

  return (
    <div>
      <section>
        <h1>Register here</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Re-Enter password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
            disabled={isloading}
            type="submit"
            className="bg-pink-500 px-4 py-2 rounded cursor-pointer my-[1rem]"
          >
            {isloading ? "Signing In..." : "Sign In"}
          </button>
        {isloading && <Loader />}
      </form>

      <div className="mt-4">
        <div className="text-pink-100">
          Already registered ?{" "}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : "/login"}
            className="text-pink-500 hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
      </section>
    </div>
  );
}
