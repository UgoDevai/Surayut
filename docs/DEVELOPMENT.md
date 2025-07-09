# Development Guide

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Workflow

#### Running in Development Mode
```bash
npm run dev
```
This uses nodemon to automatically restart the server when files change.

#### Running Tests
```bash
npm test
```

#### Building for Production
```bash
npm run build
```

## Project Structure

```
Surayut/
├── src/
│   └── index.js          # Main application entry point
├── tests/
│   └── index.test.js     # Test files
├── docs/                 # Documentation
│   ├── API.md           # API documentation
│   └── DEVELOPMENT.md   # This file
├── config/              # Configuration files
│   └── jest.config.json # Jest configuration
├── package.json         # Project dependencies and scripts
├── .gitignore          # Git ignore rules
└── README.md           # Project overview
```

## Adding New Features

### Adding New Routes
1. Add route handlers in `src/index.js`
2. Add corresponding tests in `tests/index.test.js`
3. Update API documentation in `docs/API.md`

### Adding New Modules
1. Create module files in `src/` directory
2. Import and use in `src/index.js`
3. Add unit tests for the new module

## Testing

The project uses Jest for testing. Test files should be placed in the `tests/` directory with `.test.js` extension.

### Running Tests
```bash
npm test
```

### Test Coverage
```bash
npm test -- --coverage
```

## Code Style

- Use ES6+ features
- Follow consistent indentation (2 spaces)
- Use meaningful variable and function names
- Add comments for complex logic
- Include Thai language support where appropriate