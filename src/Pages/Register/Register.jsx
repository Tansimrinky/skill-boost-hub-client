import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";




const Register = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        reset();
      }

        
  return (
    <div>
      <Helmet>
        <title>SkillBoost Hub || Register</title>
      </Helmet>
      <div className="flex justify-evenly items-center">
        <div>
          <img
            src="https://i.ibb.co/C5G2fVx/professional-development-of-teachers-illustration-exclusive-design-inspiration-vector.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="hero h-fit">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-blue-500">
                  Register Now
                </h1>
              </div>
              <div className="card flex-shrink-0  lg:w-[500px] shadow-2xl bg-blur">
                <form  onSubmit={handleSubmit(onSubmit)} className="card-body ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-blue-500 text-bold text-5xl">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })} 
                      name="name"
                      placeholder="Your Name"
                      className="input input-bordered"
                      
                    />
                    {errors.name && <span className="text-red-600 p-1">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-blue-500 text-bold text-5xl">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="url"
                      placeholder="Your Picture"
                      className="input input-bordered"
                      {...register("photo", { required: true })} 
                      name="photo"
                     
                    />
                    {errors.photo && <span className="text-red-600 p-1">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-blue-500 text-bold text-5xl">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email", { required: true })} 
                      name="email"
                      className="input input-bordered"
                     
                    />
                    {errors.email && <span className="text-red-600 p-1">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-blue-500 text-bold text-5xl">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password", { required: true, minLength: 6 })} 
                      name="password"
                      className="input input-bordered"
                    
                    />
                    {errors.password && <span className="text-red-600 p-1">This field is required</span>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p> }
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 border-blue-500 font-bold text-3xl ">
                      Register
                    </button>
                  </div>
                  <p className="text-green-900">
                    Already have an account? PLease{" "}
                    <Link className="underline text-red-700" to="/signIn">
                      Log in
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
