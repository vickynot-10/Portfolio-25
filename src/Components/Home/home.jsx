import "./home.css";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import TomatoImg from "../../assets/Project-Pictures/Food-order-Main.jpg";
import Skull from "../../assets/Project-Pictures/Skull-Thumbnail.jpg";
import { LuDownload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

import VigneshPDF from "../../assets/Resume/Vignesh.pdf";

export default function Home() {
  const experience = [
    {
      year: "Mar 2025 - Present ",
      role: "Software Developer",
      company: "Comapny name",
      description: [],
      skills: ["Angular", "Nodejs", "ExpressJs", "MongoDB"],
      isExperienceSection: true,
    },
    {
      year: "Dec 2024 - Mar 2025 ",
      role: "Web Developer",
      company: "Company name",
      description: [
        "Designed and developed a comprehensive website offering digital services, business consulting, and legal advisory",
        "Developed backend functionality with PHP to handle email notifications, subscription emails, and contact form submissions and implemented responsive design techniques to ensure optimal user experience across devices",
        "Utilized HTML, CSS, and JavaScript to create interactive and user-friendly interfaces and collaborated with stakeholders to align the website’s features with business objectives",
      ],

      skills: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP"],
      isExperienceSection: false,
    },
  ];

  const [navClass, setNavClass] = useState("");

  function ScrollView(id) {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#about,#experience,#projects,#skills"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNavClass(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.6,
      }
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const projectDetails = [
    {
      name: "Tomato Bites",
      img: TomatoImg,
      stack: "MERN",
      projectLink: "https://food-order-c58e.onrender.com/delivery",
      desc: [
        " Designed and implemented RESTful APIs using Node.js and Express.js to manage user authentication, orders, and food delivery services.",
        "Integrated Real-time Geolocation Tracking to fetch user’s current locations and designed a Search feature enabling users to find food items or restaurants efficiently. ",
        "Implemented cookie-based authentication and CORS policies to ensure secure and seamless communication between frontend and backend.",
        "Optimized API performance by structuring routes efficiently and implementing middleware for authentication and request handling",
        "Improved application performance by compressing images, implementing lazy loading on images and necessary components , resulting in faster load times and a smoother user experience.",
        "Implemented JWT-based authentication for secure user login and registration, along with order history tracking to enable users to view and manage past purchases.",
      ],

      ghLink: "https://github.com/vickynot-10/Food-Order-",
      livelink: "https://food-order-c58e.onrender.com/delivery",
    },
    {
      name: "SkullCandy Clone",
      img: Skull,

      projectLink: "https://skullcandy-completed.onrender.com/",
      stack: "Nodejs , MongoDB",
      desc: [
        "Developed and optimized RESTful APIs using Node.js and Express.js to handle user authentication, product purchases, and cart management.",
        "Designed protected routes using middleware-based token verification, ensuring secure transactions and data integrity.",
        "Integrated a MongoDB database to store user profiles for authentication, login management, and profile creation.",
        "Built a responsive UI with TailwindCSS, ensuring smooth user experiences across a variety of devices",
      ],
      ghLink: "https://github.com/vickynot-10/SkullCandy-completed",
      livelink: "https://skullcandy-completed.onrender.com/",
    },
  ];

  const experienceRefs = useRef([]);
  experienceRefs.current = [];
  const addToRefs = (el) => {
    if (el && !experienceRefs.current.includes(el)) {
      experienceRefs.current.push(el);
    }
  };
  useEffect(() => {
    const cards = experienceRefs.current;

    const handleMouseEnter = (hoveredCard) => {
      cards.forEach((card) => {
        if (card !== hoveredCard) {
          card.classList.add("blurred");
        } else {
          card.classList.add("focused");
        }
      });
    };

    const handleMouseLeave = () => {
      cards.forEach((card) => {
        card.classList.remove("blurred");
        card.classList.remove("focused");
      });
    };

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => handleMouseEnter(card));
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => handleMouseEnter(card));
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const skills = [
    { title: "languages", val: ["Python", "Javascript", "Typescript"] },
    {
      title: "frameworks and libraries",
      val: ["React", "Angular", "Expressjs", "Nodejs"],
    },
    { title: "database", val: ["MongoDB", "MySQL"] },
    { title: "tools", val: ["Git"] },
  ];

  const navigate = useNavigate();

  function Navigate() {
    navigate("/experience");
  }

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <a href={VigneshPDF} download="Vignesh-Resume.pdf" className="resume-btn">
        <LuDownload />
      </a>

      <div className="home-container">
        <div>
          <div>
            <h1>Vignesh</h1>
            <p className="role-txt">I am a Software Developer</p>
            <p className="desc-txt">
              I create accessible, pixel-perfect web experiences by building
              intuitive UIs, reliable backend systems, and efficient database
              structures — end to end
            </p>
          </div>

          <div>
            <Link
              onClick={() => ScrollView("about")}
              className={navClass === "about" ? "active-nav-link" : ""}
            >
              About me
            </Link>
            <Link
              onClick={() => ScrollView("skills")}
              className={navClass === "skills" ? "active-nav-link" : ""}
            >
              Skills
            </Link>
            <Link
              onClick={() => ScrollView("experience")}
              className={navClass === "experience" ? "active-nav-link" : ""}
            >
              Experience
            </Link>
            <Link
              onClick={() => ScrollView("projects")}
              className={navClass === "projects" ? "active-nav-link" : ""}
            >
              Projects
            </Link>
          </div>

          <div>
            <Link to="https://github.com/vickynot-10" target="_blank">
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/vignesh-s-512245293/"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://wa.me/916382409401?text=Hello%20There!"
              target="_blank"
            >
              <FaWhatsapp />
            </Link>
            <Link to="mailto:vigneshselvam504@gmail.com" target="_blank">
              <SiGmail />
            </Link>
          </div>
        </div>

        <div className="main-section">
          <div id="about">
            <h6 className="mobile-header">About Me</h6>
            <p>
              I’m a developer based in Madurai, Tamil Nadu, passionate about
              crafting accessible, pixel-perfect user interfaces that blend
              thoughtful design with robust engineering. My favorite work lies
              at the intersection of design and development, creating
              experiences that not only look great but are meticulously built
              for performance and usability.
            </p>

            <p>
              Currently, I'm a Software Developer at&nbsp;
              <span className="bright-text">AAPGS Private Limited</span>,
              specializing in accessibility. I contribute to the creation and
              maintenance of UI components, and develop admin dashboards and
              backend systems. I’ve implemented features such as infinite
              loading, optimized data queries using field projection to reduce
              payload size, and dynamic admin panels.
            </p>
          </div>

          <div id="skills">
            <h6 className="mobile-header">Skills</h6>

            <div className="skills-grid">
              {skills.map((item, ind) => {
                return (
                  <div key={ind} className="skill-card">
                    <p> {item.title} </p>
                    <ul>
                      {item.val.map((el, i) => {
                        return <li key={i}> {el} </li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div id="experience">
            <h6 className="mobile-header">Experience</h6>
            {experience.map((item, ind) => {
              return (
                <div
                  onClick={item.isExperienceSection && Navigate}
                  key={ind}
                  className="experience-card c-poiner"
                  ref={addToRefs}
                >
                  <div>
                    <p> {item.year} </p>
                  </div>
                  <div>
                    <p className="exp-title">
                      {item.role} · {item.company}
                    </p>
                    <ul className="desc-ul">
                      {item.description.map((el, i) => {
                        return (
                          <li className="desc-project" key={i}>
                            {el}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="skills-section">
                      {item.skills.map((el, i) => {
                        return (
                          <div key={i} className="skills-chip">
                            <p>{el} </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div id="projects">
            <h6 className="mobile-header">Projects</h6>
            {projectDetails.flatMap((item, ind) => {
              return (
                <div key={ind} className="experience-card" ref={addToRefs}>
                  <div>
                    <img
                      src={item.img}
                      alt="project-pic"
                      className="project-icon"
                    />
                  </div>
                  <div>
                    <Link
                      to={
                        item.projectLink.trim() === ""
                          ? "#projects"
                          : item.projectLink
                      }
                      target={
                        item.projectLink.trim() === "" ? "_self" : "_blank"
                      }
                      className="exp-title"
                      style={{ margin: 0 }}
                    >
                      {item.name} | {item.stack}
                    </Link>
                    <ul className="desc-ul">
                      {item.desc.map((el, i) => {
                        return (
                          <li className="desc-project" key={i}>
                            {el}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="link-div">
                      <Link to={item.livelink} target="_blank">
                        {" "}
                        Live Link{" "}
                      </Link>
                      <Link to={item.ghLink} target="_blank">
                        {" "}
                        Github Link{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
