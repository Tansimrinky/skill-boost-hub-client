import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {

    const { signIn , googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


  
    const handleLogIn = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get("email");
      const password = form.get("password");
      signIn(email, password)
        .then((result) => {
          Swal.fire("Successfully Logged in ..");
          navigate(location?.state ? location.state : "/");
          return result.user;
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
          });
        });
    };
  
    const handleGoogle = () => {
      googleSignIn()
        .then((result) => {
          Swal.fire("Successfullly logged in..");
          console.log(result.user);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
          });
        });
    
      }
  return (
    <div
      style={{
        backgroundImage:
          'url("https://i.ibb.co/xFLgjW6/pngtree-light-blue-metaverse-city-background-image-1418954.jpg")',
      }}
      className="h-screen bg-cover "
    >
      <Helmet>
        <title>SkillBoost Hub || sign in</title>
      </Helmet>

      <div className="flex justify-center pt-60">
        
        <div className="card  w-[1600px]  max-w-sm shadow-2xl bg-base-100">
            <div className="p-6">
            <label className="label">
                <span className="label-text font-bold text-3xl">Sign in with Google</span>
              </label>
                <button onClick={handleGoogle} className="text-blue-500 text-center btn btn-outline border-0 border-b-4  border-blue-500 font-bold text-3xl w-full mt-6  "><FaGoogle /></button>
                <div className="divider">OR</div>
            </div> 
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-3xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-3xl">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline border-0 border-b-4 mt-4 border-blue-500 font-bold text-3xl ">Login</button>
            </div>
          </form>
          <div className="text-blue-900 underline font-bold text-center p-6">
            <Link to="/register">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
