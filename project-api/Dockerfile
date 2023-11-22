FROM node:14

WORKDIR /project-api
COPY package.json .
RUN npm install
COPY . .
CMD npm start
