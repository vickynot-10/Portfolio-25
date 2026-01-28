import "./experience.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      project: "ProfluxIOT IOT Management",
      madeAt: "AAPGS Private Limited",
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
      id: 2,
      project: "Keepwisely Asset Management",
      madeAt: "AAPGS Private Limited",
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
      {
    id: 3,
    project: "Spicy Greens – Hotel & Dining Management",
   madeAt: "AAPGS Private Limited",
    stack: [
      "Next.js",
      "MongoDB",
    ],
    desc: [
      "Built a full-stack hotel and dining management system with separate client and admin applications.",
      "Implemented admin modules for managing hotels, food items, categories, availability status, and image galleries.",
      "Enabled dining reservation functionality with automated email notifications using Nodemailer.",
      "Designed customizable email templates allowing admins to send manual or automated responses to users.",
      "Implemented JWT cookie-based authentication with secure sign-up and sign-in flows for users and admins.",
      "Optimized performance by implementing lazy loading for images using Intersection Observer API.",
      "Reduced initial load time by optimizing menu and product data fetching strategies."
    ]
  },
  {
    id: 4,
    project: "E-Digicard – Digital Business Card Platform",
  madeAt: "AAPGS Private Limited",
    stack: [
      "Next.js",
      "MongoDB"
    ],
    desc: [
      "Developed a multi-user digital business card platform with dynamic content rendering based on user IDs.",
      "Built an admin panel to manage products and embed YouTube videos dynamically.",
      "Implemented a feedback module to collect user responses and improve engagement.",
      "Designed a scalable content structure to support multiple users and personalized profiles."
    ]
  },
  {
    id: 5,
    project: "OKR",
    madeAt: "AAPGS Private Limited",
    stack: [
      "Angular",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io"
      
    ],
    desc: [
      "Developed a real-time chat module supporting one-to-one chats, group chats, and contact lists.",
      "Implemented real-time messaging using Socket.IO with support for images, files, and shared links.",
      "Designed user profile views displaying grouped media such as images, files, and shared links for better UX.",
      "Added emoji reactions, message editing, and delete functionality to improve chat usability.",
      "Integrated browser notifications with sound alerts to notify users of new messages across the app.",
      "Initialized global socket connections to ensure notifications work outside the active chat view."
    ]
  },
  {
  id: 6,
  project: "Expense Tracker",
  madeAt: "AAPGS Private Limited",
  stack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Angular",
    "OneSignal"
  ],
  desc: [
    "Developed backend APIs for a personal and group-based expense tracking application using Node.js and Express.",
    "Collaborated with Flutter developers to design and implement APIs for dashboards, transactions, expenses, and group management.",
    "Implemented group features including referral code invitations, shared expenses, and group transaction tracking.",
    "Built notification infrastructure using OneSignal for real-time alerts and reminders.",
    "Created cron-based APIs to trigger upcoming payment and expense reminders with push notifications.",
    "Developed an Angular-based admin panel to manage custom expense categories dynamically.",
    "Built an admin analytics dashboard displaying differentiated user metrics such as country-wise and gender-wise usage.",
    
  ]
}

  ];

  const [openModal, setModalOpen] = useState(false);
  const [selected_project, setSelectedProject] = useState(null);

  function OpenModal(id) {
    setModalOpen(true);
    for (let i = 0; i < projects.length; i++) {
      if (id === projects[i].id) {
        const el = projects[i];
        setSelectedProject(el);
      }
    }
  }

  function CloseModal() {
    setSelectedProject(null);
    setModalOpen(false);
  }

  return (
    <div className="experience-comp-container">
      <Link to="/" className="back-link">
        <MdOutlineKeyboardBackspace />{" "}
        <span style={{ marginLeft: "8px" }}>Vicky</span>
      </Link>

      <h1>All Projects</h1>

      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Made At</th>
            <th>Built with</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <div className="proj-th">
                    {item.project}
                    <button
                      className="info-btn"
                      onClick={() => OpenModal(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-info-icon lucide-info"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td> {item.madeAt} </td>
                <td>
                  {" "}
                  <div className="skills-div-project">
                    {item.stack.map((el, i) => {
                      return (
                        <div key={i} className="skills-chip">
                          <p>{el} </p>
                        </div>
                      );
                    })}{" "}
                  </div>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {openModal && selected_project && (
        <div className="modal-overlay" onClick={CloseModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>
                {selected_project.project} | {selected_project.madeAt}
              </h2>
              <button className="close-btn" onClick={CloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="skills-div-project">
                {selected_project.stack.map((tech, i) => (
                  <span key={i} className="skills-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <ul
                className="desc-ul"
                style={{
                  maxHeight: "400px",
                }}
              >
                {selected_project.desc.map((el, i) => {
                  return (
                    <li className="desc-project" key={i}>
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
