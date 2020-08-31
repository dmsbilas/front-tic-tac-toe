FROM node:14.5.0
WORKDIR /app
COPY package.json /app
COPY webpack.config.js /app
COPY src /app/src
RUN npm install

CMD ["npm","run","build"]

CMD ["npm", "start"]