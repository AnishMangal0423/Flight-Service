FROM node

WORKDIR /developer/nodejs/flight-service

COPY package*.json ./

RUN npm install
COPY . /src
# COPY . .

EXPOSE 4000
CMD ["npm", "run", "anish"]