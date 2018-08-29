FROM node:8-onbuild

# reduce log size (not working?)
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm run start:prepare

# build:
# $ docker build -t flowerpower-web .
# run:
# $ docker run -e "SESSION_SECRET=sessionSecret" -e "MONGODB_URI=mongodb://ip:port/flowerpower-web" -e "NODE_ENV=production" -e "PORT=8082" -p 8082:8082 -it --rm --name web estudando-web
