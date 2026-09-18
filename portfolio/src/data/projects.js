/* ═══════════════════════════════════════════════════════════════
   
   title    : project name                              (required)
   summary  : one short paragraph describing it          (required)
   tags     : list of keywords in "quotes"               (optional)
   meta     : list of short facts shown under the tags   (optional)
   readMore : link to the full description, e.g.
                "https://..."                            (optional)
   links    : list of buttons. Each link is:
                { label: "Button text", url: "https://..." }
              Add primary: true to make one button filled/black.
   ─────────────────────────────────────────────────────────────── */

export const projects = [
  {
    title: "SurveillanceYOLO",
    summary:
      "A computer-vision system that detects knives in CCTV and surveillance-style footage using object detection. Built to handle realistic security-camera conditions — small, blurry, partially blocked objects, poor lighting and low video quality — with a focus on practical detection in raw real-world video rather than benchmark accuracy alone.",
    tags: ["Python", "YOLO", "Computer Vision", "OpenCV", "Deep Learning"],
    meta: ["Python", "Object Detection", "Real-time Inference"],
    readMore: "https://github.com/DanielAmadeus29/SurveillanveYOLO",
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/DanielAmadeus29/SurveillanveYOLO",
        primary: true,
      },
      {
        label: "Result ↗",
        url: "https://drive.google.com/drive/folders/1jEE8RKCaa0GLQS86eDcsVrGpjN4i9Kh5?usp=sharing",
      },
    ],
  },

  {
    title: "AI Photography Tools (CrAItor)",
    summary:
      "Led development of an AI-powered system that analyses images, improves tagging accuracy, evaluates aesthetic quality and generates captions to enhance content discovery for Instagram photographers. Improved classification accuracy by ~8% and reduced aesthetic prediction error (MAE) by ~20–25% through fine-tuning and optimization.",
    tags: ["Python", "TensorFlow", "PyTorch", "Flask", "Computer Vision", "NLP"],
    meta: ["Python", "MobileNetV2 · EfficientNet-B0 · BLIP", "REST API Deployment"],
    readMore: "",
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/DanielAmadeus29/CrAItor-Project",
        primary: true,
      },
    ],
  },
];
