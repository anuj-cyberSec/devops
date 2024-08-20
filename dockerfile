FROM node:18

#APP DIRECTORY

WORKDIR /usr/src/APP

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

EXPOSE 4000

CMD ["sh", "-c", "node index.js"]

