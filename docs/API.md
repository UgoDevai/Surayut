# API Documentation

## Base URL
```
http://localhost:3000
```

## Endpoints

### GET /
Returns welcome message and project information.

**Response:**
```json
{
  "message": "ยินดีต้อนรับสู่ Surayut Project",
  "description": "เริ่มต้นสร้างโปรเจ็ต - Welcome to Surayut Project",
  "version": "1.0.0",
  "status": "running"
}
```

### GET /health
Returns health status of the application.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2025-07-09T11:10:09.501Z",
  "uptime": 14.521494098
}
```

## Response Codes

- `200 OK` - Request successful
- `404 Not Found` - Endpoint not found
- `500 Internal Server Error` - Server error