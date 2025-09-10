import React, { useState,useEffect } from "react";
import "../Homepage/Homepage.css";
import { FaTrophy, FaMedal } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openCategory, setOpenCategory] = useState(null);


  // Include email + the two dropdown fields
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phoneNo: "",
  subject: "",
  message: "",
});



  const achievements = [
    {
      year: "CROREPATI AGENT 2025",
      title: "CROREPATI AGENT",
      desc: "Achieved prestigious Crorepati Agent in the year of 2025, recognition showcasing high-level success in insurance advisory.",
      color: "orange",
      icon: <FaTrophy />,
    },
    {
      year: "MDRT 2025",
      title: "Million Dollar Round Table",
      desc: "Achieved prestigious MDRT recognition showcasing high-level success in insurance advisory.",
      color: "orange",
      icon: <FaTrophy />,
    },
    {
      year: "MDRT 2024",
      title: "Million Dollar Round Table",
      desc: "Production Year 2023 - Qualifying for MDRT showcases exceptional performance in life insurance sales.",
      color: "yellow",
      icon: <FaTrophy />,
    },
    {
      year: "AAA 2024",
      title: "Always Active Agent",
      desc: "Recognized for outstanding dedication and customer satisfaction throughout the year.",
      color: "green",
      icon: <FaMedal />,
    },
    {
      year: "AAA 2023",
      title: "Always Active Agent",
      desc: "Recognized for outstanding dedication and customer satisfaction throughout the year.",
      color: "green",
      icon: <FaMedal />,
    },
    {
      year: "MDRT 2022",
      title: "Million Dollar Round Table",
      desc: "Achieved prestigious MDRT recognition showcasing high-level success in insurance advisory.",
      color: "purple",
      icon: <FaTrophy />,
    },
  ];

   // LIC Schemes
  const schemes = [
  {
    category: "Endowment Plans",
    products: [
      { name: "LIC's Single Premium Endowment Plan", planNo: "717", uin: "512N283V03", link: "https://licindia.in/web/guest/lic-s-single-premium-endowment-plan-717-512n283v03" },
      { name: "LIC's New Endowment Plan", planNo: "714", uin: "512N277V03", link: "https://licindia.in/web/guest/lic-s-new-endowment-plan-714-512n277v03" },
      { name: "LIC's New Jeevan Anand", planNo: "715", uin: "512N279V03", link: "https://licindia.in/web/guest/lic-s-new-jeevan-anand-715%09512n279v03" },
      { name: "LIC's Jeevan Lakshya", planNo: "733", uin: "512N297V03", link: "https://licindia.in/web/guest/lic-s-jeevan-lakshya-733-512n297v03" },
      { name: "LIC's Jeevan Labh Plan", planNo: "736", uin: "512N304V03", link: "https://licindia.in/web/guest/lic-s-jeevan-labh-plan-736-512n304v03" },
      { name: "LIC's Amritbaal", planNo: "774", uin: "512N365V02", link: "https://licindia.in/web/guest/lic-s-amritbaal-774%09512n365v02" },
      { name: "LIC's Bima Jyoti", planNo: "760", uin: "512N339V03", link: "https://licindia.in/web/guest/lic-s-bima-jyoti-new" },
      { name: "LIC's Jeevan Azad", planNo: "768", uin: "512N348V02", link: "https://licindia.in/web/guest/lic-s-jeevan-azad" },
      { name: "LIC's Nav Jeevan Shree", planNo: "912", uin: "512N387V01", link: "https://licindia.in/web/guest/lic-s-nav-jeevan-shree-plan-no.912-1" },
      { name: "LIC's Nav Jeevan Shree - Single Premium", planNo: "911", uin: "512N390V01", link: "https://licindia.in/web/guest/lic-s-nav-jeevan-shree-single-premium-plan-no.911-1" }
    ]
  },
  {
    category: "Whole Life Plans",
    products: [
      { name: "LIC's Jeevan Umang", planNo: "745", uin: "512N312V03", link: "https://licindia.in/web/guest/lic-sjeevanumang-745%09512n312v03" },
      { name: "LIC's Jeevan Utsav", planNo: "771", uin: "512N363V02", link: "https://licindia.in/web/guest/lic-s-jeevan-utsav1" }
    ]
  },
  {
    category: "Money Back Plans",
    products: [
      { name: "LIC's Bima Shree", planNo: "748", uin: "512N316V03", link: "https://licindia.in/web/guest/lic-s-bima-shree" },
      { name: "LIC's New Money Back Plan - 20 Years", planNo: "720", uin: "512N280V03", link: "https://licindia.in/web/guest/lic-s-new-money-back-plan-20-years" },
      { name: "LIC's New Money Back Plan - 25 Years", planNo: "721", uin: "512N278V03", link: "https://licindia.in/web/guest/lic-s-new-money-back-plan-25-years" },
      { name: "LIC's New Children's Money Back Plan", planNo: "732", uin: "512N296V03", link: "https://licindia.in/web/guest/lic-s-new-children-s-money-back-plan" },
      { name: "LIC's Bima Ratna", planNo: "764", uin: "512N345V02", link: "https://licindia.in/web/guest/lic-s-bima-ratna" }
    ]
  },
  {
    category: "Term Assurance Plans",
    products: [
      { name: "LIC's Digi Term", planNo: "876", uin: "512N356V02", link: "https://licindia.in/web/guest/lic-s-digi-term-876-512n356v01" },
      { name: "LIC's Digi Credit Life", planNo: "878", uin: "512N358V01", link: "https://licindia.in/web/guest/lic-s-digi-credit-life-878-512n358v01" },
      { name: "LIC's Yuva Credit Life", planNo: "877", uin: "512N357V01", link: "https://licindia.in/web/guest/lic-s-yuva-credit-life-877-512n357v01" },
      { name: "LIC's Yuva Term", planNo: "875", uin: "512N355V02", link: "https://licindia.in/web/guest/lic-s-yuva-term-875-512n355v01" },
      { name: "LIC's New Tech-Term", planNo: "954", uin: "512N351V02", link: "https://licindia.in/web/guest/lic-s-new-tech-term-954-512n351v01" },
      { name: "LIC's New Jeevan Amar", planNo: "955", uin: "512N350V02", link: "https://licindia.in/web/guest/lic-s-new-jeevan-amar-955-uin-512n350v02" },
      { name: "LIC's Saral Jeevan Bima", planNo: "859", uin: "512N341V01", link: "https://licindia.in/web/guest/lic-s-saral-jeevan-bima" }
    ]
  },
  {
    category: "Riders",
    products: [
      { name: "LIC's Accident Benefit Rider", planNo: "-", uin: "512B203V03", link: "https://licindia.in/web/guest/lic-s-accident-benefit-rider-512b203v03" },
      { name: "LIC's Premium Waiver Benefit Rider", planNo: "-", uin: "512B204V04", link: "https://licindia.in/web/guest/lic-s-premium-waiver-benefit-rider" },
      { name: "LIC's Accidental Death & Disability Benefit Rider", planNo: "-", uin: "512B209V02", link: "https://licindia.in/web/guest/lic-s-accidental-death-disability-benefit-rider-512b209v02" },
      { name: "LIC's New Term Assurance Rider", planNo: "-", uin: "512B210V02", link: "https://licindia.in/web/guest/lic-s-new-term-assurance-rider" },
      { name: "LIC's Linked Accidental Death Benefit Rider", planNo: "-", uin: "512A211V02", link: "https://licindia.in/web/guest/lic-s-linked-accidental-death-benefit-rider" }
    ]
  }
];


  // ✅ My Services
  const services = [
    {
      icon: "🛡️",
      title: "Life Insurance",
      desc: "Comprehensive life insurance solutions for every stage of life.",
    },
    {
      icon: "💚",
      title: "Health Insurance",
      desc: "Protect your health with our wide range of health insurance plans.",
    },
    {
      icon: "💼",
      title: "Investment Plans",
      desc: "Grow your wealth with secure and flexible investment plans.",
    },
    {
      icon: "👪",
      title: "Family Protection",
      desc: "Financial safety for your family’s future.",
    },
    {
      icon: "🏡",
      title: "Retirement Plans",
      desc: "Plan ahead for a stress-free retirement life.",
    },
  ];

    // ✅ Photo Gallery Images
  const galleryImages = [
    "image/p1.jpg",
    "image/p.jpg",
    "image/p2.jpg",
    "image/p3.jpg",
    "image/p4.jpg",
    "image/p5.jpg",
  ];

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bs8eutx",     // your Service ID
        "template_45odbja",   // your Template ID
        formData,             // sending all fields
        "PFKpbOCLQcgVQf7yS"   // your Public Key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully ✅");
          setFormData({
            name: "",
            phoneNo: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message ❌, Try again!");
          console.error(error);
        }
      );
  };




  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="short-name">SS</div>
          <span className="agent-name">Shyamsundar Sahana</span>
        </div>

        <div className={`nav-center ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#achievements">Achievements</a>
          <a href="#services">Schemes</a>
          <a href="#my-services">My Services</a>
          <a href="#photo-gallery">Photo Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {/* Content Section */}
      <div className="container" id="home">
        {/* Badges */}
        <div className="badges">
          <span className="badge yellow">MDRT Achiever</span>
          <span className="badge green">18+ Years Experience</span>
        </div>

        {/* Main Content */}
        <main className="main">
          <h1>
            Secure Your Tomorrow, <br /> Today
          </h1>
          <p>
            I'm Shyamsundar Sahana, a certified LIC Agent and Financial Planner
            with over 18 years of experience. As a 3-time MDRT achiever and CM's
            Club Member, I'm dedicated to helping families achieve financial
            security.
          </p>
        </main>

        {/* Call Now Button */}
        <div className="btn-container">
          <a href="tel:+919933415637" className="call-btn">
            📞 Call Now
          </a>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-box">
          {/* Image on Left */}
          <div className="about-img-container">
            <img
              src="image/agent.jpg" 
              alt="Agent" 
              className="about-img"
            />
          </div>

          {/* Text on Right */}
          <div className="about-text">
            <h2 className="about-heading">About Me</h2>
            <div className="underline"></div>

            <p>
              I'm Shyamsundar Sahana, a proud LIC Agent with over 18 years of
              experience in guiding individuals and families toward financial
              security. I'm honored to be a CM's Club Member, a Crorepati Agent,
              and a 3-time MDRT (Million Dollar Round Table) achiever—
              recognitions that reflect my dedication, trustworthiness, and
              performance.
            </p>
            <p>
              As a certified Financial Planner and Sales Executive, I specialize
              in crafting personalized insurance and investment plans that suit
              every life stage.
            </p>
            <p>
              I also represent Star Health and Allied Insurance Company, where
              I've served clients with care and commitment for over 7 years.
            </p>
            <p>
              Whether you're planning for your child's education, your
              retirement, or simply seeking reliable health or life insurance
              coverage—I'm here to help you make the smartest choice.
            </p>
            <p>
              Let's secure your future, together.
            </p>

            {/* Achievement Boxes */}
            <div className="about-stats">
              <div className="stat-box">
                <h3>18+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-box">
                <h3>3x</h3>
                <p>MDRT Achiever</p>
              </div>
              <div className="stat-box">
                <h3>CM's</h3>
                <p>Club Member</p>
              </div>
              <div className="stat-box">
                <h3>7+</h3>
                <p>Years Star Health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement section */}
      <section className="achievements" id="achievements">
        <h2 className="achievements-title">Achievements & Recognition</h2>
        <p className="achievements-subtitle">
          Consistent performance and dedication recognized by LIC
        </p>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className={`achievement-card ${item.color}`}>
              <div className="achievement-header">
                <span className="achievement-year">{item.year}</span>
                <span className="achievement-icon">{item.icon}</span>
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ LIC Schemes Section */}
          <section className="schemes" id="services">
            <h2 className="schemes-title">LIC Schemes</h2>
            <p className="schemes-subtitle">
              Explore comprehensive insurance solutions across multiple categories
            </p>

            <div className="scheme-categories">
              {schemes.map((scheme, index) => (
                <div key={index} className="scheme-category">
                  {/* Accordion Header */}
                  <div
                    className={`scheme-header ${openCategory === index ? "active" : ""}`}
                    onClick={() =>
                      setOpenCategory(openCategory === index ? null : index)
                    }
                  >
                    <h3>{scheme.category}</h3>
                    <span className="toggle-icon">
                      {openCategory === index ? "−" : "+"}
                    </span>
                  </div>

                  {/* Expandable Product List */}
                  <div
                    className={`scheme-products ${
                      openCategory === index ? "show" : ""
                    }`}
                  >
                    <ul>
                      {scheme.products.map((product, i) => (
                        <li key={i}>
                          <a href={product.link} target="_blank" rel="noopener noreferrer">
                            {product.name}
                          </a>
                          <span className="plan-meta">
                            {product.planNo !== "-" && ` (Plan No: ${product.planNo})`}{" "}
                            {product.uin && ` | UIN: ${product.uin}`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

       {/* ✅ My Services Section */}
      <section className="services" id="my-services">
        <h2 className="services-title">My Services</h2>
        <div className="services-container">
          {services.map((srv, index) => (
            <div key={index} className="service-card">
              <div className="icon">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ✅ Photo Gallery Section */}
      <section className="gallery" id="photo-gallery">
        <h2 className="gallery-title">Photo Gallery</h2>
        <div className="slider">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={index === slideIndex ? "active" : ""}
            />
          ))}

          {/* Arrows */}
          <span
            className="prev"
            onClick={() =>
              setSlideIndex((slideIndex - 1 + galleryImages.length) % galleryImages.length)
            }
          >
            &#10094;
          </span>
          <span
            className="next"
            onClick={() => setSlideIndex((slideIndex + 1) % galleryImages.length)}
          >
            &#10095;
          </span>
        </div>

        {/* Dots */}
        <div className="dots">
          {galleryImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === slideIndex ? "active-dot" : ""}`}
              onClick={() => setSlideIndex(index)}
            ></span>
          ))}
        </div>
      </section>
  

      <section className="contact-section" id="contact">
        <div className="contact-wrap">
          <div className="contact-header">
            <h2>Get In Touch</h2>
            <span className="accent"></span>
            <p>Ready to secure your financial future? Let's discuss your insurance needs.</p>
          </div>

          <div className="contact-grid">
            {/* Left: Contact cards */}
            <div className="contact-cards">
              <div className="contact-card">
               {/* Left: Contact cards in a single row */}
                  <div className="contact-cards">
                    <a href="tel:+919933415637" className="contact-card">
                      <div className="icon-sq"><FaPhoneAlt /></div>
                      <div>
                        <h4>Phone Numbers</h4>
                        <p>+91 99334 15637 / 94751 94082</p>
                      </div>
                    </a>
 
                    <a href="mailto:shyamlic3127@gmail.com" className="contact-card">
                      <div className="icon-sq"><FaEnvelope /></div>
                      <div>
                        <h4>Email</h4>
                        <p>shyamlic3127@gmail.com</p>
                      </div>
                    </a>
 
                    <a href="https://wa.me/919933415637" target="_blank" rel="noopener noreferrer" className="contact-card">
                      <div className="icon-sq"><FaWhatsapp /></div>
                      <div>
                        <h4>WhatsApp</h4>
                        <p>9933415637</p>
                      </div>
                    </a>
                  </div>
              </div>
            </div>

            {/* Right: Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text" name="name" placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email" name="email" placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="row">
                <input
                  type="text" name="phoneNo" placeholder="Your Phone No."
                  value={formData.phoneNo}
                  onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
                  required
                />
                <input
                  type="text" name="subject" placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>


              <textarea
                name="message" placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
        <div className="footer">
          <h2 style={{textAlign:"center"}}>© 2025 CodeNest. All rights reserved.</h2>
        </div>
    </div>
  );
}
