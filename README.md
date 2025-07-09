# Surayut

เริ่มต้นสร้างโปรเจ็ต - Starting a New Project

## Description

Surayut is a foundational project template that provides a solid starting point for building applications. This project includes basic server functionality, API endpoints, and testing infrastructure.

## Features

- ✅ Express.js web server
- ✅ RESTful API endpoints
- ✅ Health check endpoint
- ✅ Test infrastructure with Jest
- ✅ Development scripts with nodemon
- ✅ Thai language support
- ✅ Modern JavaScript (ES6+)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Testing
```bash
npm test
```

## API Endpoints

- `GET /` - Welcome message and project information
- `GET /health` - Health check endpoint

## Project Structure

```
Surayut/
├── src/
│   └── index.js          # Main application file
├── tests/
│   └── index.test.js     # Test files
├── docs/                 # Documentation
├── config/              # Configuration files
├── package.json         # Project dependencies and scripts
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## Development

This project uses:
- **Express.js** for web server functionality
- **Jest** for testing
- **Nodemon** for development auto-reload

## License

MIT License