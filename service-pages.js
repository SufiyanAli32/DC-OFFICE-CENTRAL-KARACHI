const servicePages = {
  domicile: {
    title: "Domicile Certificate",
    file: "domicile.html",
    icon: "bi-file-earmark-person",
    category: "Citizen Documentation",
    department: "Domicile / PRC Branch",
    source: "content/DC OFFICE CONTENT.docx",
    description: "Application facilitation and document verification for Domicile Certificate services.",
    eligibility: ["The permanent address on the CNIC must be District Central, Karachi.", "Applicants whose CNIC is registered outside Karachi should first contact the branch in-charge."],
    documents: ["CNIC of applicant and father", "Form B and birth certificate", "Educational certificate/documents of the last three years", "Utility bills of the last three years or rent agreement and supporting documents if a tenant", "Applicant's father's domicile, or mother's domicile if father's domicile is unavailable", "CNIC and marriage certificate of spouse if the applicant is married", "Mother's identity card if father is deceased or divorced, with father's death certificate or divorce decree", "Voter list entry for applicant, or father's voter list if applicant is under 18", "Resident Certificate from the relevant Union Council", "Report from the Mukhtiarkar of the relevant area", "Bank challan of Rs. 210/-", "Affidavit", "Original documents plus one set of certified photocopies"],
    procedure: ["Verify required documents before visiting the facilitation counter", "Submit the application and supporting documents", "Branch scrutiny and document verification", "Mukhtiarkar report where required", "Issuance after prescribed verification and approval"],
    fees: ["Processing fee: Rs. 450/-", "Bank challan: Rs. 210/-"],
    processing: "Processing information will be updated.",
    where: "Domicile / PRC Branch, Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi."
  },
  prc: {
    title: "Permanent Resident Certificate (PRC)",
    file: "prc.html",
    icon: "bi-person-lines-fill",
    category: "Citizen Documentation",
    department: "Domicile / PRC Branch",
    source: "content/DC OFFICE CONTENT.docx",
    description: "PRC is issued alongside the Domicile Certificate using the same verified document requirements.",
    eligibility: ["See Domicile Certificate requirements.", "Applicants whose CNIC is registered outside Karachi should first contact the branch in-charge."],
    documents: ["Same document checklist as Domicile Certificate."],
    procedure: ["Review Domicile/PRC requirements", "Submit application and supporting documents", "Branch scrutiny and verification", "Issuance after approval"],
    fees: ["Processing fee: Rs. 450/-", "Bank challan: Rs. 210/-"],
    processing: "Processing information will be updated.",
    where: "Domicile / PRC Branch, Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi."
  },
  noc: {
    title: "No-Objection Certificate (NOC)",
    file: "noc.html",
    icon: "bi-file-check",
    category: "Permissions & NOCs",
    department: "Judicial Branch / ADC-I Office",
    source: "content/DC OFFICE CONTENT.docx; content/Departments and Mukhtiar kar.docx",
    description: "NOC facilitation for matters handled by the Judicial Branch and ADC-I office.",
    eligibility: ["Eligibility information will be updated with verified official details."],
    documents: ["Official document checklist will be updated."],
    procedure: ["Contact the relevant branch for the specific NOC category", "Submit application and supporting documents", "Department review", "Decision under the prescribed administrative process"],
    fees: ["Official fee information will be updated."],
    processing: "Processing information will be updated.",
    where: "Judicial Branch for petrol pump/CNG, public gathering, marriage, tent/shamiana and related NOCs; ADC-I office for Bachat Bazar NOC and gratis water tanker permission."
  },
  "arms-license": {
    title: "Arms License",
    file: "arms-license.html",
    icon: "bi-shield-check",
    category: "Licensing",
    department: "Arms Branch",
    source: "content/content.docx; content/Departments and Mukhtiar kar.docx",
    description: "Guidance for General Arms Licence (Non-Prohibited Bore) applications.",
    eligibility: ["Applicant must be a resident of Sindh Province and possess a valid Sindh Domicile.", "Residents of any district of Sindh may apply, subject to the prescribed procedure and quota.", "District Central Karachi quota: 50 licences per month."],
    documents: ["Application addressed to the Deputy Commissioner concerned", "Copy of CNIC", "Copy of Sindh Domicile", "Utility bill / proof of residence", "One recent passport-size photograph", "Duly filled application form"],
    procedure: ["Submit application to the Deputy Commissioner concerned", "Application scrutiny and approval", "CRO / Police Verification", "Applicant appears for biometric verification and photograph at the concerned Arms Section", "Deposit government fee through prescribed National Bank of Pakistan challan", "Licence issuance after verification, biometric, photograph, fee payment and all prescribed formalities"],
    fees: ["Government fee: Rs. 5,000/- through prescribed National Bank of Pakistan challan."],
    processing: "Processing information will be updated.",
    where: "Arms Branch, Deputy Commissioner Office, District Central."
  },
  "revenue-certificate": {
    title: "Revenue Certificate",
    file: "revenue-certificate.html",
    icon: "bi-file-earmark-ruled",
    category: "Revenue Services",
    department: "Revenue Branch",
    source: "content/DC OFFICE CONTENT.docx; content/Departments and Mukhtiar kar.docx",
    description: "Revenue Certificate guidance through the Revenue Branch.",
    eligibility: ["Eligibility information will be updated with verified official details."],
    documents: ["Applicants are advised to verify required supporting documents before visiting the facilitation counter."],
    procedure: ["Visit the facilitation counter", "Verify required supporting documents", "Submit application for branch scrutiny", "Department review and response"],
    fees: ["Official fee information will be updated."],
    processing: "Processing information will be updated.",
    where: "Revenue Branch, Deputy Commissioner Office, District Central."
  },
  "land-revenue": {
    title: "Land / Revenue Information",
    file: "land-revenue.html",
    icon: "bi-map",
    category: "Revenue Services",
    department: "Revenue Branch",
    source: "content/Functions and Powers of Deputy Commissioner.docx; content/Functions and Powers of Deputy Commissioner, ADC, AC, Mukhtiarkar.docx; content/Departments and Mukhtiar kar.docx",
    description: "Information related to land records, mutation, demarcation, revenue cases, government land and public revenue assistance.",
    eligibility: ["Eligibility information will be updated with verified official details."],
    documents: ["Official document requirements will be updated."],
    procedure: ["Submit land or revenue enquiry to the relevant revenue office", "Revenue staff review records and supporting documents", "Field report or verification where required", "Proceeding or response under delegated authority"],
    fees: ["Official fee information will be updated."],
    processing: "Processing information will be updated.",
    where: "Revenue Branch, Assistant Commissioners, Mukhtiarkars and field revenue staff as relevant."
  },
  "complaint-registration": {
    title: "Complaint Registration",
    file: "complaint-registration.html",
    icon: "bi-chat-left-text",
    category: "Citizen Support",
    department: "Complaint Cell / Control Room",
    source: "content/DC OFFICE CONTENT.docx; content/Departments and Mukhtiar kar.docx",
    description: "Citizens may submit complaints online or in person for review and follow-up through the relevant branch.",
    eligibility: ["Eligibility information will be updated with verified official details."],
    documents: ["Full name", "CNIC number", "Mobile number", "Email address", "Subject", "Complaint details"],
    procedure: ["Submit complaint online or at the Complaint Cell / Control Room", "Complaint is reviewed and assigned to the relevant branch", "Follow-up continues through the complaint facilitation channel"],
    fees: ["Official fee information will be updated."],
    processing: "Response Time: 48 Hours.",
    where: "Complaint Cell / Control Room, Deputy Commissioner Office, District Central."
  },
  "price-list": {
    title: "Price List",
    file: "price-list.html",
    icon: "bi-tags",
    category: "Public Awareness",
    department: "District Administration / Assistant Commissioners",
    source: "content/DC OFFICE CONTENT.docx; content/Functions and Powers of Deputy Commissioner.docx",
    description: "Official district price lists are issued for public awareness and market monitoring.",
    eligibility: ["Eligibility information will be updated with verified official details."],
    documents: ["Official information will be updated."],
    procedure: ["District price list is issued for public awareness", "Assistant Commissioners and Mukhtiarkars monitor markets", "Action may be taken against profiteering, hoarding and violations under applicable laws/rules"],
    fees: ["Official fee information will be updated."],
    processing: "Processing information will be updated.",
    where: "Citizen Services and Downloads sections for public reference."
  },
  downloads: {
    title: "Downloads / Forms",
    file: "downloads.html",
    icon: "bi-download",
    category: "Forms & Documents",
    department: "Deputy Commissioner Office",
    source: "content/DC OFFICE CONTENT.docx",
    description: "Access official forms, notifications, circulars, public documents and service-related downloads when available.",
    eligibility: ["Eligibility information will be updated with verified official details."],
    documents: ["Domicile & PRC Requirement List", "Circular", "Tender", "Notification", "Price List"],
    procedure: ["Select the required service category", "Download available official documents", "Use placeholder buttons where files have not yet been provided"],
    fees: ["Official fee information will be updated."],
    processing: "Processing information will be updated.",
    where: "Downloads section of the District Central Karachi portal."
  },
  "public-assistance": {
    title: "General Public Assistance",
    file: "public-assistance.html",
    icon: "bi-headset",
    category: "Citizen Support",
    department: "Deputy Commissioner Office",
    source: "content/DC OFFICE CONTENT.docx",
    description: "Public guidance for connecting with local authorities, departments, government schemes, social services, and complaint facilitation.",
    eligibility: ["Eligibility information will be updated with verified official details."],
    documents: ["Official information will be updated."],
    procedure: ["Review relevant service information", "Contact the relevant branch or facilitation counter", "Submit complete details for guidance or follow-up"],
    fees: ["Official fee information will be updated."],
    processing: "Processing information will be updated.",
    where: "Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi."
  }
};

