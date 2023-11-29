import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const TeachOnSkillBoost = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const axiosSecure = useAxiosSecure();
  
  
  const handleTeachingRequest = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const TeacherPhoto = form.get("TeacherPhoto");
    const experience = form.get("experience");
    const category = form.get("category");
    const teacherReqInfo = { 
        name: name,
        TeacherPhoto: TeacherPhoto, 
        experience: experience, 
        category: category
    }
    console.log(teacherReqInfo)
    axiosSecure.post('/teachReq',teacherReqInfo)
    .then(res => {
        if(res.data.insertedId){
            Swal.fire({
                title: "Request sent successfully!",
                icon: "success"
              });
        }
    })


  }



  return (
    <div>
      <Helmet>
        <title>SkillBoost Hub || Teach On SkillBoost HUb</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold p-6">Start teaching today</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleTeachingRequest} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="input input-bordered"
                    defaultValue={user?.displayName}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Images</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Your photo url"
                    name="TeacherPhoto"
                    className="input input-bordered"
                    defaultValue={user?.photoURL}
                    required
                  />
                </div>
                <div className="form-control">
                  <label>
                    Experience:
                    <select name="experience" >
                      <option value="beginner">Beginner</option>
                      <option value="experienced">Experienced</option>
                      <option value="someIdea">Some Idea</option>
                    </select>
                  </label>
                </div>
                <div className="form-control">
                  <label>
                    Category:
                    <select name="category" >
                      <option value="WebDevelopment">Web Development</option>
                      <option value="digitalMarketing">Digital Marketing</option>
                      <option value="programming">Programming</option>
                      <option value="AI">AI</option>
                      <option value="Fitness">Fitness</option>
                    </select>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn bg-blue-500 text-white" value="Submit for review" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachOnSkillBoost;
