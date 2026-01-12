# Random Number Generator Widget

A Figma widget that generates random numbers between user-specified minimum and maximum values.

## Features

- Input fields for minimum and maximum values
- Generate button to create random numbers
- Displays the generated number directly in the widget
- Works in both Figma and FigJam

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm
- Figma Desktop App

### Installation

1. Navigate to the project directory:

   ```bash
   cd ~/Desktop/Code/random-number-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the widget:

   ```bash
   npm run build
   ```

   For development with auto-rebuild on changes:

   ```bash
   npm run watch
   ```

### Loading in Figma

1. Open the Figma Desktop App
2. Go to **Menu → Widgets → Development → Import widget from manifest**
3. Navigate to `~/Desktop/Code/random-number-generator` and select `manifest.json`
4. The widget will now appear in your widgets panel

## Usage

1. Insert the widget into your Figma or FigJam file
2. Enter a minimum value in the first input field
3. Enter a maximum value in the second input field
4. Click the **Generate** button
5. The random number will be displayed in the widget

## Project Structure

```
random-number-generator/
├── manifest.json          # Widget manifest for Figma
├── package.json           # Dependencies and build scripts
├── tsconfig.json          # TypeScript configuration
├── widget-src/
│   └── code.tsx           # Main widget source code
├── dist/
│   └── code.js            # Compiled widget (after build)
└── README.md
```

## Development

The widget uses:
- **Figma Widget API** for UI components
- **TypeScript** for type safety
- **esbuild** for fast bundling

### Key Components

- `useSyncedState`: Manages widget state (min, max, result)
- `AutoLayout`: Flexible layout container
- `Input`: Text input for user values
- `Text`: Typography component

## License

MIT