const serviceOrder = Object.keys(servicePages);

function linkFor(key) {
  return servicePages[key].file;
}

function header(current) {
  return `
    <header class="site-header">
      <div class="top-gov-bar"><div class="container-fluid px-lg-5"><div class="d-flex flex-wrap align-items-center justify-content-between gap-2"><div class="d-flex flex-wrap align-items-center gap-3"><span><i class="bi bi-shield-check"></i> Government of Sindh</span><span class="d-none d-md-inline"><i class="bi bi-patch-check"></i> Official Government Website</span></div><div class="d-flex flex-wrap align-items-center gap-3"><span><i class="bi bi-clock"></i> Mon-Fri 9:00 AM - 5:00 PM</span><a href="tel:02100000000"><i class="bi bi-telephone"></i> Emergency Contact</a><button class="top-link" type="button">Urdu</button><button class="top-link" type="button" aria-label="Search"><i class="bi bi-search"></i></button></div></div></div></div>
      <div class="main-header"><div class="container-fluid px-lg-5"><div class="row align-items-center g-3"><div class="col-lg-4"><a class="brand-lockup" href="index.html" aria-label="District Central Karachi home"><span class="gov-logo"><i class="bi bi-bank2"></i></span><span><strong>District Central Karachi</strong><small>Government of Sindh</small></span></a></div><div class="col-lg-5"><form class="header-search" role="search"><i class="bi bi-search"></i><input type="search" placeholder="Search services, departments, notices..." aria-label="Search portal"><button type="submit">Search</button></form></div><div class="col-lg-3"><div class="header-actions"><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a><a class="complaint-btn" href="complaint-registration.html"><i class="bi bi-chat-square-text"></i> Complaint</a></div></div></div></div></div>
      <nav class="navbar navbar-expand-xl sticky-nav"><div class="container-fluid px-lg-5"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portalNav" aria-controls="portalNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="portalNav"><ul class="navbar-nav mx-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About District</a></li>
        <li class="nav-item"><a class="nav-link" href="deputy-commissioner.html">Deputy Commissioner</a></li>
        <li class="nav-item dropdown position-static"><a class="nav-link dropdown-toggle active" href="citizen-services.html" data-bs-toggle="dropdown">Citizen Services</a><div class="dropdown-menu mega-menu"><div class="mega-grid wide">${serviceOrder.map((key) => `<a href="${linkFor(key)}">${servicePages[key].title}</a>`).join("")}</div></div></li>
        <li class="nav-item"><a class="nav-link" href="branches.html">Branches</a></li>
        <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
        <li class="nav-item"><a class="nav-link" href="initiatives.html">Initiatives</a></li>
        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
      </ul></div></div></nav>
    </header>`;
}

