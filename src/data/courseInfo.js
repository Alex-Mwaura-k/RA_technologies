// src/data/courseInfo.js

export const courseInfo = {
  title: "Safaricom Daraja API Masterclass",
  modules: [
    {
      id: "mod_1",
      title: "Getting Started with Daraja",
      lessons: [
        {
          id: 1, // Note: ID 1 is set as completed by default in your component state
          title: "Introduction to M-PESA APIs",
          lesson_type: "VIDEO",
          content_url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
          duration: "12:45",
          access_tier: "PUBLIC",
        },
        {
          id: 2,
          title: "Setting Up Your Sandbox Environment",
          lesson_type: "TEXT",
          text_content: `To begin integrating with the Daraja API, you first need to set up a developer account on the Safaricom Developer Portal.

Step 1: Create an Account
Navigate to developer.safaricom.co.ke and sign up. Ensure you verify your email address.

Step 2: Create a New App
Once logged in, go to the "My Apps" section and click "Add a new App". 
Give your app a recognizable name and select the products you want to use (e.g., Lipa na M-Pesa Sandbox).

Step 3: Get Your Credentials
After creating the app, click on it to reveal your Consumer Key and Consumer Secret. You will need these to generate your OAuth access tokens in the next lesson.

Remember: Never share your Consumer Secret publicly or commit it to version control!`,
          duration: "5 mins read",
          access_tier: "PUBLIC",
        },
      ],
    },
    {
      id: "mod_2",
      title: "Authentication & Core Endpoints",
      lessons: [
        {
          id: 3,
          title: "Generating OAuth Access Tokens",
          lesson_type: "VIDEO",
          content_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "18:20",
          access_tier: "COHORT",
        },
        {
          id: 4,
          title: "Understanding Callbacks & Validation",
          lesson_type: "QUIZ",
          duration: "10 mins",
          access_tier: "COHORT",
        },
      ],
    },
    {
      id: "mod_3",
      title: "Lipa na M-PESA Online (STK Push)",
      lessons: [
        {
          id: 5,
          title: "Formatting the Payload",
          lesson_type: "TEXT",
          text_content: `The STK Push (Lipa na M-PESA Online) API is the most popular Daraja endpoint. It triggers a prompt on the customer's phone asking them to enter their PIN.

Required Payload Parameters:
- BusinessShortCode: Your Paybill or Till Number (Sandbox: 174379)
- Password: A base64 encoded string of Shortcode + Passkey + Timestamp
- Timestamp: Format YYYYMMDDHHmmss
- TransactionType: 'CustomerPayBillOnline' or 'CustomerBuyGoodsOnline'
- Amount: The amount to be deducted (Sandbox: Use 1)
- PartyA: The customer's phone number (Format: 2547XXXXXXXX)
- PartyB: Your Paybill/Till number
- PhoneNumber: The customer's phone number
- CallBackURL: A valid, secure (HTTPS) URL where Daraja will send the transaction results.
- AccountReference: E.g., Invoice number
- TransactionDesc: E.g., Payment for order

In the next video, we will write the code to construct this payload dynamically.`,
          duration: "8 mins read",
          access_tier: "COHORT",
        },
        {
          id: 6,
          title: "Handling the CallBack Response",
          lesson_type: "VIDEO",
          content_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "22:15",
          access_tier: "COHORT",
        },
      ],
    }
  ],
};