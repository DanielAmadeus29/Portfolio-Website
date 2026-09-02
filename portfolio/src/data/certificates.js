/* ═══════════════════════════════════════════════════════════════
   FIELDS
   ------
   title  : name of the certificate                       (required)
   issuer : who issued it — shown under the title          (optional)
   date   : e.g. "2024"                                    (optional)
   image  : path to the image, starting with
            "/certificates/"  (the file inside public/)    (required)
   url    : link to verify / view online                   (optional)
   ─────────────────────────────────────────────────────────────── */

export const certificates = [
  {
    title: "Unity Game Development",
    issuer: "Unity Learn",
    date: "April 2026",
    image: "/certificates/UnityGameDevelopment.png",
    url: "https://www.credly.com/badges/a82a9b73-00b2-4f44-8068-13359d9139fd/linked_in_profile",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI Coursera",
    date: "March 2026",
    image: "/certificates/DeepLearningAI.jpeg",
    url: "https://www.coursera.org/account/accomplishments/specialization/AD6DFQ3PA8HI",
  },
  {
    title: "IBM AI Developer",
    issuer: "IBM Coursera",
    date: "February 2026",
    image: "/certificates/IBMAIDeveloper.png",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/N8MGNT0OQUDJ",
  },
];