function footer() {
  return `<footer class="site-footer" id="contact"><div class="container"><div class="row g-4"><div class="col-lg-4"><a class="brand-lockup footer-brand" href="index.html"><span class="gov-logo"><i class="bi bi-bank2"></i></span><span><strong>District Central Karachi</strong><small>Government of Sindh</small></span></a><p>Official district portal for public information, citizen services, administrative updates, and complaint facilitation.</p></div><div class="col-6 col-lg-2"><h3>Quick Links</h3><a href="about.html">About</a><a href="news.html">News</a><a href="initiatives.html">Initiatives</a><a href="downloads.html">Downloads</a></div><div class="col-6 col-lg-2"><h3>Branches</h3><a href="revenue.html">Revenue</a><a href="branches.html">Accounts</a><a href="branches.html">IT Cell</a><a href="branches.html">Complaint Cell</a></div><div class="col-6 col-lg-2"><h3>Services</h3><a href="domicile.html">Domicile</a><a href="prc.html">PRC</a><a href="noc.html">NOC</a><a href="price-list.html">Price List</a></div><div class="col-6 col-lg-2"><h3>Important</h3><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="complaint-registration.html">Complaint</a><a href="#contact">Contact</a></div></div><div class="footer-bottom"><span>Copyright 2026 District Central Karachi. All rights reserved.</span><span>Official Government Website</span></div></div></footer><button class="back-to-top" id="backToTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>`;
}

