FROM node:10-stretch

# reduce log size (not working?)
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
RUN npm install --no-audit
RUN npm cache clean --force
COPY . /usr/src/app
RUN npm run start:prepare
RUN npm run build:dll

CMD [ "npm", "start" ]

# build:
# $ docker build -t flowerpower-web .
# run:
# $ docker run -e "SESSION_SECRET=sessionSecret" -e "MONGODB_URI=mongodb://ip:port/flowerpower-web" -e "NODE_ENV=production" -e "PORT=8082" -p 8082:8082 -it --rm --name web estudando-web
