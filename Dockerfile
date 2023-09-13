# Stage 1: Build frontend
FROM node:20-alpine3.17 AS frontend

WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json ./

RUN npm install

# Stage 2: Build backend
FROM node:20-alpine3.174 AS backend

WORKDIR /app/backend

COPY backend/package.json backend/package-lock.json ./

RUN npm install

# Stage 3: Final image
FROM node:14

WORKDIR /app

# Copy frontend and backend code
COPY frontend/ ./frontend/
COPY backend/ ./backend/

# Add any other setup or configuration steps here

CMD [ "npm", "start" ]
