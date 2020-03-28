# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

COPY . .

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install
RUN npm install react-scripts@3.0.1 -g --silent

# this isn't necessary when using aws via the web console, but seems to be via the EB CLI. 3000 is node-development (npm start) specific.
EXPOSE 3000

# start app
CMD ["npm", "start"]