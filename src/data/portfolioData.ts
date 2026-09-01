import { ExperienceItem, EducationItem, ExpertiseItem, ContactInfo } from '../types';

export const personalData = {
  name: "Minhajul Islam Tuhin",
  headline: "Microbiologist & Environmental Scientist",
  shortBio: "Microbiologist with pharmaceutical quality-control experience, currently researching Environmental and Resource Management in Germany.",
  extendedBio: "Combining industrial microbiological quality assurance with environmental resource analytics. Experienced in sterile pharmaceutical operations, cleanroom environmental monitoring, and biosafety protocols under strict GMP/GLP compliance.",
  status: "Postgraduate Researcher · BTU Cottbus-Senftenberg",
  location: "Berlin / Cottbus, Germany",
};

export const expertiseList: ExpertiseItem[] = [
  {
    id: "microbiology",
    title: "Microbiology",
    code: "MB-01",
    description: "Sterility testing, bioburden assessment, microbial identification, and bacterial culture methodologies."
  },
  {
    id: "pharma-qc",
    title: "Pharmaceutical Quality Control",
    code: "QC-02",
    description: "Assay validation, media fill protocols, endotoxin testing, and sterile pharmaceutical release assurance."
  },
  {
    id: "env-monitoring",
    title: "Environmental Monitoring",
    code: "EM-03",
    description: "Cleanroom air & surface sampling, viable/non-viable particulate monitoring, water system trending."
  },
  {
    id: "gmp-compliance",
    title: "GMP / GLP / GDP",
    code: "QA-04",
    description: "Good Manufacturing, Laboratory & Documentation Practices with rigorous data integrity audits."
  },
  {
    id: "lab-biosafety",
    title: "Laboratory & Biosafety",
    code: "BS-05",
    description: "BSL-2 biosafety containment, aseptic techniques, molecular RT-PCR assays, and autoclave validation."
  },
  {
    id: "sustainability",
    title: "Environmental Sustainability",
    code: "ES-06",
    description: "Resource lifecycle analysis, environmental quality monitoring, and sustainable resource management."
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: "incepta",
    role: "Quality Control Officer, Microbiology",
    company: "Incepta Pharmaceuticals Ltd.",
    location: "Dhaka, Bangladesh",
    period: "2022 — 2023",
    summary: "Conducted sterility testing, microbial limit tests, and water analysis for sterile parenteral products. Monitored cleanroom classifications (Grade A to D) and ensured strict adherence to cGMP and WHO regulations.",
    tags: ["Sterility Testing", "Cleanroom Monitoring", "cGMP", "Purified Water Systems"]
  },
  {
    id: "drug-intl",
    role: "Quality Control Officer, Microbiology",
    company: "Drug International Ltd.",
    location: "Dhaka, Bangladesh",
    period: "2021 — 2022",
    summary: "Performed microbiological assays of raw materials and finished pharmaceutical formulations. Handled active air sampling, settle plates, and media preparation in compliance with Good Laboratory Practice.",
    tags: ["Microbial Limit Tests", "Environmental Sampling", "GLP", "Media Preparation"]
  }
];

export const educationList: EducationItem[] = [
  {
    id: "btu-msc",
    degree: "M.Sc. Environmental & Resource Management",
    institution: "Brandenburg University of Technology (BTU) Cottbus-Senftenberg",
    location: "Cottbus, Germany",
    period: "2023 — Present",
    focus: "Environmental monitoring systems, sustainable resource ecosystems, and industrial ecological compliance."
  },
  {
    id: "nstu-msc",
    degree: "M.Sc. in Microbiology",
    institution: "Noakhali Science and Technology University",
    location: "Noakhali, Bangladesh",
    period: "Graduated with Distinction",
    thesis: "Research focused on SARS-CoV-2 (COVID-19) laboratory RT-PCR molecular surveillance, biosafety protocols, and diagnostic data evaluation."
  },
  {
    id: "nstu-bsc",
    degree: "B.Sc. in Microbiology",
    institution: "Noakhali Science and Technology University",
    location: "Noakhali, Bangladesh",
    period: "4-Year Honours Degree",
    focus: "Comprehensive training in fundamental bacteriology, virology, immunology, microbial genetics, and analytical biochemistry."
  }
];

export const contactInfo: ContactInfo = {
  name: "Minhajul Islam Tuhin",
  email: "minhajul.tuhin@gmail.com",
  phone: "+49 (0) 176 8729 4153",
  location: "Berlin / Cottbus, Germany",
  coordinates: "52.5200° N, 13.4050° E",
  linkedinUrl: "https://linkedin.com/in/minhajul-islam-tuhin",
};
