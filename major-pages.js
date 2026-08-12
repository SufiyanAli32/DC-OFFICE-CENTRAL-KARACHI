const pageInfo = {
  about: {
    title: "About District Central Karachi",
    subtitle: "District Central Karachi - Government of Sindh",
    breadcrumb: "About District",
    badge: "District Profile"
  },
  services: {
    title: "Citizen Services",
    subtitle: "Access information about services provided by District Central Karachi.",
    breadcrumb: "Citizen Services",
    badge: "Public Facilitation"
  },
  news: {
    title: "News & Press Releases",
    subtitle: "Latest official updates and activities from District Central Karachi.",
    breadcrumb: "News & Press Releases",
    badge: "Official Updates"
  },
  initiatives: {
    title: "Government Initiatives",
    subtitle: "District-level programs, development activities and public service initiatives.",
    breadcrumb: "Initiatives",
    badge: "District Programs"
  }
};

const placeholderNote = "Official information will be added after verification.";

function active(page, key) {
  return page === key ? " active" : "";
}

function header(page) {
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
                <a class="complaint-btn" href="complaint-registration.html"><i class="bi bi-chat-square-text"></i> Complaint</a>
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
                <a class="nav-link dropdown-toggle${active(page, "about")}" href="about.html" data-bs-toggle="dropdown">About District</a>
                <div class="dropdown-menu mega-menu">
                  <div class="mega-grid">
                    <a href="about.html#vision">Vision</a><a href="about.html#mission">Mission</a><a href="about.html#history">History</a><a href="about.html#geography">District Profile</a><a href="about.html#map">Map</a>
                  </div>
                </div>
              </li>
              <li class="nav-item"><a class="nav-link" href="deputy-commissioner.html">Deputy Commissioner</a></li>
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Administrative Team</a>
                <div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="deputy-commissioner.html">Deputy Commissioner</a><a href="adc-1.html">ADC-I</a><a href="adc-2.html">ADC-II</a><a href="ac-1.html">Assistant Commissioner Liaquatabad</a><a href="ac-2.html">Assistant Commissioner Gulberg</a><a href="ac-3.html">Assistant Commissioner Nazimabad</a><a href="ac-4.html">Assistant Commissioner North Nazimabad</a><a href="ac-5.html">Assistant Commissioner New Karachi</a><a href="ac-6.html">Assistant Commissioner Revenue</a><a href="branches.html">Mukhtiarkars</a></div></div>
              </li>
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle" href="branches.html" data-bs-toggle="dropdown">Branches</a>
                <div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="revenue.html">Revenue</a><a href="branches.html">Accounts</a><a href="branches.html">General</a><a href="branches.html">Judicial</a><a href="branches.html">Establishment</a><a href="branches.html">Domicile</a><a href="branches.html">Arms</a><a href="branches.html">Control Room</a><a href="branches.html">IT Cell</a><a href="branches.html">Complaint Cell</a></div></div>
              </li>
              <li class="nav-item dropdown position-static">
                <a class="nav-link dropdown-toggle${active(page, "services")}" href="citizen-services.html" data-bs-toggle="dropdown">Citizen Services</a>
                <div class="dropdown-menu mega-menu"><div class="mega-grid wide"><a href="domicile.html">Domicile</a><a href="prc.html">PRC</a><a href="noc.html">NOC</a><a href="arms-license.html">Arms License</a><a href="revenue-certificate.html">Revenue Certificate</a><a href="land-revenue.html">Land / Revenue</a><a href="complaint-registration.html">Complaint Registration</a><a href="price-list.html">Price List</a><a href="downloads.html">Downloads / Forms</a><a href="public-assistance.html">General Public Assistance</a></div></div>
              </li>
              <li class="nav-item"><a class="nav-link" href="index.html#downloads">Downloads</a></li>
              <li class="nav-item"><a class="nav-link${active(page, "news")}" href="news.html">News</a></li>
              <li class="nav-item"><a class="nav-link${active(page, "initiatives")}" href="initiatives.html">Initiatives</a></li>
              <li class="nav-item"><a class="nav-link" href="index.html#gallery">Gallery</a></li>
              <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>`;
}

function footer() {
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
          <div class="col-6 col-lg-2"><h3>Services</h3><a href="domicile.html">Domicile</a><a href="prc.html">PRC</a><a href="noc.html">NOC</a><a href="price-list.html">Price List</a></div>
          <div class="col-6 col-lg-2"><h3>Important</h3><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="complaint-registration.html">Complaint</a><a href="#contact">Contact</a></div>
        </div>
        <div class="footer-bottom"><span>Copyright 2026 District Central Karachi. All rights reserved.</span><span>Official Government Website</span></div>
      </div>
    </footer>
    <button class="back-to-top" id="backToTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>`;
}

