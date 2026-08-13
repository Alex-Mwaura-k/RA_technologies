export const mockCourse = {
  id: 1,
  title: "Full-Stack Web Engineering & Safaricom Daraja API",
  slug: "fullstack-daraja-api",
  modules: [
    {
      id: 101,
      title: "Module 1: Free Integration Guides (Public)",
      lessons: [
        {
          id: 1,
          title: "Safaricom Daraja API: M-Pesa STK Push Overview",
          slug: "daraja-stk-push-overview",
          lesson_type: "VIDEO",
          access_tier: "PUBLIC",
          content_url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with real embed or Mux link
          duration: "12:45",
        },
        {
          id: 2,
          title: "Setting Up Safaricom Developer Sandbox Keys",
          slug: "safaricom-sandbox-keys",
          lesson_type: "TEXT",
          access_tier: "PUBLIC",
          text_content: `
### Setting Up Your Daraja API Credentials

1. Go to the **Safaricom Developer Portal** (developer.safaricom.co.ke).
2. Create an account and click **My Apps**.
3. Create a new Sandbox app and enable **LIPA NA M-PESA ONLINE**.
4. Copy your **Consumer Key** and **Consumer Secret**.
          `,
          duration: "5 min read",
        },
      ],
    },
    {
      id: 102,
      title: "Module 2: Advanced Backend Architecture (Cohort)",
      lessons: [
        {
          id: 3,
          title: "Building Django Webhook Receivers for M-Pesa Callbacks",
          slug: "django-daraja-webhooks",
          lesson_type: "VIDEO",
          access_tier: "PREMIUM",
          content_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "24:10",
        },
        {
          id: 4,
          title: "Module 2 Assessment Quiz",
          slug: "module-2-quiz",
          lesson_type: "QUIZ",
          access_tier: "PREMIUM",
          duration: "10 Questions",
        },
      ],
    },
  ],
};