# AIPrepView - AI-Powered Interview Preparation Platform

<img width="1200" alt="Screenshot 2025-04-05 at 2 47 57 AM" src="https://github.com/user-attachments/assets/8346ebb7-d962-457b-94a1-24d13487ba6d" />


## Project Overview
AIPrepView is an innovative interview preparation platform that uses AI to simulate real job interviews. It combines voice recognition, conversational AI, and performance analytics to help candidates practice and improve their interview skills in a realistic environment.

## Key Features
- 🎙️ **Real-time Voice Interviewing** - Practice with an AI interviewer that speaks and listens
- 📊 **Detailed Feedback Reports** - Get scores and insights across 5 key interview categories
- 🔥 **Firebase Authentication** - Secure user accounts with email/password
- 🛠️ **Interview Customization** - Choose role, tech stack, and question type
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🌓 **Dark/Light Mode** - Built-in theme support

## Technologies Used

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend:** Firebase (Auth + Firestore)
- **Voice AI API:** Vapi SDK
- **Authentication:** Firebase Auth
- **Styling:** Tailwind CSS + Shadcn UI
- **Icons & UI:** Lucide, Sonner (toast alerts)

## AI/Voice Interview Logic
The interview flow is powered by VAPI.ai with the following architecture:

1. **Voice Input**: User speaks responses which are transcribed in real-time
2. **AI Processing**: 
   - Questions are generated using Google Gemini
   - Conversation context is maintained throughout the interview
3. **Feedback Generation**: 
   - Transcript is analyzed across 5 categories
   - Scores and improvement suggestions are generated
4. **Voice Output**: 
   - AI interviewer responds with natural speech (11Labs voice)
   - Follow-up questions adapt to user responses

```typescript
// Sample interview assistant configuration
const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [/* system prompts */]
  }
};
```

## Installation & Setup

1. **Clone the repository:**
   ```git
   git clone https://github.com/yourusername/AIPrepView.git
   cd AIPrepView
   ```
2. **Install dependencies:**
   ```git
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. **Set up environment variables:**
   ```git
   cp .env.example .env.local
   ```
   Fill in your Firebase and VAPI.ai credentials
   
4. **Run the development server:**
   ```git
   npm run dev
   ```

## Configuration
Key configuration files:

- ```firebase/admin.ts``` - Firebase Admin SDK setup

- ```firebase/client.ts``` - Firebase client config

- ```lib/vapi.sdk.ts``` - VAPI.ai initialization

- ```app/globals.css``` - Tailwind and theme configuration

## Usage Guide
### Starting an Interview
1. Sign up or log in
2. Navigate to "Start An Interview"
3. Select:
    - Job role (e.g. Frontend Developer)
    - Experience level
    - Tech stack
    - Question type (Technical/Behavioral/Mixed)
4. Click "Call" to begin the voice interview

### Interview Interface
- 🎤 Real-time transcription appears during the call
- 📝 Questions appear on screen as they're asked
- ⏱️ Interview duration typically 15-30 minutes
- 🛑 Click "End" to conclude the interview

### Viewing Feedback
After completing an interview:
1. Automatic feedback generation (takes ~30 seconds)
2. View your overall score (0-100)
3. See breakdown across 5 categories
4. Review strengths and areas for improvement

## Screenshots
1. **Dashboard: <i>Interview dashboard showing recent practice sessions</i>**

 <img width="540" alt="Screenshot 2025-04-05 at 2 48 12 AM" src="https://github.com/user-attachments/assets/96171830-1176-49c0-ba20-00e6a83bc569" /><br/>

2. **Feedback:<i>Detailed feedback report with category scores</i>**

<img width="540" alt="Screenshot 2025-04-05 at 2 51 51 AM" src="https://github.com/user-attachments/assets/dc49861e-a4b1-445a-a854-57ad8f510c01" /><br/>

3. **Interview:<i>Live interview interface with AI interviewer</i>**

<img width="540" alt="Screenshot 2025-04-05 at 2 53 20 AM" src="https://github.com/user-attachments/assets/84e64094-b488-400e-a91a-93b69c8a947a" />


## API Integration
The project uses these API endpoints:

1. **Interview Generation:**

   ```typescript
   POST /api/vapi/generate
   {
      "type": "technical",
      "role": "Frontend Developer",
      "level": "Mid-level",
      "techstack": "React,TypeScript",
      "amount": 10,
      "userid": "abc123"
    }
   ```
2. **Feedback Generation:**

   ```typescript
   POST /api/vapi/feedback
    {
      "interviewId": "xyz456",
      "userId": "abc123",
      "transcript": [...]
    }
   ```

## Deployment
To deploy to Vercel:

1. **Install Vercel CLI:**
   
   ```bash
   npm install -g vercel
   ```
3. **Deploy:**
   
   ```bash
   vercel
   ```
4. Set environment variables in Vercel dashboard

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository

2. Create a feature branch ```(git checkout -b feature/AmazingFeature)```

3. Commit your changes ```(git commit -m 'Add some AmazingFeature')```

4. Push to the branch ```(git push origin feature/AmazingFeature)```

5. Open a Pull Request



## Next Steps & Future Improvements

We're constantly working to enhance AIPrepView. Here's what's coming next:

- 🚀 **Multi-language Support** - Interviews in Spanish, French, and more
- 📈 **Performance Tracking** - Visualize your progress over time
- 🤖 **More AI Interviewers** - Different personalities and specialties
- 🎥 **Video Interview Mode** - Practice with video responses


---

**Happy interviewing!** 🎤✨

> *"Practice like you've never won. Perform like you've never lost."*  
> – Anonymous