function hero(key) {
  const page = pageInfo[key];
  return `
    <div class="breadcrumb-band">
      <div class="container">
        <nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="index.html">Home</a></li><li class="breadcrumb-item active" aria-current="page">${page.breadcrumb}</li></ol></nav>
      </div>
    </div>
    <section class="hero-section page-hero major-hero">
      <div class="hero-bg placeholder-image"><i class="bi bi-building"></i></div>
      <div class="hero-overlay"></div>
      <div class="container-fluid px-lg-5 hero-content">
        <div class="row align-items-center min-vh-hero">
          <div class="col-xl-7 col-lg-8" data-aos="fade-up">
            <span class="hero-badge"><i class="bi bi-stars"></i> ${page.badge}</span>
            <h1>${page.title}</h1>
            <p>${page.subtitle}</p>
          </div>
        </div>
      </div>
    </section>`;
}

function sectionHead(kicker, title, text = "") {
  return `<div class="section-heading" data-aos="fade-up"><span class="section-kicker">${kicker}</span><h2>${title}</h2>${text ? `<p>${text}</p>` : ""}</div>`;
}

function iconCard(icon, title, text) {
  return `<article class="dept-card" data-aos="fade-up"><i class="bi ${icon}"></i><h3>${title}</h3><p>${text}</p></article>`;
}

function faq(id, items) {
  return `<div class="accordion help-accordion" id="${id}">${items.map((item, index) => `<div class="accordion-item"><h4 class="accordion-header" id="${id}h${index}"><button class="accordion-button ${index ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#${id}c${index}" aria-expanded="${index ? "false" : "true"}" aria-controls="${id}c${index}">${item[0]}</button></h4><div id="${id}c${index}" class="accordion-collapse collapse ${index ? "" : "show"}" aria-labelledby="${id}h${index}" data-bs-parent="#${id}"><div class="accordion-body">${item[1]}</div></div></div>`).join("")}</div>`;
}

function gallery(count) {
  return `<div class="gallery-grid major-gallery">${Array.from({ length: count }, (_, i) => `<div class="placeholder-image image-zoom"><i class="bi bi-image"></i><span>${["District", "Government Offices", "Public Services", "Development", "Events", "Administration", "Gallery", "Official Activity"][i] || "Gallery"}</span></div>`).join("")}</div>`;
}

function stats(items) {
  return `<div class="row g-3">${items.map(([value, label]) => `<div class="col-6 col-lg-3"><div class="stat-item"><strong data-counter="${value}">0</strong><span>${label}</span></div></div>`).join("")}</div><p class="text-center mt-3 text-muted fw-bold">${placeholderNote}</p>`;
}

