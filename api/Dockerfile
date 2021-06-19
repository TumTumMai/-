# base image
FROM node:10.16.0-alpine

RUN apk --no-cache add curl g++ gcc libgcc libstdc++ linux-headers make python

RUN curl -o- -L https://yarnpkg.com/install.sh | sh

# Create app directory

WORKDIR /api

# Install app dependencies
COPY package*.json ./
RUN yarn install --frozen-lockfile

# Set environment variables
ENV NODE_ENV development
ENV NODE_HOST 0.0.0.0
ENV NODE_PORT 8080

# Bundle app source
COPY . .

# Clear the cache
RUN yarn cache clean

EXPOSE 8080

CMD [ "yarn", "dev" ]
