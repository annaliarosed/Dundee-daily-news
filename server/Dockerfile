FROM node:14

# Create app directory
WORKDIR /home/node
COPY package*.json ./ 
# COPY package-lock.json /.

RUN npm config set unsafe-perm true

# Bundle app source
RUN npm install
COPY --chown=node:node . .
#COPY . .
COPY .env.production .env
# trial thing

RUN npm install -g tsc 
# trial thing

USER node

RUN npm run build 

ENV NODE_ENV production

EXPOSE 8080
CMD [ "node", "dist/index.js" ]
USER node