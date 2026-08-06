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
  ["bi-bank", "Revenue", "Land, certificates, and revenue record coordination."],
  ["bi-cash-stack", "Accounts", "Budget support, payments, and financial administration."],
  ["bi-building", "General", "Administrative correspondence and operational support."],
  ["bi-scale", "Judicial", "Magisterial coordination and legal administrative matters."],
  ["bi-people", "Establishment", "Staffing, postings, records, and office management."],
  ["bi-file-earmark-person", "Domicile", "Application facilitation and document verification."],
  ["bi-shield-check", "Arms", "Licensing support and official application guidance."],
  ["bi-broadcast", "Control Room", "Emergency coordination and district response monitoring."],
  ["bi-cpu", "IT", "Digital services, portal support, and data systems."],
  ["bi-chat-left-text", "Complaint Cell", "Citizen complaints, tracking, and resolution follow-up."],
  ["bi-megaphone", "Public Relations", "Press updates, public awareness, and media coordination."]
];

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
          <div class="col-6 col-lg-2"><h3>Quick Links</h3><a href="index.html#about">About</a><a href="index.html#news">News</a><a href="index.html#gallery">Gallery</a><a href="index.html#downloads">Downloads</a></div>
          <div class="col-6 col-lg-2"><h3>Branches</h3><a href="revenue.html">Revenue</a><a href="branches.html">Accounts</a><a href="branches.html">IT Cell</a><a href="branches.html">Complaint Cell</a></div>
          <div class="col-6 col-lg-2"><h3>Officers</h3><a href="deputy-commissioner.html">Deputy Commissioner</a><a href="adc-1.html">ADC-I</a><a href="adc-2.html">ADC-II</a><a href="ac-1.html">Assistant Commissioners</a></div>
          <div class="col-6 col-lg-2"><h3>Important</h3><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="#contact-cta">Complaint</a><a href="#contact-card">Contact</a></div>
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
            <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, urna at dignissim facilisis, arcu sem luctus magna, vitae cursus mi sem vitae nibh.</div>
          </div>
        </div>`).join("")}
    </div>`;
}

