# Problem Solving Skills - Question 1
Solution for question 1 of the problem solving skills assessment.

# CIC Mobile App - Question 2
A React Native mobile application built with Expo Router and Bun package manager.

## Prerequisites

- [Bun](https://bun.sh/) package manager
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- iOS Simulator or Android Emulator (optional for mobile development)

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Start the development server:
```bash
bun start
```

## Project Structure

### Root Directories

- `app/`: Contains all the application screens and navigation logic using Expo Router
  - `(auth)/`: Authentication related screens
  - `(mini-apps)/`: Insurance product related screens
  - `(tabs)/`: Main tab navigation screens

- `assets/`: Static assets including fonts and images

- `components/`: Reusable React components
  - `headers/`: Header components
  - `ui/`: UI components like icons and tab bar elements

- `constants/`: Application-wide constants and configurations

- `lib/`: Core application logic
  - `config/`: Application configuration
  - `schema/`: Data schemas
  - `services/`: API services
  - `store/`: State management using Zustand
  - `types/`: TypeScript type definitions
  - `utils/`: Utility functions

### Key Features

- Built with React Native and Expo
- Type-safe development with TypeScript
- File-based routing with Expo Router
- Styling with NativeWind (TailwindCSS)
- State management with Zustand
- Form handling with React Hook Form
- API integration with Axios

## Development Tools

- `bun lint`: Run ESLint for code linting
- `bun reset-project`: Reset the project (useful for clearing caches)