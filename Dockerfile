# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN npm install
WORKDIR /src
COPY package*.json ./
RUN npm install 
COPY . .
CMD ["node", "src/server.ts", "src/database.ts"]
EXPOSE 5432