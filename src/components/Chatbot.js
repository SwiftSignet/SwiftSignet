import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm the SwiftSignet Bot. How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [unknownAttempts, setUnknownAttempts] = useState(0);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const response = getBotResponse(input);
    setMessages([...messages, { text: input, sender: "user" }, { text: response, sender: "bot" }]);
    setInput("");

    if (response.includes("Connecting you to an agent")) {
      sendAgentAlert(); 
    }

    if (response.includes("I'm not sure")) {
      setUnknownAttempts(unknownAttempts + 1);
    } else {
      setUnknownAttempts(0);
    }
  };

  const getBotResponse = (message) => {
    message = message.toLowerCase();

    // 📝 Document Signing & Workflow
    if (message.includes("how does document signing work") || message.includes("sign document")) 
      return "SwiftSignet allows you to upload a document, add signature fields, invite signers, and track the signing process in real-time.";
    if (message.includes("can i sign documents on my phone") || message.includes("mobile signing")) 
      return "Yes! SwiftSignet is fully responsive and works on desktops, tablets, and mobile devices.";
    if (message.includes("how do i upload a document")) 
      return "Click on 'Upload Document' in your dashboard, select your file, and follow the instructions to add signers.";
    if (message.includes("how do i track signatures")) 
      return "Your SwiftSignet dashboard shows real-time status updates for pending, completed, and rejected signatures.";

    // 🔐 Security & Compliance
    if (message.includes("is swiftsignet secure") || message.includes("security") || message.includes("data protection")) 
      return "Yes! SwiftSignet ensures security with **blockchain verification, biometric authentication, end-to-end encryption, and compliance with eSignature laws like ESIGN and UETA.**";
    if (message.includes("does swiftsignet comply with legal standards")) 
      return "Yes, SwiftSignet complies with **ESIGN, UETA, and GDPR** to ensure legally binding signatures worldwide.";

    // 💰 Pricing & Subscription Plans
    if (message.includes("pricing") || message.includes("cost")) 
      return "SwiftSignet offers: \n- **Monthly Plan**: $14.99/month \n- **Pay-Per-Sign**: $2.99 per document \n- **Annual Plan**: $149.99/year (Save 16%)";
    if (message.includes("is there a free trial")) 
      return "Yes! We offer a **7-day free trial** on all subscription plans.";
    if (message.includes("how do i cancel my subscription")) 
      return "You can cancel your subscription anytime from the **Billing Section** in your dashboard.";

    // 👤 User Account Management
    if (message.includes("how do i login")) 
      return "To log in, click on 'Log In' at the top and enter your **email and password**.";
    if (message.includes("how do i signup") || message.includes("register")) 
      return "To sign up, click on 'Sign Up' and complete the registration form.";
    if (message.includes("how do i reset my password") || message.includes("forgot password")) 
      return "Click on 'Forgot Password' on the login page and follow the reset instructions.";

    // 🚀 Features & Benefits
    if (message.includes("what are the features") || message.includes("why use swiftsignet")) 
      return "SwiftSignet offers: \n✅ **AI-powered verification** \n✅ **Biometric authentication (Face ID & Fingerprint)** \n✅ **Blockchain security** \n✅ **Smart reminders & automation** \n✅ **Multi-signer workflows** \n✅ **Payment collection after signing** \n✅ **AI-generated contracts**";
    
    // ⚙️ Technical Issues & Troubleshooting
    if (message.includes("i can't log in") || message.includes("login issue")) 
      return "Make sure you're using the correct email and password. If you've forgotten your password, use the 'Forgot Password' option.";
    if (message.includes("my document is not uploading")) 
      return "Ensure your file is in **PDF, DOCX, or PNG format** and does not exceed the size limit of **10MB**.";
    if (message.includes("why is my signature not appearing")) 
      return "Ensure you’ve **enabled signature placement** when sending the document for signing.";

    // 📞 Support & Connecting to an Agent
    if (message.includes("connect me to an agent") || message.includes("i need help") || unknownAttempts >= 1) {
      sendAgentAlert();
      return "I couldn't find an answer for that. Connecting you to an agent now...";
    }

    return "I'm not sure about that. Could you rephrase?";
  };

  // 🔔 Notify Admin via SMS
  const sendAgentAlert = () => {
    fetch("https://yourbackend.com/send-alert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "A SwiftSignet user needs assistance!" })
    });
  };

  return (
    <div className="chatbot">
      <h3>💬 Chat with SwiftSignet Bot</h3>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about SwiftSignet..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