function aboutPage() {
  const mission = [["bi-shield-check", "Transparent Governance"], ["bi-people", "Citizen-Centered Services"], ["bi-gear", "Efficient Administration"], ["bi-tree", "Sustainable Development"]];
  const climate = [["bi-sun", "Summer"], ["bi-cloud-rain", "Monsoon"], ["bi-snow", "Winter"], ["bi-thermometer-sun", "Average Weather"]];
  const transport = [["bi-bus-front", "Green Line Bus"], ["bi-bus-front-fill", "Public Buses"], ["bi-signpost-split", "Road Network"], ["bi-train-front", "Rail / Other Public Transport"]];
  return `${header("about")}<main>${hero("about")}
    <!-- Content sourced from: content/DC OFFICE CONTENT.docx -->
    <section class="section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-5" data-aos="zoom-in"><div class="dc-portrait placeholder-image image-zoom"><i class="bi bi-map"></i></div></div><div class="col-lg-7" data-aos="fade-left"><span class="section-kicker">District Introduction</span><h2>District Central Karachi</h2><p>District Central Karachi functions as one of the seven districts of Karachi Division under the Government of Sindh, with the Deputy Commissioner Office located at Sector 15-A/1, Buffer Zone, Karachi.</p><p>The district administration coordinates public services, citizen facilitation, revenue administration, complaint redressal, and field governance across its notified towns and sub-divisions.</p><a class="btn btn-primary-gradient" href="#history">Read More</a></div></div></div></section>
    <section class="section muted-section" id="vision"><div class="container"><article class="vision-panel" data-aos="fade-up"><i class="bi bi-bank2"></i><div><span class="section-kicker">Our Vision</span><h2>Responsive, Transparent and Citizen-Focused Governance</h2><p>To build a district administration that is transparent, responsive, and rooted in service, where every resident of District Central can access government facilitation quickly, fairly, and without unnecessary hardship.</p></div></article></div></section>
    <section class="section" id="mission"><div class="container">${sectionHead("Mission", "Our Mission", "To deliver efficient, accountable public services across all branches of the Deputy Commissioner's Office; to maintain law and order in coordination with allied departments; and to strengthen the bridge between citizens and government through digital facilitation and timely complaint resolution.")}<div class="card-grid">${mission.map(([icon, title]) => iconCard(icon, title, "A core priority for District Central's citizen-focused public administration.")).join("")}</div></div></section>
    <section class="section muted-section" id="history"><div class="container">${sectionHead("History", "History of District Central Karachi", "District Central Karachi, officially notified as Karachi Central District and referred to in some records as Nazimabad District, was first established as an administrative district in 1996. It was dissolved in 2001 when Karachi's five districts were merged into City District Government Karachi, and was re-established as an independent district on 11 July 2011 when the city-district system was disbanded and the original district structure restored.")}<div class="timeline-list">${["Established as an administrative district in 1996", "Merged into City District Government Karachi in 2001", "Re-established as an independent district on 11 July 2011", "Now functions as part of Karachi Division under Government of Sindh"].map((title) => `<article class="timeline-card" data-aos="fade-up"><span class="section-kicker">District Milestone</span><h3>${title}</h3><p>Official district history summary based on the provided website content document.</p></article>`).join("")}</div></div></section>
    <section class="section" id="geography"><div class="container">${sectionHead("Location", "District Profile")}<div class="row g-4 align-items-center"><div class="col-lg-6"><div class="dc-portrait placeholder-image" id="map"><i class="bi bi-geo-alt"></i></div></div><div class="col-lg-6"><div class="checklist">${[["Province","Sindh"],["Division","Karachi"],["Headquarters","Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi"],["Area","Approx. 69 km2"],["Population (2023 census)","Approx. 3.82 million"],["Literacy Rate","Approx. 83.5%"],["Towns / Sub-divisions","Gulberg Town, Liaquatabad Town, Nazimabad Town, New Karachi Town, North Nazimabad Town"],["Postal Code","74600"]].map(([item, value]) => `<div class="mini-panel"><i class="bi bi-check-circle"></i><strong>${item}</strong><span>${value}</span></div>`).join("")}</div><a class="btn btn-primary-gradient mt-4" href="#map">View District Map</a></div></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Weather", "Climate")}<div class="card-grid">${climate.map(([icon, title]) => iconCard(icon, title, "Short placeholder description for seasonal weather information.")).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Connectivity", "Transportation & Connectivity", "District Central is connected with different parts of Karachi through road corridors, public transport options, and civic mobility routes. Specific verified coverage will be added later.")}<div class="card-grid">${transport.map(([icon, title]) => iconCard(icon, title, "Placeholder transportation information for official verification.")).join("")}</div><article class="feature-card mt-4" data-aos="fade-up"><div class="placeholder-image"><i class="bi bi-bus-front"></i></div><div><span class="section-kicker">Green Line Bus Section</span><h2>Green Line Bus Rapid Transit</h2><p>The Green Line is an important public transportation corridor serving Karachi and providing connectivity to areas within and around District Central. Exact route and station information will be updated after verification.</p><div class="row g-3">${["Route Overview", "Major Stops", "Connectivity", "Passenger Information"].map((x) => `<div class="col-md-6"><div class="mini-panel"><i class="bi bi-signpost"></i><strong>${x}</strong><span>${placeholderNote}</span></div></div>`).join("")}</div><a class="btn btn-primary-gradient mt-3" href="#">View Transportation Information</a></div></article></div></section>
    
    <!-- Parliamentary member names and constituencies not found in provided DOCX sources. -->
    <section class="section"><div class="container">${sectionHead("Parliamentary Members", "Members of the National Assembly")}<p class="text-center fw-bold text-muted">${placeholderNote}</p><div class="row g-4">${[1,2,3,4].map((n) => `<div class="col-md-6 col-lg-3"><article class="person-card"><div class="avatar-lg placeholder-image"><i class="bi bi-person"></i></div><h3>MNA 0${n}</h3><p>Constituency Placeholder<br>Political / parliamentary information placeholder.</p><a href="#">View Profile</a></article></div>`).join("")}</div>${sectionHead("Parliamentary Members", "Members of the Provincial Assembly")}<p class="text-center fw-bold text-muted">${placeholderNote}</p><div class="row g-4">${[1,2,3,4].map((n) => `<div class="col-md-6 col-lg-3"><article class="person-card"><div class="avatar-lg placeholder-image"><i class="bi bi-person"></i></div><h3>MPA 0${n}</h3><p>Constituency Placeholder<br>Designation / parliamentary information placeholder.</p><a href="#">View Profile</a></article></div>`).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Statistics", "District Statistics")}${stats([[120, "Population"], [8, "Administrative Areas"], [18, "Departments"], [24, "Citizen Services"]])}</div></section>
    <section class="section"><div class="container">${sectionHead("Gallery", "Photo Gallery")}${gallery(8)}<div class="text-center mt-4"><a class="btn btn-primary-gradient" href="index.html#gallery">View Gallery</a></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Citizen Support", "Frequently Asked Questions")}${faq("aboutFaq", [["What is District Central Karachi?", "District Central Karachi is represented here with placeholder district profile content pending official verification."], ["Where is the District Central Office located?", "Official office address and visitor guidance will be added after verification."], ["Who is responsible for district administration?", "District administration is coordinated through the notified government hierarchy. Verified office details will be added later."], ["What services are provided by the district administration?", "Citizen facilitation, administrative coordination, complaint support, and related services are listed as placeholders."], ["How can citizens contact the DC Office?", "Official phone, email, and office channels will be published after verification."]])}</div></section>
  </main>${footer()}`;
}

