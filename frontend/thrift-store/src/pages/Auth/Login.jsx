import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";

export default function Login() {
  // js
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const x = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";
  // this ll avoid double login
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      x(setCredentials(res)); //x is dispatch just to test
      toast.success("Login successful");
    } catch (error) {
      toast.error(error?.data?.message || error.message || "Login failed");
    }
  };

  return (
    <div>
      <section>
        <h1>Login here</h1>
        <form onSubmit={submitHandler}>
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

          <button disabled={isLoading} type="submit">
            {isLoading ? "Sigining In... " : "Sign In"}
          </button>
        </form>
        <div>
          <div>
            New to our platform?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create an account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