function officerMain(page) {
  const roles = ["Administrative Leadership", "District Governance", "Public Services", "Law & Order Coordination", "Revenue Administration", "Development Oversight", "Citizen Welfare", "Disaster Management"];
  return `
    ${siteHeader()}<main>${pageHero(page)}
      <section class="section">
        <div class="container">
          <div class="row g-4 align-items-start">
            <div class="col-lg-8">
              <article class="profile-card large-card" data-aos="fade-up">
                <div class="profile-img placeholder-image"><i class="bi ${page.icon}"></i></div>
                <div>
                  <span class="section-kicker">Deputy Commissioner Profile</span>
                  <h2>Officer Name Placeholder</h2>
                  <p class="read-time"><i class="bi bi-clock"></i> 4 min read</p>
                  <h3>${page.designation}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, velit at facilisis pulvinar, neque justo dictum augue, sed tempor est lacus eu risus. Integer posuere nibh non arcu mattis, vitae volutpat mauris volutpat.</p>
                </div>
              </article>
              <article class="content-card mt-4" data-aos="fade-up">
                <span class="section-kicker">Official Message</span>
                <h2>Message for Citizens</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, lectus vitae vestibulum pretium, turpis massa consequat nulla, ac congue leo risus nec dui. Praesent dignissim pulvinar justo, vitae faucibus urna porta at.</p>
              </article>
            </div>
            <aside class="col-lg-4">
              <div class="sidebar-card" data-aos="fade-left">
                <h3>Office Snapshot</h3>
                <p><strong>Designation:</strong> ${page.designation}</p>
                <p><strong>Public Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p>
                <p><strong>Location:</strong> District Central Office, Karachi</p>
                <a class="btn btn-primary-gradient w-100" href="#contact-card">Contact Office</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section class="section muted-section">
        <div class="container">
          <div class="section-heading" data-aos="fade-up"><span class="section-kicker">Responsibilities</span><h2>Roles & Responsibilities</h2></div>
          <div class="card-grid">${roles.map((role, i) => `<article class="dept-card role-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}"><i class="bi bi-check2-circle"></i><h3>${role}</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></article>`).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-heading" data-aos="fade-up"><span class="section-kicker">Initiatives</span><h2>Major Initiatives</h2></div>
          <div class="row g-4">${[1,2,3,4].map((n) => `<div class="col-md-6 col-lg-3" data-aos="zoom-in"><article class="initiative-card"><div class="placeholder-image"><i class="bi bi-building-gear"></i></div><h3>District Initiative ${n}</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><a href="#">Read More</a></article></div>`).join("")}</div>
        </div>
      </section>
      <section class="section muted-section">
        <div class="container">
          <div class="row g-4 align-items-start">
            <div class="col-lg-7" data-aos="fade-right">
              <div class="section-heading text-start"><span class="section-kicker">Gallery</span><h2>Photo Gallery</h2></div>
              <div class="gallery-grid">${[1,2,3,4,5,6].map(() => `<button class="placeholder-image image-zoom border-0 gallery-lightbox" type="button" aria-label="Open gallery image"><i class="bi bi-image"></i></button>`).join("")}</div>
            </div>
            <div class="col-lg-5" data-aos="fade-left">
              <div class="section-heading text-start"><span class="section-kicker">Achievements</span><h2>Timeline</h2></div>
              <div class="timeline-list">${[2026,2025,2024].map((year) => `<article class="timeline-card"><span class="section-kicker">${year}</span><h3>Administrative Milestone</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nisl in tortor consequat luctus.</p></article>`).join("")}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-heading" data-aos="fade-up"><span class="section-kicker">Announcements</span><h2>Latest Announcements</h2></div>
          <div class="row g-4">${[1,2,3].map((n) => `<div class="col-md-4" data-aos="fade-up"><article class="news-card"><div class="news-img placeholder-image"><i class="bi bi-newspaper"></i></div><div><time>0${n} August 2026</time><h3>Public Notice Placeholder</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><a href="#">Read More</a></div></article></div>`).join("")}</div>
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
  return `${relatedLinks()}<section class="complaint-cta" id="contact-cta"><div class="container"><div class="cta-panel" data-aos="zoom-in"><div><span class="section-kicker">Contact CTA</span><h2>Need Assistance?</h2><p>Contact District Central for public guidance, complaint facilitation, and official visitor information.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="tel:02100000000">Call Now</a><a class="btn btn-outline-primary" href="mailto:info@example.gov.pk">Email Us</a></div></div></div></section><section class="section pt-0" id="contact-card"><div class="container"><article class="contact-card" data-aos="fade-up"><span class="section-kicker">Office Details</span><h2>District Central Contact Card</h2><p><strong>Address:</strong> District Central Office, Karachi, Sindh</p><p><strong>Phone:</strong> 021-00000000</p><p><strong>Email:</strong> info@example.gov.pk</p></article></div></section>`;
}

function branchesMain() {
  const page = { title: "District Central Branches", subtitle: "Departments & Administrative Branches" };
  return `${siteHeader()}<main>${pageHero(page)}
    <section class="section"><div class="container"><div class="section-heading" data-aos="fade-up"><span class="section-kicker">Branches</span><h2>District Central Branches</h2><p>Professional dummy text describing departmental coordination and citizen facilitation.</p></div><div class="card-grid">${branches.map(([icon, name, desc], i) => `<article class="dept-card branch-card d-flex flex-column" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}"><i class="bi ${icon}"></i><h3 class="mt-3">${name}</h3><p>${desc}</p><a class="btn btn-primary-gradient" href="${name === "Revenue" ? "revenue.html" : "#"}">View Department</a></article>`).join("")}</div></div></section>
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
  const functions = [["bi-map", "Land Record Management"], ["bi-cash-stack", "Revenue Collection"], ["bi-files", "Mutation Records"], ["bi-shield-check", "Property Verification"], ["bi-file-earmark-text", "Certificates"], ["bi-bank", "Revenue Court Support"], ["bi-building", "Government Land Coordination"], ["bi-people", "Public Assistance"]];
  const services = [["bi-file-earmark-check", "Revenue Certificate"], ["bi-folder2-open", "Land Record Information"], ["bi-signpost", "Mutation Guidance"], ["bi-shield", "Property Verification"], ["bi-building-check", "Government Land Matters"], ["bi-headset", "Public Assistance"]];
  const documents = ["CNIC Copy", "Application Form", "Ownership Documents", "Supporting Documents", "Photographs", "Verification Documents"];
  const steps = ["Submit Application", "Document Verification", "Department Review", "Approval", "Certificate / Service Delivery"];
  const hierarchy = ["Revenue Officer", "Assistant Revenue Officer", "Senior Clerk", "Junior Clerk", "Field Staff"];
  const downloads = ["Revenue Application Form", "Revenue Certificate Sample", "Guidelines", "Government Notification", "Revenue Rules"];
  return `${siteHeader()}<main>${pageHero(page)}
    <section class="section"><div class="container"><div class="row g-4 align-items-start"><aside class="col-lg-3 order-lg-2"><div class="sidebar-card department-sidebar" data-aos="fade-left"><h3>Quick Navigation</h3>${["Overview","Functions","Services","Documents","Procedure","Hierarchy","Downloads","FAQ","Contact"].map((item) => `<a href="#${item.toLowerCase()}"><i class="bi bi-arrow-right-circle"></i>${item}</a>`).join("")}</div></aside><div class="col-lg-9 order-lg-1">
      <section id="overview" class="mb-5"><div class="row g-4 align-items-center"><div class="col-md-5" data-aos="zoom-in"><div class="dc-portrait placeholder-image image-zoom"><i class="bi bi-bank"></i></div></div><div class="col-md-7" data-aos="fade-left"><span class="section-kicker">Department Overview</span><h2>About Revenue Department</h2><p>The Revenue Department supports orderly land administration, record coordination, certificate processing, and public facilitation for revenue-related matters. Its purpose is to guide citizens through official procedures with clear documentation requirements and responsive service delivery.</p><div class="row g-3 mt-2"><div class="col-md-4"><div class="mini-panel"><i class="bi bi-bullseye"></i><strong>Mission</strong><span>Accessible revenue services.</span></div></div><div class="col-md-4"><div class="mini-panel"><i class="bi bi-eye"></i><strong>Vision</strong><span>Transparent public records.</span></div></div><div class="col-md-4"><div class="mini-panel"><i class="bi bi-list-check"></i><strong>Objectives</strong><span>Timely citizen support.</span></div></div></div></div></div></section>
      <section id="functions" class="mb-5"><div class="section-heading text-start"><span class="section-kicker">Responsibilities</span><h2>Functions & Responsibilities</h2></div><div class="card-grid">${functions.map(([icon, title], i) => `<article class="dept-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 70}"><i class="bi ${icon}"></i><h3>${title}</h3><p>Official staff provide guidance, record support, and administrative coordination according to notified procedures.</p></article>`).join("")}</div></section>
      <section id="services" class="mb-5"><div class="section-heading text-start"><span class="section-kicker">Citizen Services</span><h2>Public Facilitation Services</h2></div><div class="row g-4">${services.map(([icon, title]) => `<div class="col-md-6 col-xl-4" data-aos="fade-up"><article class="news-card h-100"><div class="news-img placeholder-image"><i class="bi ${icon}"></i></div><div><h3>${title}</h3><p>Professional dummy service description for citizen guidance and department facilitation.</p><a href="#">Learn More</a></div></article></div>`).join("")}</div></section>
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
