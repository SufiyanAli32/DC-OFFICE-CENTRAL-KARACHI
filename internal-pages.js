  const officerPages = {
    "deputy-commissioner": {
      title: "Deputy Commissioner",
      subtitle: "Official District Central Karachi Administration",
      designation: "Deputy Commissioner",
      icon: "bi-person-vcard"
    },
    "adc-1": {
      title: "ADC-I",
      subtitle: "Official District Central Karachi Administration",
      designation: "Additional Deputy Commissioner-I",
      icon: "bi-person-badge"
    },
    "adc-2": {
      title: "ADC-II",
      subtitle: "Official District Central Karachi Administration",
      designation: "Additional Deputy Commissioner-II",
      icon: "bi-person-badge"
    },
    "ac-1": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner-I",
      icon: "bi-person-workspace"
    },
    "ac-2": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner-II",
      icon: "bi-person-workspace"
    },
    "ac-3": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner-III",
      icon: "bi-person-workspace"
    },
    "ac-4": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner-IV",
      icon: "bi-person-workspace"
    },
    "ac-5": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner-V",
      icon: "bi-person-workspace"
    },
    "ac-6": {
      title: "Assistant Commissioner",
      subtitle: "Sub-Division Administration",
      designation: "Assistant Commissioner-VI",
      icon: "bi-person-workspace"
    }
  };

  const branches = [
    ["bi-bank", "Revenue", "In-charge: Mr. Umer Chandio, Assistant. Handles land and encroachment enquiries, anti-encroachment drives, civil suits, revenue appeals, and SBCA illegal or dangerous building matters."],
    ["bi-cash-stack", "Accounts", "In-charge: Mr. Amjad Hussain Siddiqui, Assistant. Handles staff salaries, GP Fund and pension cases, contingency bills, audit matters, relief finance, service books, DC Office maintenance, development-scheme finance, and VIP movement support."],
    ["bi-building", "General", "In-charge: Mr. Khalid Jameel, Assistant. Handles complaints regarding other departments, local government and TMC issues, election and census work, rain emergency, disaster response, heirship and domicile verification, blocked CNIC/DLC matters, price checking, and compensation cases."],
    ["bi-scale", "Judicial", "In-charge: Miss Maryam, Senior Clerk. Handles law-and-order matters, petroleum and fireworks licences, NOCs for public gatherings, marriages, street tents and shamianas, NGO verification, hotel licences, Section 144 Cr.P.C. matters, and district or foreign-related coordination."],
    ["bi-people", "Establishment", "In-charge: Mr. Muhammad Ali Siddiqui, Office Superintendent. Manages non-gazetted staff files, appointments, transfers, postings, service matters, DRC cases, subordinate office inspections, directives, and Assembly questions."],
    ["bi-file-earmark-person", "Domicile", "In-charge: Mr. Farooq Afzal, Senior Clerk. Responsible for issuance, record keeping, verification, and related matters for Domicile and Permanent Resident Certificates."],
    ["bi-shield-check", "Arms", "In-charge: Mr. Mehboob Ali Rind, Senior Clerk. Processes new arms licence applications for District Central residents."],
    ["bi-broadcast", "Control Room", "Team: Ghulam Hussain, Shoukat Ali, and Qadir. Operates wireless coordination and the Complaint Cell operational desk."],
    ["bi-cpu", "IT", "Manages the district website, digital services, data systems, and office technology support."],
    ["bi-chat-left-text", "Complaint Cell", "Registers, tracks, and follows up on citizen complaints submitted online or in person, coordinating with the relevant branch through resolution."],
    ["bi-megaphone", "Public Relations", "Manages press updates, public awareness campaigns, and media coordination for the Deputy Commissioner's Office."]
  ];

  const officerContent = {
    "deputy-commissioner": {
      name: "Taha Saleem",
      kicker: "Deputy Commissioner Profile",
      message: "It is an honor to serve as the Deputy Commissioner of District Central, Karachi, a district that stands at the heart of the city's civic and economic life. My commitment remains steadfast: to ensure transparent governance, efficient public service delivery, and swift redressal of citizen grievances for every resident of District Central. Under the guidance of the Commissioner Karachi and the Government of Sindh, we are working to strengthen revenue administration, streamline the issuance of Domicile and Permanent Resident Certificates, improve market price monitoring, and expand digital facilitation across all branches of this office.",
      bio: "Taha Saleem serves as the Deputy Commissioner of District Central, Karachi, heading the district's civil administration, revenue management, and public facilitation functions on behalf of the Government of Sindh.",
      roles: ["Principal district-level representative of the Provincial Government", "Overall coordination of district administration and line departments", "Revenue administration as Collector under the Sindh Land Revenue Act, 1967", "Law-and-order coordination with police and allied agencies", "District Disaster Management Authority and relief coordination", "Price control, anti-hoarding, and essential commodity monitoring", "Election, census, polio, encroachment, traffic plan, and special-event duties", "Issuance of Domicile and PRC to district residents"]
    },
    "adc-1": {
      name: "Name will be updated",
      kicker: "Additional Deputy Commissioner-I",
      message: "As Additional Deputy Commissioner-I, this office supports the Deputy Commissioner in establishment matters, revenue administration, accounts, Domicile/PRC facilitation, the P.A. Branch of ADC-I, and Arms Branch functions.",
      bio: "The Additional Deputy Commissioner works under the general supervision and control of the Deputy Commissioner and performs duties specifically assigned by the DC.",
      roles: ["Assist the DC in overall district administration", "Supervise assigned revenue matters and records", "Coordinate establishment and accounts branch work", "Support Domicile/PRC facilitation", "Coordinate price-control and anti-profiteering work where authorized", "Assist in disaster management and emergency response", "Monitor government instructions and submit reports", "Hear and dispose of delegated complaints"]
    },
    "adc-2": {
      name: "Name will be updated",
      kicker: "Additional Deputy Commissioner-II",
      message: "As Additional Deputy Commissioner-II, this office oversees judicial coordination, general administration, Benevolent Fund matters, R&I, Control Room coordination, and district complaint-handling functions.",
      bio: "The Additional Deputy Commissioner supports the Deputy Commissioner in delegated administrative, legal, law-and-order, and public-service responsibilities.",
      roles: ["Assist the DC in maintaining law and order", "Coordinate with Police, Rangers, and other law-enforcement agencies", "Participate in law-and-order meetings and monitor decisions", "Assist arrangements for processions, public gatherings, religious events, and sensitive occasions", "Handle assigned magisterial or legal functions where conferred by law", "Conduct inspections and fact-finding inquiries when directed", "Coordinate with local government and municipal institutions", "Follow up public complaints and administrative issues"]
    },
    "ac-1": { name: "Dr. Saira Khan", kicker: "Assistant Commissioner Liaquatabad", message: "It is my privilege to serve as Assistant Commissioner Liaquatabad, working closely with residents to ensure efficient administrative facilitation, timely grievance redressal, and coordinated municipal support across the sub-division.", bio: "Additional portfolio: Polio Focal Person, District Central and Public School Administration.", roles: ["Sub-divisional field administration", "Revenue administration within Liaquatabad", "Price control and market monitoring", "Public grievance review", "Polio campaign coordination", "Municipal coordination", "Field inspections", "Other duties assigned by DC/Government"] },
    "ac-2": { name: "Neha Shah", kicker: "Assistant Commissioner Gulberg", message: "It is an honor to serve as Assistant Commissioner Gulberg. My priority is accessible administrative services, effective coordination with local authorities, and prompt resolution of citizen concerns across Gulberg Town.", bio: "The Assistant Commissioner acts as sub-divisional field administrator and revenue officer under the Deputy Commissioner.", roles: ["Revenue administration within Gulberg", "Land and revenue matters", "Law-and-order coordination", "Price control and market monitoring", "Anti-encroachment support", "Government department coordination", "Disaster management support", "Public grievance handling"] },
    "ac-3": { name: "Rabia Syed", kicker: "Assistant Commissioner Nazimabad", message: "It is a privilege to serve as Assistant Commissioner Nazimabad, working to strengthen public facilitation, revenue coordination, and civic administration for the residents of Nazimabad Town.", bio: "The Assistant Commissioner works under the Deputy Commissioner and coordinates field administration at sub-division level.", roles: ["Revenue administration within Nazimabad", "Mutation, partition, demarcation, and authorized land-record proceedings", "Public order coordination", "Market inspections", "Coordination with line departments", "Development and municipal coordination", "Field assessments", "Reports to district administration"] },
    "ac-4": { name: "Nematullah Chachar", kicker: "Assistant Commissioner North Nazimabad", message: "It is my responsibility, as Assistant Commissioner North Nazimabad, to ensure residents receive timely administrative facilitation, effective market monitoring, and responsive local governance.", bio: "The Assistant Commissioner functions as a field representative of the district administration.", roles: ["Revenue supervision", "Market monitoring", "Anti-hoarding and anti-profiteering coordination", "Public property and encroachment support", "Local government coordination", "Emergency response support", "Citizen complaint review", "Field inspections"] },
    "ac-5": { name: "Captain (Retd.) Fareed Hanif", kicker: "Assistant Commissioner New Karachi", message: "It is an honor to serve as Assistant Commissioner New Karachi. Drawing on a background of disciplined public service, I am committed to maintaining law-and-order coordination, efficient administrative facilitation, and responsive governance for the residents of New Karachi Town.", bio: "The Assistant Commissioner performs duties assigned by the Deputy Commissioner, Commissioner, Board of Revenue, or Government.", roles: ["Sub-divisional administration in New Karachi", "Revenue and land-record supervision", "Law-and-order coordination", "Price control operations", "Anti-encroachment support", "Disaster management", "Public grievances", "Elections and government exercises"] },
    "ac-6": { name: "Officer Name Placeholder", kicker: "Assistant Commissioner Revenue", message: "Official profile information for Assistant Commissioner Revenue was not found in the provided DOCX sources.", bio: "<!-- AC information not found in provided DOCX sources -->", roles: ["Administrative Leadership", "District Governance", "Public Services", "Law & Order Coordination", "Revenue Administration", "Development Oversight", "Citizen Welfare", "Disaster Management"] }
  };

  function siteHeader() {
    return `
      <header class="site-header">
        <div class="top-gov-bar">
          <div class="container-fluid px-lg-5">
            <div class="d-flex flex-wrap align-items-center justify-content-between gap-2">
              <div class="d-flex flex-wrap align-items-center gap-3">
                <span><i class="bi bi-shield-check"></i> Government of Sindh</span>
                <span class="d-none d-md-inline"><i class="bi bi-patch-check"></i> Official Government Website</span>
              </div>
              <div class="d-flex flex-wrap align-items-center gap-3">
                <span><i class="bi bi-clock"></i> Mon-Fri 9:00 AM - 5:00 PM</span>
                <a href="tel:02100000000"><i class="bi bi-telephone"></i> Emergency Contact</a>
                <button class="top-link" type="button">Urdu</button>
                <button class="top-link" type="button" aria-label="Search"><i class="bi bi-search"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="main-header">
          <div class="container-fluid px-lg-5">
            <div class="row align-items-center g-3">
              <div class="col-lg-4">
                <a class="brand-lockup" href="index.html" aria-label="District Central Karachi home">
                  <span class="gov-logo"><i class="bi bi-bank2"></i></span>
                  <span><strong>District Central Karachi</strong><small>Government of Sindh</small></span>
                </a>
              </div>
              <div class="col-lg-5">
                <form class="header-search" role="search">
                  <i class="bi bi-search"></i>
                  <input type="search" placeholder="Search services, departments, notices..." aria-label="Search portal">
                  <button type="submit">Search</button>
                </form>
              </div>
              <div class="col-lg-3">
                <div class="header-actions">
                  <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                  <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                  <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                  <a class="complaint-btn" href="#contact-cta"><i class="bi bi-chat-square-text"></i> Complaint</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-xl sticky-nav">
          <div class="container-fluid px-lg-5">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portalNav" aria-controls="portalNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="portalNav">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item dropdown position-static">
                  <a class="nav-link dropdown-toggle" href="about.html" data-bs-toggle="dropdown">About District</a>
                  <div class="dropdown-menu mega-menu">
                    <div class="mega-grid">
                      <a href="about.html#vision">Vision</a><a href="about.html#mission">Mission</a><a href="about.html#history">History</a><a href="about.html#geography">District Profile</a><a href="about.html#map">Map</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item"><a class="nav-link" href="deputy-commissioner.html">Deputy Commissioner</a></li>
                <li class="nav-item"><a class="nav-link" href="adc-1.html">ADC-I</a></li>
                <li class="nav-item"><a class="nav-link" href="adc-2.html">ADC-II</a></li>
                <li class="nav-item dropdown position-static">
                  <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Assistant Commissioners</a>
                  <div class="dropdown-menu mega-menu">
                    <div class="mega-grid wide">
                      <a href="ac-1.html">AC-I</a><a href="ac-2.html">AC-II</a><a href="ac-3.html">AC-III</a><a href="ac-4.html">AC-IV</a><a href="ac-5.html">AC-V</a><a href="ac-6.html">AC-VI</a>
                    </div>
                  </div>
                </li>
                <li class="nav-item"><a class="nav-link" href="branches.html">Branches</a></li>
                <li class="nav-item dropdown position-static"><a class="nav-link dropdown-toggle" href="citizen-services.html" data-bs-toggle="dropdown">Citizen Services</a><div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="domicile.html">Domicile</a><a href="prc.html">PRC</a><a href="noc.html">NOC</a><a href="arms-license.html">Arms License</a><a href="revenue-certificate.html">Revenue Certificate</a><a href="land-revenue.html">Land / Revenue</a><a href="complaint-registration.html">Complaint Registration</a><a href="price-list.html">Price List</a><a href="downloads.html">Downloads / Forms</a><a href="public-assistance.html">General Public Assistance</a></div></div></li>
                <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
                <li class="nav-item"><a class="nav-link" href="initiatives.html">Initiatives</a></li>
                <li class="nav-item"><a class="nav-link" href="#faq">FAQ</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact-card">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>`;
  }

  function siteFooter() {
    return `
      <footer class="site-footer" id="contact">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-4">
              <a class="brand-lockup footer-brand" href="index.html"><span class="gov-logo"><i class="bi bi-bank2"></i></span><span><strong>District Central Karachi</strong><small>Government of Sindh</small></span></a>
              <p>Official district portal for public information, citizen services, administrative updates, and complaint facilitation.</p>
              <div class="footer-social"><a href="#"><i class="bi bi-facebook"></i></a><a href="#"><i class="bi bi-instagram"></i></a><a href="#"><i class="bi bi-youtube"></i></a></div>
            </div>
            <div class="col-6 col-lg-2"><h3>Quick Links</h3><a href="about.html">About</a><a href="news.html">News</a><a href="index.html#gallery">Gallery</a><a href="index.html#downloads">Downloads</a></div>
            <div class="col-6 col-lg-2"><h3>Branches</h3><a href="revenue.html">Revenue</a><a href="branches.html">Accounts</a><a href="branches.html">IT Cell</a><a href="branches.html">Complaint Cell</a></div>
            <div class="col-6 col-lg-2"><h3>Officers</h3><a href="deputy-commissioner.html">Deputy Commissioner</a><a href="adc-1.html">ADC-I</a><a href="adc-2.html">ADC-II</a><a href="ac-1.html">Assistant Commissioners</a></div>
            <div class="col-6 col-lg-2"><h3>Important</h3><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="complaint-registration.html">Complaint</a><a href="#contact-card">Contact</a></div>
          </div>
          <div class="footer-bottom"><span>Copyright 2026 District Central Karachi. All rights reserved.</span><span>Official Government Website</span></div>
        </div>
      </footer>
      <button class="back-to-top" id="backToTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>`;
  }

  function pageHero(page) {
    const description = page.description ? `<p>${page.description}</p>` : "";
    const actions = page.actions ? `<div class="hero-buttons">${page.actions}</div>` : "";
    const crumb = page.parent ? `<li class="breadcrumb-item"><a href="${page.parent.href}">${page.parent.label}</a></li>` : "";
    const badge = page.badge || "Official Profile";
    return `
      <div class="breadcrumb-band">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              ${crumb}
              <li class="breadcrumb-item active" aria-current="page">${page.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      <section class="hero-section page-hero">
        <div class="hero-bg placeholder-image"></div>
        <div class="hero-overlay"></div>
        <div class="container-fluid px-lg-5 hero-content">
          <div class="row align-items-center min-vh-hero">
            <div class="col-xl-7 col-lg-8" data-aos="fade-up">
              <span class="hero-badge"><i class="bi bi-stars"></i> ${badge}</span>
              <h1>${page.title}</h1>
              <p>${page.subtitle}</p>
              ${description}
              ${actions}
            </div>
          </div>
        </div>
      </section>`;
  }

  function faq(id) {
    const items = ["How can citizens contact this office?", "What documents should visitors bring?", "Where can official updates be reviewed?", "How are requests processed?"];
    return `
      <div class="accordion help-accordion" id="${id}">
        ${items.map((q, index) => `
          <div class="accordion-item">
            <h4 class="accordion-header" id="${id}h${index}">
              <button class="accordion-button ${index ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#${id}c${index}" aria-expanded="${index ? "false" : "true"}" aria-controls="${id}c${index}">${q}</button>
            </h4>
            <div id="${id}c${index}" class="accordion-collapse collapse ${index ? "" : "show"}" aria-labelledby="${id}h${index}" data-bs-parent="#${id}">
              <div class="accordion-body">Information will be updated after official verification. Citizens should bring CNIC and relevant supporting documents when visiting a facilitation counter.</div>
            </div>
          </div>`).join("")}
      </div>`;
  }

  function officerMain(page) {
    const key = Object.keys(officerPages).find((item) => officerPages[item] === page);
    const content = officerContent[key] || {};
    const roles = content.roles || ["Administrative Leadership", "District Governance", "Public Services", "Law & Order Coordination", "Revenue Administration", "Development Oversight", "Citizen Welfare", "Disaster Management"];
    return `
      ${siteHeader()}<main>${pageHero(page)}
        <!-- Content sourced from: content/DC OFFICE CONTENT.docx; content/Functions and Powers of Deputy Commissioner.docx; content/Functions and Powers of Deputy Commissioner, ADC, AC, Mukhtiarkar.docx -->
        <section class="section">
          <div class="container">
            <div class="row g-4 align-items-start">
              <div class="col-lg-8">
                <article class="profile-card large-card" data-aos="fade-up">
                  <div class="profile-img placeholder-image"><img src="images/DC Central.jpg" height="100%" alt=""></div>
                  <div>
                    <span class="section-kicker">${content.kicker || "Official Profile"}</span>
                    <h2>${content.name || "Officer Name Placeholder"}</h2>
                    <p class="read-time"><i class="bi bi-clock"></i> 4 min read</p>
                    <h3>${page.designation}</h3>
                    <p>${content.bio || "Official information will be added after verification."}</p>
                  </div>
                </article>
                <article class="content-card mt-4" data-aos="fade-up">
                  <span class="section-kicker">Official Message</span>
                  <h2>Message for Citizens</h2>
                  <p>${content.message || "Official information will be added after verification."}</p>
                </article>
              </div>
              <aside class="col-lg-4">
                <div class="sidebar-card" data-aos="fade-left">
                  <h3>Office Snapshot</h3>
                  <p><strong>Designation:</strong> ${page.designation}</p>
                  <p><strong>Public Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p>
                  <p><strong>Location:</strong> Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi</p>
                  <a class="btn btn-primary-gradient w-100" href="#contact-card">Contact Office</a>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <section class="section muted-section">
          <div class="container">
            <div class="section-heading" data-aos="fade-up"><span class="section-kicker">Responsibilities</span><h2>Roles & Responsibilities</h2></div>
            <div class="card-grid">${roles.map((role, i) => `<article class="dept-card role-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}"><i class="bi bi-check2-circle"></i><h3>${role}</h3><p>Function supported by the provided official reference documents.</p></article>`).join("")}</div>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="section-heading" data-aos="fade-up"><span class="section-kicker">Initiatives</span><h2>Major Initiatives</h2></div>
            <div class="row g-4">${["Public Facilitation", "Price Monitoring", "Complaint Follow-up", "Field Coordination"].map((title) => `<div class="col-md-6 col-lg-3" data-aos="zoom-in"><article class="initiative-card"><div class="placeholder-image"><i class="bi bi-building-gear"></i></div><h3>${title}</h3><p>Information will be updated after official verification.</p><a href="#">Read More</a></article></div>`).join("")}</div>
          </div>
        </section>
        <section class="section muted-section">
          <div class="container">
            <div class="row g-4 align-items-start">
              <div class="col-lg-7" data-aos="fade-right">
                <div class="section-heading text-start"><span class="section-kicker">Gallery</span><h2>Photo Gallery</h2></div>
                <div class="gallery-grid">${[1, 2, 3, 4, 5, 6].map(() => `<button class="placeholder-image image-zoom border-0 gallery-lightbox" type="button" aria-label="Open gallery image"><i class="bi bi-image"></i></button>`).join("")}</div>
              </div>
              <div class="col-lg-5" data-aos="fade-left">
                <div class="section-heading text-start"><span class="section-kicker">Achievements</span><h2>Timeline</h2></div>
                <div class="timeline-list">${["Achievements", "Events", "Gallery Captions"].map((title) => `<article class="timeline-card"><span class="section-kicker">Information Pending</span><h3>${title}</h3><p>Official information will be added after verification.</p></article>`).join("")}</div>
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="section-heading" data-aos="fade-up"><span class="section-kicker">Announcements</span><h2>Latest Announcements</h2></div>
            <div class="row g-4">${["Public facilitation counters remain available during office hours.", "Complaint follow-up is handled through the Complaint Cell and Control Room.", "Applicants should verify required documents before visiting service counters."].map((notice) => `<div class="col-md-4" data-aos="fade-up"><article class="news-card"><div class="news-img placeholder-image"><i class="bi bi-newspaper"></i></div><div><time>Date will be updated</time><h3>Public Notice</h3><p>${notice}</p><a href="#">Read More</a></div></article></div>`).join("")}</div>
          </div>
        </section>
        <section class="section muted-section" id="faq"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Citizen Support</span><h2>Frequently Asked Questions</h2></div>${faq("officerFaq")}</div></section>
        ${sharedSupport()}
      </main>${siteFooter()}${lightbox()}`;
  }

  function relatedLinks() {
    return `<section class="section"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Related Links</span><h2>Explore District Services</h2></div><div class="related-links"><a href="deputy-commissioner.html">Deputy Commissioner <i class="bi bi-arrow-right"></i></a><a href="adc-1.html">ADC-I <i class="bi bi-arrow-right"></i></a><a href="adc-2.html">ADC-II <i class="bi bi-arrow-right"></i></a><a href="branches.html">Branches <i class="bi bi-arrow-right"></i></a></div></div></section>`;
  }

  function sharedSupport() {
    return `${relatedLinks()}<section class="complaint-cta" id="contact-cta"><div class="container"><div class="cta-panel" data-aos="zoom-in"><div><span class="section-kicker">Contact CTA</span><h2>Need Assistance?</h2><p>Contact District Central for public guidance, complaint facilitation, and official visitor information.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="tel:02100000000">Call Now</a><a class="btn btn-outline-primary" href="mailto:info@example.gov.pk">Email Us</a></div></div></div></section><section class="section pt-0" id="contact-card"><div class="container"><article class="contact-card" data-aos="fade-up"><span class="section-kicker">Office Details</span><h2>District Central Contact Card</h2><p><strong>Address:</strong> Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi, 74600</p><p><strong>Public Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p><p><strong>Response Time:</strong> 48 Hours</p></article></div></section>`;
  }

  function branchesMain() {
    const page = { title: "District Central Branches", subtitle: "Departments & Administrative Branches" };
    return `${siteHeader()}<main>${pageHero(page)}
      <!-- Content sourced from: content/DC OFFICE CONTENT.docx; content/Departments and Mukhtiar kar.docx -->
      <section class="section"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Branches</span><h2>District Central Branches</h2><p>District Central's administrative work is organized into branches, each responsible for a specific area of public service. Select a branch below for its functions and facilitation details.</p></div><div class="card-grid">${branches.map(([icon, name, desc], i) => `<article class="dept-card branch-card d-flex flex-column" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}"><i class="bi ${icon}"></i><h3 class="mt-3">${name}</h3><p>${desc}</p><a class="btn btn-primary-gradient" href="${name === "Revenue" ? "revenue.html" : "#"}">View Department</a></article>`).join("")}</div></div></section>
      <section class="section muted-section"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Workflow</span><h2>How Our Branches Work</h2></div><div class="branch-workflow">${["Citizen Request", "Department Review", "Verification", "Approval", "Service Delivery"].map((step, i) => `<div class="flow-card" data-aos="fade-up"><span class="avatar placeholder-image mx-auto"><i class="bi bi-${i === 4 ? "check2" : "arrow-down"}"></i></span><strong>${step}</strong></div>`).join("")}</div></div></section>
      <section class="section" id="faq"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Citizen Support</span><h2>Frequently Asked Questions</h2></div>${faq("branchFaq")}</div></section>
      ${sharedSupport()}</main>${siteFooter()}`;
  }

  function revenueFaq() {
    const items = [
      "How do I apply for a Revenue Certificate?",
      "How long does processing take?",
      "What documents are required?",
      "Where is the Revenue Office located?",
      "How can I contact the department?"
    ];
    return `<div class="accordion help-accordion" id="revenueFaq">${items.map((q, index) => `<div class="accordion-item"><h4 class="accordion-header" id="revFaqH${index}"><button class="accordion-button ${index ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#revFaqC${index}" aria-expanded="${index ? "false" : "true"}" aria-controls="revFaqC${index}">${q}</button></h4><div id="revFaqC${index}" class="accordion-collapse collapse ${index ? "" : "show"}" aria-labelledby="revFaqH${index}" data-bs-parent="#revenueFaq"><div class="accordion-body">Citizens may visit the relevant facilitation counter with complete documents. The department reviews each request through the prescribed administrative process and provides guidance through official contact channels.</div></div></div>`).join("")}</div>`;
  }

  function revenueMain() {
    const page = {
      title: "Revenue Department",
      subtitle: "District Central Karachi",
      badge: "Department",
      parent: { label: "Branches", href: "branches.html" },
      description: "The Revenue Department is responsible for land administration, revenue records, certificates, and public revenue-related services.",
      actions: `<a class="btn btn-primary-gradient" href="#contact-card">Contact Department</a><a class="btn btn-outline-light" href="#downloads">Download Forms</a>`
    };
    const functions = [["bi-map", "Land Record Management", "Maintenance and updating of land records, record-of-rights matters, mutation records, and revenue inspections."], ["bi-cash-stack", "Revenue Collection", "Assessment and collection of land revenue, recovery of government dues, rates, cesses, and arrears where authorized."], ["bi-files", "Mutation / Dakhil-Kharij", "Processing and supervision of mutation of land rights arising from lawful transactions, with notices and record maintenance where required."], ["bi-signpost", "Demarcation and Measurement", "Conduct or supervision of demarcation, land measurement, survey-related work, and boundary identification according to prescribed revenue procedure."], ["bi-shield-check", "Government Land Protection", "Identification and protection of government land, reporting unauthorized occupation and encroachment to competent authority."], ["bi-bank", "Revenue Proceedings", "Revenue cases, appeals, enquiries, civil suits, court cases, and proceedings within statutory or delegated jurisdiction."], ["bi-building", "SBCA / Building Matters", "Coordination on illegal portions, encroachment matters, and illegal or dangerous building references."], ["bi-people", "Public Assistance", "Guidance and complaint review for citizens on revenue matters within the office's delegated authority."]];
    const services = [["bi-file-earmark-check", "Revenue Certificate"], ["bi-folder2-open", "Land Record Information"], ["bi-signpost", "Mutation Guidance"], ["bi-shield", "Government Land Matters"], ["bi-building-check", "Encroachment Enquiries"], ["bi-headset", "Public Assistance"]];
    const documents = ["Information will be updated.", "Applicants are advised to verify required supporting documents before visiting the facilitation counter."];
    const steps = ["Submit application or enquiry at the relevant facilitation counter", "Branch scrutiny and document verification", "Revenue staff review or field report where required", "Decision, approval, or further lawful proceedings", "Certificate, response, or service delivery"];
    const hierarchy = ["Deputy Commissioner / Collector", "Additional Deputy Commissioner-I", "Assistant Commissioners", "Mukhtiarkars", "Tapedars and field revenue staff"];
    const downloads = ["Revenue Application Form", "Revenue Certificate Sample", "Guidelines", "Government Notification", "Revenue Rules"];
    return `${siteHeader()}<main>${pageHero(page)}
      <!-- Content sourced from: content/Departments and Mukhtiar kar.docx; content/Functions and Powers of Deputy Commissioner.docx; content/Functions and Powers of Deputy Commissioner, ADC, AC, Mukhtiarkar.docx -->
      <section class="section"><div class="container"><div class="row g-4 align-items-start"><aside class="col-lg-3 order-lg-2"><div class="sidebar-card department-sidebar" data-aos="fade-left"><h3>Quick Navigation</h3>${["Overview", "Functions", "Services", "Documents", "Procedure", "Hierarchy", "Downloads", "FAQ", "Contact"].map((item) => `<a href="#${item.toLowerCase()}"><i class="bi bi-arrow-right-circle"></i>${item}</a>`).join("")}</div></aside><div class="col-lg-9 order-lg-1">
        <section id="overview" class="mb-5"><div class="row g-4 align-items-center"><div class="col-md-5" data-aos="zoom-in"><div class="dc-portrait placeholder-image image-zoom"><i class="bi bi-bank"></i></div></div><div class="col-md-7" data-aos="fade-left"><span class="section-kicker">Department Overview</span><h2>About Revenue Department</h2><p>Revenue administration is one of the principal statutory functions associated with the Deputy Commissioner / Collector in Sindh. The branch handles land and encroachment enquiries, anti-encroachment drives, civil suits and other court cases, revenue cases and appeals, and illegal or dangerous building matters referred through SBCA.</p><div class="row g-3 mt-2"><div class="col-md-4"><div class="mini-panel"><i class="bi bi-person"></i><strong>In-charge</strong><span>Mr. Umer Chandio, Assistant</span></div></div><div class="col-md-4"><div class="mini-panel"><i class="bi bi-diagram-3"></i><strong>Reports To</strong><span>ADC-I</span></div></div><div class="col-md-4"><div class="mini-panel"><i class="bi bi-list-check"></i><strong>Scope</strong><span>Land, records, revenue cases, encroachment matters.</span></div></div></div></div></div></section>
        <section id="functions" class="mb-5"><div class="section-heading text-start"><span class="section-kicker">Responsibilities</span><h2>Functions & Responsibilities</h2></div><div class="card-grid">${functions.map(([icon, title, text], i) => `<article class="dept-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}"><i class="bi ${icon}"></i><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
        <section id="services" class="mb-5"><div class="section-heading text-start"><span class="section-kicker">Citizen Services</span><h2>Public Facilitation Services</h2></div><div class="row g-4">${services.map(([icon, title]) => { const href = title === "Revenue Certificate" ? "revenue-certificate.html" : title === "Land Record Information" || title === "Mutation Guidance" || title === "Government Land Matters" || title === "Encroachment Enquiries" ? "land-revenue.html" : title === "Public Assistance" ? "public-assistance.html" : "citizen-services.html"; return `<div class="col-md-6 col-xl-4" data-aos="fade-up"><article class="news-card h-100"><div class="news-img placeholder-image"><i class="bi ${icon}"></i></div><div><h3>${title}</h3><p>${title === "Revenue Certificate" ? "Applicants are advised to verify required supporting documents before visiting the facilitation counter." : "Information will be updated."}</p><a href="${href}">Learn More</a></div></article></div>`; }).join("")}</div></section>
        <section id="documents" class="mb-5"><div class="section-heading text-start"><span class="section-kicker">Documents</span><h2>Required Documents</h2></div><ul class="checklist">${documents.map((doc) => `<li data-aos="fade-up"><i class="bi bi-check-circle-fill"></i>${doc}</li>`).join("")}</ul></section>
        <section id="procedure" class="mb-5"><div class="section-heading text-start"><span class="section-kicker">Procedure</span><h2>Application Procedure</h2></div><div class="timeline-list">${steps.map((step, i) => `<article class="timeline-card" data-aos="fade-up"><span class="section-kicker">Step ${i + 1}</span><h3>${step}</h3><p>The department processes this stage through official review, documentation, and citizen facilitation channels.</p></article>`).join("")}</div></section>
        
    </main>${siteFooter()}`;
  }

  function lightbox() {
    return `<div class="lightbox-modal" id="pageLightbox" aria-hidden="true"><button class="lightbox-close" type="button" aria-label="Close image"><i class="bi bi-x-lg"></i></button><div class="placeholder-image"><i class="bi bi-image"></i></div></div>`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("internalPage");
    if (!root) return;

    const pageKey = root.dataset.page;
    root.innerHTML = pageKey === "branches" ? branchesMain() : pageKey === "revenue" ? revenueMain() : officerMain(officerPages[pageKey]);

    document.querySelectorAll(".gallery-lightbox").forEach(function (button) {
      button.addEventListener("click", function () {
        const modal = document.getElementById("pageLightbox");
        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
      });
    });

    const lightboxClose = document.querySelector(".lightbox-close");
    const lightbox = document.getElementById("pageLightbox");
    if (lightboxClose && lightbox) {
      lightboxClose.addEventListener("click", function () {
        lightbox.classList.remove("show");
        lightbox.setAttribute("aria-hidden", "true");
      });
      lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) lightboxClose.click();
      });
    }

    if (window.AOS) AOS.refreshHard();
  });
