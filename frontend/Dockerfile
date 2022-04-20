FROM node:alpine
WORKDIR /
COPY package.json /package.json
COPY package-lock.json /package-lock.json
RUN npm i
COPY . /
CMD ["npm", "start"]
