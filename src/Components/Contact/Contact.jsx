import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qr52ey6",
        "template_gp4om0r",
        form.current,
        "U9O6axd47ZGeqYRuT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div>
        <div className="flex justify-center gap-6">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="user_email"
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
                  name="user_name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <label>Message</label>
              <textarea className="input input-bordered" name="message" />
              <input
                className="btn bg-[#400e0e] text-white"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
