# Senpai Career - Frontend

A modern, beautiful frontend for Senpai Career - a membership-based platform for international students in Japan.

## Features

- 🌐 **Bilingual Support (EN/JP)** - Animated language toggle with smooth transitions
- 🎨 **Modern UI Design** - macOS-style rounded corners, off-white backgrounds, gradient accents
- ✨ **Smooth Animations** - Bouncy animations powered by Framer Motion
- 📱 **Responsive Design** - Works beautifully on all devices
- 🎯 **Custom Scrollbar** - Gradient-themed scrollbar matching brand colors
- 🔐 **Role-based Access** - Support for Students, OB/OG, Companies, and Admins

## Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Bootstrap 5** - Additional UI components
- **Framer Motion** - Animation library
- **React Router** - Navigation
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.tsx
│   └── LanguageToggle.tsx
├── contexts/         # React contexts
│   └── LanguageContext.tsx
├── pages/           # Page components
│   ├── LandingPage.tsx
│   ├── LoginPage.tsx
│   ├── SignupPage.tsx
│   ├── Dashboard.tsx
│   ├── OBOGList.tsx
│   ├── OBOGDetail.tsx
│   ├── Messages.tsx
│   ├── Notifications.tsx
│   ├── CompanyDashboard.tsx
│   └── AdminPanel.tsx
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Design System

### Colors

- **Accent Gradient**: Light Red (#FFB6C1) to Light Blue (#ADD8E6)
- **Background**: Off-white (#FAFAF9)
- **Cards**: White with subtle shadows

### Animations

- Bouncy spring animations for interactions
- Smooth fade-in/slide-up for page transitions
- Hover effects with scale transforms

### Typography

- System font stack for native feel
- Gradient text for headings
- Clear hierarchy with size and weight

## Key Features Implemented

### Landing Page
- Hero section with catchphrase
- What is Senpai Career section
- Mission statement
- Statistics display
- Call-to-action sections

### Authentication
- Login page
- Signup pages for different user types (Student/OB/OG/Company)
- Terms and rules acceptance

### Student Dashboard
- Quick action cards
- Recent activity feed
- Navigation to key features

### OB/OG Features
- List view with search and filters
- Detail page with full profile
- Message sending capability

### Messaging System
- Thread list with unread indicators
- Chat interface with message bubbles
- Real-time message input

### Notifications
- Bell icon with badge
- Notification list with categories
- Click-through to details

### Company Dashboard
- Company page editor
- Student search and filters
- Scout messaging (credit-based)
- Inquiry form

### Admin Panel
- Report management
- User ban/strike system
- Transaction logs

## Customization

### Changing Colors

Edit `tailwind.config.js` to modify the accent colors:

```js
colors: {
  accent: {
    from: '#FFB6C1', // light red
    to: '#ADD8E6',   // light blue
  },
}
```

### Adding Translations

Edit `src/contexts/LanguageContext.tsx` to add new translation keys.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Contact

For questions or support, contact: info@senpaicareer.com
