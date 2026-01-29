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
      role: "Software Engineer",
      company: "AAPGS Private Limited",
      description: [
        `Developed full-stack web applications using Angular/Next.js, Node.js, and MongoDB, delivering production-ready
features end-to-end.`,
        `Implemented real-time communication using Socket.IO and event-driven APIs to update UI based on live data
changes.`,
        `Designed and structured REST APIs and database models to support scalable and maintainable backend services.`,
        `Collaborated with cross-functional teams across frontend and backend development to integrate APIs, real-time
features, and user interfaces.`,
      ],
      skills: ["Angular", "Nextjs", "Nodejs", "ExpressJs", "MongoDB"],
      isExperienceSection: true,
    },
    {
      year: "Dec 2024 - Mar 2025 ",
      role: "Web Developer",
      company: "E-CareerPluz Private Limited",
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
      "#about,#experience,#projects,#skills",
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
      },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const projectDetails = [
    {
      name: "ProfluxIOT IOT Management",
      company_name: "AAPGS Private Limited",
      stack: [
        "Angular",
        "ECharts",
        "Gridster3",
        "FoblexFlow",
        "Nodejs",
        "Expressjs",
        "Socket.io",
        "MongoDB",
        "Redis",
      ],
      desc: [
        "Built a scalable IoT management system with multi-tenant architecture, implementing dynamic database switching based on user JWT authentication.",
        "Designed and developed CRUD modules for devices, categories, and location hierarchy (site → floor → device mapping).",
        "Implemented a dynamic dashboard builder allowing users to drag & drop widgets (charts, tables, gauges) using Gridster3.",
        "Developed configurable ECharts widgets (line, bar, pie, stacked, gauge, table) with dynamic input mapping (X/Y, multi-axis, thresholds).",
        "Optimized dashboard performance using Socket.IO push updates, ChangeDetectionStrategy.OnPush, and incremental chart updates via setOption(false).",
        "Used Map data structures instead of arrays for faster widget lookups and improved UI rendering performance.",
        "Implemented real-time device data streaming using WebSockets, updating only recent data points (50–100) to keep UI responsive.",
        "Leveraged MongoDB Time Series collections for high-frequency device data ingestion and efficient querying.",
        "Designed a Redis-first ingestion strategy, batching inserts via background workers (insertMany) to reduce database load.",
        "Prevented race conditions using Redis NX locks and reduced redundant DB queries by caching dashboard configurations.",
        "Built a rule-based automation engine using FoblexFlow with conditional nodes (AND/OR), HTTP, Email, WhatsApp actions.",
        "Implemented retry logic, delay counters, threshold-based triggers, and execution history logging for automations.",
        "Created stress-testing scripts to simulate high-volume device data ingestion and validate system scalability.",
      ],
    },
    {
      name: "Keepwisely Asset Managemnt",
      company_name: "AAPGS Private Limited",

      stack: [
        "Angular",
        "OLAMaps API",
        "ECharts",
        "Gridster3",
        "Nodejs",
        "Expressjs",
        "Socket.io",
        "MongoDB",
      ],

      desc: [
        "Developed a custom analytics platform enabling users to create widgets by writing MongoDB queries with enforced response schemas.",
        "Built an admin query editor using CodeMirror and Prettier with validation for chart/table compatibility.",
        "Safely executed stored queries using Node.js worker processes, isolating runtime execution from the main thread.",
        "Implemented dynamic dashboard rendering, converting serialized queries into valid MongoDB queries at runtime.",
        "Designed drag-and-drop dashboards where users can reuse admin-created widgets with live filters.",
        "Integrated Ola Maps API to display real-time asset locations with dynamic latitude/longitude updates.",
        "Enabled live GPS tracking by streaming coordinates from Flutter mobile apps via Socket.IO to Angular dashboards.",
        "Implemented real-time map markers and asset detail popups synchronized with backend updates.",
        "Integrated live video streaming using WebRTC (Flutter → Node → Angular) for real-time asset monitoring.",
        "Built reusable dynamic modules for widgets, maps, and filters to support future scalability.",
      ],
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
      val: ["React", "Angular", "Nextjs", "Expressjs", "Nodejs", "Socket.io"],
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
            <p className="role-txt">I am a Software Engineer</p>
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
              Currently, I'm a Software Engineer at&nbsp;
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
                    <p style={{ padding: 0, margin: 0, marginBottom: "10px" }}>
                      {" "}
                      {item.title}{" "}
                    </p>
                    <div className="points-div">
                      {item.val.map((el, i) => {
                        return (
                          <span className="list-points" key={i}>
                            {" "}
                            {el}{" "}
                          </span>
                        );
                      })}
                    </div>
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
                    <p className="m-0 p-0"> {item.company_name} </p>
                  </div>
                  <div>
                    <span className="exp-title" style={{ margin: 0 }}>
                      {item.name}
                    </span>
                    <ul className="desc-ul">
                      {item.desc.map((el, i) => {
                        return (
                          <li className="desc-project" key={i}>
                            {el}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="skills-section">
                      {item.stack.map((el, i) => {
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

          <Link to="projects" className="view-all-projects">
            View Full Projects{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
