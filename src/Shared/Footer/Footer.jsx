import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-800 p-10">
      <div className="flex justify-around text-white">
        <div>
          <div>
            <a href="">SkillBoost Business</a>
          </div>
          <div>
            {" "}
            <a href="/teach">Teach on SkillBoost</a>
          </div>
          <div>
            {" "}
            <a href="">Get The app</a>
          </div>
          <div>
            <a href="">About us</a>
          </div>
          <div>
            <a href="">Contact us</a>
          </div>
        </div>
        <div>
          <div>
            <a href="">Careers</a>
          </div>
          <div>
            <a href="">Blog</a>
          </div>
          <div>
            <a href="">Help and Support</a>
          </div>
          <div>
            <a href="">Affiliate</a>
          </div>
          <div>
            {" "}
            <a href="">Investors</a>
          </div>
        </div>
        <div>
          <div>
            <a href="">Terms</a>
          </div>
          <div>
            <a href="">Privacy Policy</a>
          </div>
          <div>
            <a href="">Cookie settings</a>
          </div>
          <div>
            <a href="">Sitemap</a>
          </div>
          <div>
            <a href="">Accessibility statement</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <Link>
          {" "}
          <div className="flex px-2 ">
            <img
              className="h-[30px]"
              src="https://i.ibb.co/85n48Xm/png-clipart-training-and-development-computer-icons-learning-education-skill-icon-blue-logo.png"
              alt=""
            />
            <a className="text-lg font-bold text-white">
              Skill<span className="text-blue-500">Boost</span> Hub
            </a>
          </div>
        </Link>
        <div>
          <p className="text-white">@2023 SkillBoost.inc</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