const services = ["Domicile", "PRC", "NOC", "Arms License", "Revenue Certificate", "Land / Revenue Information", "Complaint Registration", "Price List", "Downloads / Forms", "General Public Assistance"];
const serviceLinks = {
  "Domicile": "domicile.html",
  "PRC": "prc.html",
  "NOC": "noc.html",
  "Arms License": "arms-license.html",
  "Revenue Certificate": "revenue-certificate.html",
  "Land / Revenue Information": "land-revenue.html",
  "Complaint Registration": "complaint-registration.html",
  "Price List": "price-list.html",
  "Downloads / Forms": "downloads.html",
  "General Public Assistance": "public-assistance.html"
};
function servicesPage() {
  return `${header("services")}<main>${hero("services")}
    <!-- Content sourced from: content/DC OFFICE CONTENT.docx; content/content.docx -->
    <section class="section"><div class="container">${sectionHead("Services", "Services Introduction", "Citizen-facing services include Domicile, PRC, NOC guidance, Arms License facilitation, Revenue Certificate guidance, complaints, price lists, forms, downloads, and public assistance.")}<div class="service-search"><i class="bi bi-search"></i><input id="serviceSearch" type="search" placeholder="Search Citizen Services..." aria-label="Search Citizen Services"></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Directory", "All Citizen Services")}<div class="row g-4" id="serviceCards">${services.map((name, i) => `<div class="col-md-6 col-lg-4 service-entry" data-title="${name.toLowerCase()}" id="${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}"><article class="dept-card h-100"><i class="bi ${["bi-file-earmark-person", "bi-person-lines-fill", "bi-shield-check", "bi-file-lock", "bi-file-text", "bi-map", "bi-chat-left-text", "bi-list-ul", "bi-download", "bi-headset"][i]}"></i><h3>${name}</h3><p>${name === "Domicile" ? "Application facilitation and document verification through the Domicile/PRC Branch." : name === "PRC" ? "Permanent Resident Certificate service issued alongside Domicile requirements." : name === "Arms License" ? "New Non-Prohibited Bore arms licence applications are processed through the Arms Branch." : name === "Complaint Registration" ? "Complaints may be submitted online or through the Complaint Cell / Control Room." : "Information will be updated."}</p><a class="btn btn-primary-gradient" href="${serviceLinks[name]}">View Details</a></article></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Details", "Service Detail Preview")}<div class="accordion help-accordion" id="serviceDetails">${services.map((name, i) => {
      const domicileDocs = "CNIC of applicant and father; Form B and birth certificate; educational documents of last three years; utility bills of last three years or rent agreement with supporting documents; father's domicile or mother's domicile if father's domicile is unavailable; spouse CNIC and marriage certificate if married; voter list entry; Union Council resident certificate; Mukhtiarkar report; Rs. 210 bank challan; affidavit; originals plus one certified photocopy set.";
      const armsDocs = "Application addressed to the Deputy Commissioner; CNIC copy; Sindh Domicile copy; utility bill or proof of residence; one recent passport-size photograph; duly filled application form; CRO / Police Verification; biometric verification and photograph at the Arms Section; Rs. 5,000 government fee through prescribed National Bank of Pakistan Challan.";
      const detail = name === "Domicile" ? `Required documents: ${domicileDocs} Processing fee: Rs. 450. Applicants whose CNIC is registered outside Karachi should first contact the branch in-charge.` : name === "PRC" ? `PRC is issued alongside the Domicile Certificate; see the same requirements. Processing fee: Rs. 450.` : name === "Arms License" ? `Eligibility: applicant must be a resident of Sindh Province and possess valid Sindh Domicile. District Central Karachi quota: 50 licences per month. ${armsDocs}` : name === "NOC" ? "NOCs for petrol pumps/CNG stations, public gatherings, marriage functions, street tents/shamianas, and Bachat Bazars are handled through the Judicial Branch and ADC-I office. Applicants should contact the relevant branch for the specific checklist." : name === "Complaint Registration" ? "Citizens may file a complaint online through the Citizen Help Center form, or in person at the Complaint Cell / Control Room, with complete details for review and follow-up." : name === "Price List" ? "Official district price lists are issued periodically for public awareness and market monitoring, supported by inspections carried out by Assistant Commissioners and Mukhtiarkars." : name === "Revenue Certificate" ? "Issued through the Revenue Branch. Applicants are advised to verify required supporting documents before visiting the facilitation counter." : "Information will be updated.";
      return `<div class="accordion-item" id="detail-${i}"><h4 class="accordion-header" id="serviceH${i}"><button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#serviceC${i}" aria-expanded="${i ? "false" : "true"}" aria-controls="serviceC${i}">${name}</button></h4><div id="serviceC${i}" class="accordion-collapse collapse ${i ? "" : "show"}" aria-labelledby="serviceH${i}" data-bs-parent="#serviceDetails"><div class="accordion-body"><p>${detail}</p></div></div></div>`;
    }).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Process", "How to Access Services")}<div class="branch-workflow">${["Select Service", "Review Requirements", "Submit / Visit Relevant Office", "Receive Service / Follow Up"].map((x, i) => `<div class="flow-card"><span class="avatar placeholder-image mx-auto"><i class="bi bi-${i + 1}-circle"></i></span><strong>${i + 1}. ${x}</strong></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Quick Links", "Quick Service Links")}<div class="quick-links"><a class="btn btn-primary-gradient" href="domicile.html">Domicile</a><a class="btn btn-primary-gradient" href="prc.html">PRC</a><a class="btn btn-primary-gradient" href="complaint-registration.html">Complaint</a><a class="btn btn-primary-gradient" href="downloads.html">Downloads</a><a class="btn btn-primary-gradient" href="price-list.html">Price List</a><a class="btn btn-primary-gradient" href="public-assistance.html">Contact Office</a></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("FAQ", "Frequently Asked Questions")}${faq("servicesFaq", [["Which documents are required?", "Document requirements are placeholders and will be updated with official service rules."], ["Can I download forms?", "Download links are placeholders until official forms are provided."], ["How long does processing take?", "Processing information will be added after verification."], ["Where do I submit applications?", "Relevant office details will be updated after verification."]])}</div></section>
    <section class="complaint-cta" id="service-complaint"><div class="container"><div class="cta-panel"><div><span class="section-kicker">Complaint CTA</span><h2>Need Help With a Government Service?</h2><p>Submit or track a public complaint through official facilitation channels.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="#">Submit Your Complaint</a><a class="btn btn-outline-primary" href="#">Track Your Complaint</a></div></div></div></section>
  </main>${footer()}`;
}

function newsPage() {
  const cats = ["Notifications", "Circulars", "Government Orders", "Tender Notices", "Public Announcements"];
  const sourcedNews = [
    ["District Coordination Meeting Held", "Public facilitation counters and service improvement priorities were reviewed by officials.", "District Update"],
    ["Price Monitoring Campaign Continues", "Field teams inspected markets across District Central to support fair pricing and consumer protection.", "Price Control"],
    ["Public Service Desk Upgraded", "Applicants can access clearer guidance and improved document counters at the Deputy Commissioner Office.", "Citizen Facilitation"]
  ];
  const sourcedNotices = [
    "Applications for public facilitation counters will be received during office hours.",
    "District price list has been issued for public awareness and market monitoring.",
    "Domicile and PRC applicants are advised to verify all required documents before visiting the facilitation counter.",
    "Revenue certificate applicants are advised to verify required documents before visiting.",
    "Complaint Cell follow-up desk remains available for registered public matters.",
    "All correspondence to the office should include valid contact details for a timely response.",
    "Applicants whose CNIC is registered outside Karachi must contact the branch in-charge before applying."
  ];
  return `${header("news")}<main>${hero("news")}
    <!-- Content sourced from: content/DC OFFICE CONTENT.docx -->
    <section class="section"><div class="container">${sectionHead("Featured", "Featured News")}<article class="feature-card"><div class="placeholder-image"><i class="bi bi-newspaper"></i></div><div><span class="section-kicker">${sourcedNews[0][2]}</span><h2>${sourcedNews[0][0]}</h2><p><strong>Date:</strong> Information will be updated. | <strong>Category:</strong> ${sourcedNews[0][2]}</p><p>${sourcedNews[0][1]}</p><a class="btn btn-primary-gradient" href="#">Read More</a></div></article></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Latest", "Latest News")}<div class="row g-4" id="newsCards">${sourcedNews.map((item, i) => `<div class="col-md-6 col-lg-4 news-entry" data-title="${item[0].toLowerCase()}" data-category="${item[2]}" data-year=""><article class="news-card"><div class="news-img placeholder-image"><i class="bi bi-newspaper"></i></div><div><span class="section-kicker">${item[2]}</span><time>Date will be updated</time><h3>${item[0]}</h3><p>${item[1]}</p><a href="#">Read More</a></div></article></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Press", "Press Releases")}<div class="table-responsive"><table class="table press-table"><thead><tr><th>Date</th><th>Title</th><th>Category</th><th>Download/View</th></tr></thead><tbody>${[1,2,3,4,5].map((n) => `<tr><td>0${n} August 2026</td><td>Press Release Placeholder ${n}</td><td>Official</td><td><a href="#">View</a></td></tr>`).join("")}</tbody></table></div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Notices", "Public Notices")}<div class="notice-list">${sourcedNotices.map((notice) => `<article class="notice-item"><span>Date will be updated</span><strong>${notice}</strong><a href="#">View</a></article>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Filter", "News Search & Filter")}<form class="filter-bar" id="newsFilter"><input type="search" id="newsSearch" placeholder="Search News" aria-label="Search News"><select id="newsCategory" aria-label="Category"><option value="">All Categories</option>${cats.map((x) => `<option>${x}</option>`).join("")}</select><select id="newsYear" aria-label="Year"><option value="">All Years</option><option>2026</option><option>2025</option><option>2024</option><option>2023</option></select><button class="btn btn-primary-gradient" type="submit">Filter</button></form></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Archive", "News Archive")}<div class="related-links">${[2026,2025,2024,2023].map((year) => `<a href="#">${year} Archive <i class="bi bi-arrow-right"></i></a>`).join("")}</div></div></section>
  </main>${footer()}`;
}

function initiativesPage() {
  const cats = ["Public Welfare", "Development", "Price Control", "Anti-Encroachment", "Environment", "Cleanliness", "Disaster Management", "Digital Services", "Citizen Facilitation", "Public Awareness"];
  const sourcedInitiatives = [
    ["Digital Service Desk", "An ongoing effort to move citizen-facing services, from Domicile/PRC applications to complaint registration, onto digital and semi-digital channels, reducing repeat visits and processing time.", "Digital Services"],
    ["Market Price Monitoring", "Regular field inspections by Assistant Commissioners and Mukhtiarkars to check that essential commodities are sold at official rates, with enforcement action against profiteering and hoarding.", "Price Control"],
    ["Complaint Tracking", "A structured follow-up system through the Complaint Cell, ensuring registered complaints are assigned to the relevant branch and tracked through to resolution.", "Citizen Facilitation"],
    ["District Field Visits", "Routine visits by the Deputy Commissioner and Assistant Commissioners to markets, facilitation counters, and public offices across the district's five towns.", "Public Welfare"]
  ];
  return `${header("initiatives")}<main>${hero("initiatives")}
    <!-- Content sourced from: content/DC OFFICE CONTENT.docx; content/Functions and Powers of Deputy Commissioner.docx -->
    <section class="section"><div class="container">${sectionHead("Featured", "Featured Initiative")}<article class="feature-card"><div class="placeholder-image"><i class="bi bi-building-gear"></i></div><div><span class="section-kicker">${sourcedInitiatives[0][2]}</span><h2>${sourcedInitiatives[0][0]}</h2><p>${sourcedInitiatives[0][1]}</p><a class="btn btn-primary-gradient" href="#">View Initiative</a></div></article></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Categories", "Initiative Categories")}<div class="card-grid">${cats.map((x) => iconCard("bi-grid", x, `${placeholderNote}`)).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Initiatives", "Initiative Cards")}<div class="row g-4">${sourcedInitiatives.map((item) => `<div class="col-md-6 col-lg-3"><article class="initiative-card"><div class="placeholder-image"><i class="bi bi-building-gear"></i></div><span class="section-kicker">${item[2]}</span><h3>${item[0]}</h3><p><strong>Date:</strong> Information will be updated.</p><p>${item[1]}</p><a href="initiatives.html">View Details</a></article></div>`).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Projects", "Ongoing Projects")}<div class="row g-4">${[35,55,70,85].map((p, i) => `<div class="col-md-6 col-lg-3"><article class="dept-card"><i class="bi bi-kanban"></i><h3>Project Name Placeholder</h3><p><strong>Location:</strong> Location Placeholder</p><p><strong>Status:</strong> In Progress</p><div class="progress"><div class="progress-bar" style="width:${p}%">${p}%</div></div><p class="mt-3"><strong>Start:</strong> Date Placeholder<br><strong>Completion:</strong> Date Placeholder</p></article></div>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Completed", "Completed Projects")}<div class="row g-4">${[1,2,3,4].map((n) => `<div class="col-md-6 col-lg-3"><article class="initiative-card"><div class="placeholder-image"><i class="bi bi-check2-circle"></i></div><h3>Completed Initiative ${n}</h3><p>${placeholderNote}</p></article></div>`).join("")}</div></div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Upcoming", "Upcoming Initiatives")}<div class="timeline-list">${[1,2,3,4].map((n) => `<article class="timeline-card"><span class="section-kicker">Date Placeholder</span><h3>Upcoming Initiative ${n}</h3><p><strong>Location:</strong> Location Placeholder. Dummy description for upcoming district activity.</p></article>`).join("")}</div></div></section>
    <section class="section"><div class="container">${sectionHead("Impact", "Impact / Statistics")}${stats([[42, "Projects"], [500, "Citizens Benefited"], [24, "Public Initiatives"], [18, "Completed Activities"]])}</div></section>
    <section class="section muted-section"><div class="container">${sectionHead("Gallery", "Initiative Photos")}${gallery(6)}</div></section>
    <section class="section"><div class="container">${sectionHead("FAQ", "Frequently Asked Questions")}${faq("initiativesFaq", [["What are government initiatives?", "Initiatives are placeholder entries for district programs pending official verification."], ["How are projects selected?", "Selection criteria and official policy information will be added after verification."], ["Can citizens suggest initiatives?", "Public feedback channels will be added after official confirmation."], ["Where can progress be checked?", "Verified project progress information will be published later."]])}</div></section>
  </main>${footer()}`;
}

function initFilters() {
  const serviceSearch = document.getElementById("serviceSearch");
  if (serviceSearch) {
    serviceSearch.addEventListener("input", function () {
      const query = this.value.trim().toLowerCase();
      document.querySelectorAll(".service-entry").forEach((card) => {
        card.classList.toggle("d-none", !card.dataset.title.includes(query));
      });
    });
  }

  const newsFilter = document.getElementById("newsFilter");
  if (newsFilter) {
    newsFilter.addEventListener("submit", function (event) {
      event.preventDefault();
      const query = document.getElementById("newsSearch").value.trim().toLowerCase();
      const category = document.getElementById("newsCategory").value;
      const year = document.getElementById("newsYear").value;
      document.querySelectorAll(".news-entry").forEach((card) => {
        const matchesText = !query || card.dataset.title.includes(query);
        const matchesCategory = !category || card.dataset.category === category;
        const matchesYear = !year || card.dataset.year === year;
        card.classList.toggle("d-none", !(matchesText && matchesCategory && matchesYear));
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("majorPage");
  if (!root) return;
  const page = root.dataset.page;
  const renderers = { about: aboutPage, services: servicesPage, news: newsPage, initiatives: initiativesPage };
  root.innerHTML = renderers[page]();
  initFilters();
  if (window.AOS) AOS.refreshHard();
});
