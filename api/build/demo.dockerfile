FROM node:10.16.0-alpine

RUN apk --no-cache add curl g++ gcc libgcc libstdc++ linux-headers make python

RUN curl -o- -L https://yarnpkg.com/install.sh | sh

WORKDIR /src

COPY . .


RUN yarn --frozen-lockfile --production


WORKDIR /src/api

RUN yarn build

CMD yarn start