function list(items) {
  return `<div class="checklist">${items.map((item) => `<div class="mini-panel"><i class="bi bi-check-circle"></i><strong>${item}</strong></div>`).join("")}</div>`;
}

function related(current) {
  return serviceOrder.filter((key) => key !== current).slice(0, 4).map((key) => {
    const service = servicePages[key];
    return `<div class="col-md-6 col-lg-3"><article class="dept-card h-100"><i class="bi ${service.icon}"></i><h3>${service.title}</h3><p>${service.category}</p><a class="btn btn-primary-gradient" href="${service.file}">View Details</a></article></div>`;
  }).join("");
}

function servicePage(key) {
  const service = servicePages[key];
  document.title = `${service.title} | District Central Karachi`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", `${service.title} service information for District Central Karachi.`);
  return `${header(key)}<main>
    <div class="breadcrumb-band"><div class="container"><nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="index.html">Home</a></li><li class="breadcrumb-item"><a href="citizen-services.html">Citizen Services</a></li><li class="breadcrumb-item active" aria-current="page">${service.title}</li></ol></nav></div></div>
    <section class="hero-section page-hero"><div class="hero-bg placeholder-image"><i class="bi ${service.icon}"></i></div><div class="hero-overlay"></div><div class="container-fluid px-lg-5 hero-content"><div class="row align-items-center min-vh-hero"><div class="col-xl-7 col-lg-8" data-aos="fade-up"><span class="hero-badge"><i class="bi bi-stars"></i> ${service.category}</span><h1>${service.title}</h1><p>${service.description}</p><div class="hero-buttons"><a class="btn btn-primary-gradient" href="#requirements">View Requirements</a><a class="btn btn-outline-light" href="#contact-card">Contact Department</a></div></div></div></div></section>
    <!-- Source: ${service.source} -->
    <section class="section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-5"><div class="dc-portrait placeholder-image image-zoom"><i class="bi ${service.icon}"></i><span class="visually-hidden">${service.title}</span></div></div><div class="col-lg-7"><span class="section-kicker">Service Overview</span><h2>${service.title}</h2><p>${service.description}</p><div class="row g-3"><div class="col-md-6"><div class="mini-panel"><i class="bi bi-building"></i><strong>Department</strong><span>${service.department}</span></div></div><div class="col-md-6"><div class="mini-panel"><i class="bi bi-grid"></i><strong>Category</strong><span>${service.category}</span></div></div></div></div></div></div></section>
    <section class="section muted-section"><div class="container"><div class="section-heading"><span class="section-kicker">Eligibility</span><h2>Who Can Apply</h2></div>${list(service.eligibility)}</div></section>
    <section class="section" id="requirements"><div class="container"><div class="section-heading"><span class="section-kicker">Documents</span><h2>Required Documents</h2></div>${list(service.documents)}</div></section>
    <section class="section muted-section"><div class="container"><div class="section-heading"><span class="section-kicker">Procedure</span><h2>Application Procedure</h2></div><div class="timeline-list">${service.procedure.map((step, index) => `<article class="timeline-card"><span class="section-kicker">Step ${String(index + 1).padStart(2, "0")}</span><h3>${step}</h3></article>`).join("")}</div></div></section>
    <section class="section"><div class="container"><div class="row g-4"><div class="col-lg-4"><article class="dept-card h-100"><i class="bi bi-cash-stack"></i><h3>Fees / Charges</h3>${service.fees.map((fee) => `<p>${fee}</p>`).join("")}</article></div><div class="col-lg-4"><article class="dept-card h-100"><i class="bi bi-clock-history"></i><h3>Processing Information</h3><p>${service.processing}</p></article></div><div class="col-lg-4"><article class="dept-card h-100"><i class="bi bi-geo-alt"></i><h3>Where to Apply</h3><p>${service.where}</p></article></div></div></div></section>
    <section class="section muted-section" id="downloads"><div class="container"><div class="section-heading"><span class="section-kicker">Downloads</span><h2>Download Forms</h2></div><div class="row g-3"><div class="col-md-4"><button class="btn btn-outline-primary w-100" type="button" disabled>Application Form - will be updated</button></div><div class="col-md-4"><button class="btn btn-outline-primary w-100" type="button" disabled>Guidelines - will be updated</button></div><div class="col-md-4"><button class="btn btn-outline-primary w-100" type="button" disabled>Notification - will be updated</button></div></div></div></section>
    <section class="section"><div class="container"><div class="section-heading"><span class="section-kicker">Related</span><h2>Related Services</h2></div><div class="row g-4">${related(key)}</div></div></section>
    <section class="section muted-section"><div class="container"><div class="section-heading"><span class="section-kicker">FAQ</span><h2>Frequently Asked Questions</h2></div><div class="accordion help-accordion" id="serviceFaq"><div class="accordion-item"><h4 class="accordion-header" id="faqOneH"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne" aria-expanded="true" aria-controls="faqOne">Which department handles this service?</button></h4><div id="faqOne" class="accordion-collapse collapse show" aria-labelledby="faqOneH" data-bs-parent="#serviceFaq"><div class="accordion-body">${service.department}</div></div></div><div class="accordion-item"><h4 class="accordion-header" id="faqTwoH"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">Are official forms available online?</button></h4><div id="faqTwo" class="accordion-collapse collapse" aria-labelledby="faqTwoH" data-bs-parent="#serviceFaq"><div class="accordion-body">Official downloadable forms will be updated when files are provided.</div></div></div></div></div></section>
    <section class="complaint-cta"><div class="container"><div class="cta-panel"><div><span class="section-kicker">Need Help?</span><h2>Can't find the information you need?</h2><p>Use the district facilitation channels for guidance or complaint follow-up.</p></div><div class="cta-actions"><a class="btn btn-primary-gradient" href="complaint-registration.html">Submit Complaint</a><a class="btn btn-outline-primary" href="#contact-card">Contact District Office</a><a class="btn btn-outline-primary" href="citizen-services.html">Back to Citizen Services</a></div></div></div></section>
    <section class="section pt-0" id="contact-card"><div class="container"><article class="contact-card"><span class="section-kicker">Office Details</span><h2>District Central Contact Card</h2><p><strong>Address:</strong> Deputy Commissioner Office, Sector 15-A/1, Buffer Zone, Karachi, 74600</p><p><strong>Public Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p></article></div></section>
  </main>${footer()}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("servicePage");
  if (!root) return;
  root.innerHTML = servicePage(root.dataset.service);
  if (window.AOS) AOS.refreshHard();
});
