# Problem Solving Skills - Question 1
Solution for question 1 of the problem solving skills assessment.

# CIC Mobile App - Question 2
A React Native mobile application built with Expo Router and Bun package manager.

## Prerequisites

- [Bun package manager](https://bun.sh/) - Faster Alternative to Node.js with TypeScript support out of the box
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [A Supabase Account](https://supabase.com/)
- iOS Simulator or Android Emulator

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

### Directory

- `app/`: Contains all the application screens and navigation logic using Expo Router
  - `(auth)/`: Authentication related screens
  - `(mini-apps)/`: Insurance product related screens
  - `(tabs)/`: Main tab navigation screens

- `components/`: Reusable React components
  - `headers/`: Header components
  - `ui/`: UI components like icons and tab bar elements

- `constants/`: Application-wide constants and configurations
  - `config`: Mini App configuration

- `db/`: Prisma ORM configuration for supabase

- `assets/`: Static assets including fonts and images

- `lib/`: Core application logic
  - `schema/`: Data schemas for form validation
  - `services/`: Services for handling API requests and data fetching
  - `store/`: State management using Zustand
  - `types/`: TypeScript type definitions
    - `index`: General system wide types
    - `models`: Type definitions for data models
    - `state`: Type definitions for API requests made within zustand state
  - `utils/`: Utility functions
    - `index`: General utility functions
    - `storage`: Storage utility functions
    - `supabase`: Supabase client functions

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