import React from "react";
import "../Styles/profile.css";
import Projects from "./projects";

import { TiSocialFacebook } from "react-icons/ti";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

const profile = ({ skills, ...props }) => {
  return (
    <div className="profile">
      <section className="profile_images">
        <div className="profile-avatar">
          <img src={props.image_profile} alt="" />
        </div>
        <div className="social-icons">
          <div className="facebook">
            <TiSocialFacebook />
          </div>
          <div className="twitter">
            <FiTwitter />
          </div>
          <div className="linkdein">
            <RiLinkedinLine />
          </div>
        </div>
        <div className="contact_media">
          <div className="whatsapp_link">
            <a href="https://wa.me/923042009909">
              <span className="whatsapp">
                <BsWhatsapp />
              </span>
              <span>+92 304 200 9909</span>
            </a>
          </div>
          <div className="email_link">
            <a href="mailto:Usman.Rehan@altafseer.pk">
              <span className="email">
                <AiOutlineMail />
              </span>
              <span>Usman.Rehan@altafseer.pk</span>
            </a>
          </div>
          <div className="phone_link">
            <a href="tel:923042009909">
              <span className="phone">
                <BsTelephone />
              </span>
              <span>+92 304 200 9909</span>
            </a>
          </div>
        </div>
      </section>
      <section className="profile_body">
        <div className="name">
          <h1>{props.name}</h1>
          <h4>{props.designation}</h4>
        </div>
        <div className="details_header">
          <div className="details">
            <p>{props.details}</p>
          </div>
          <div className="educations">
            <p><b> {props.university} ({props.year}) </b> </p>
            <p className="certifications">{props.certification}</p>
          </div>
          <div className="skills">
            {skills.map((title) => (
              <label>
                {/* <div>{id}</div> */}
                {title}
              </label>
            ))}
          </div>
        </div>

        <div className="projects-acheive">
          <h3 className="ach">My Achievements / Projects</h3>

          <Projects
            logo="https://static.vecteezy.com/system/resources/thumbnails/000/596/678/small/mei_022019-10.jpg"
            title="Project Title"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur itaque, quisquam distinctio temporibus beatae ducimus ad cumque in facilis molestias, libero aliquam modi totam natus ex eos quasi non voluptatem. Maiores similique repellendus beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, debitis! Minus ipsam impedit doloribus ullam quo fuga pariatur expedita similique magni hic totam sunt eligendi, tempora nostrum debitis facilis vero?35"
          />
          <Projects
            logo="https://static.vecteezy.com/system/resources/thumbnails/000/596/678/small/mei_022019-10.jpg"
            title="Project Title"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur itaque, quisquam distinctio temporibus beatae ducimus ad cumque in facilis molestias, libero aliquam modi totam natus ex eos quasi non voluptatem. Maiores similique repellendus beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, debitis! Minus ipsam impedit doloribus ullam quo fuga pariatur expedita similique magni hic totam sunt eligendi, tempora nostrum debitis facilis vero?35"
          />
          <Projects
            logo="https://static.vecteezy.com/system/resources/thumbnails/000/596/678/small/mei_022019-10.jpg"
            title="Project Title"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur itaque, quisquam distinctio temporibus beatae ducimus ad cumque in facilis molestias, libero aliquam modi totam natus ex eos quasi non voluptatem. Maiores similique repellendus beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, debitis! Minus ipsam impedit doloribus ullam quo fuga pariatur expedita similique magni hic totam sunt eligendi, tempora nostrum debitis facilis vero?35"
          />
        </div>
      </section>
    </div>
  );
};

export default profile;
