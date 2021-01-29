FROM node:12.20-stretch-slim
WORKDIR /src/
COPY *.js package*.json /src/
RUN npm install
CMD node index.js
