import { useContext, useState } from "react";

import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

    const handleSubmit = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const title = form.get("title");
    const email = form.get("email");
    const price = form.get("price");
    const description = form.get("description");
    const image = form.get("image");
    const formData = {
        title: title,
        instructor_name: name,
        image: image,
        instructor_email: email,
        instructor_image: user.photoURL,
        short_description: description,
        price: price

 
    }
      axiosSecure.post('/addClass', formData)
      .then(data => {
          console.log(data)
          if(data.data.insertedId) {
            Swal.fire({
                title: "Good job!",
                text: "Wait for the admin response!",
                icon: "success"
              })
          }
      })
    }

  return (
    <div>
      <div>
        <h2>Create Class</h2>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Course Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                name="title"
                className="input input-bordered"
                required
              />
            </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={user.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                value={user.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Small description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="image url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Add Class" className="btn bg-blue-500 text-white" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
