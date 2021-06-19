FROM node:12.18.3-alpine

ENV NODE_ENV "production"
# ENV APP_ENV "production"
ENV NUXT_HOST 0.0.0.0
ENV BASE_URL http://128.199.207.76:8080
ENV NUXT_PORT "8081"
ENV TZ "Asia/Bangkok"

RUN apk --no-cache add curl g++ gcc libgcc libstdc++ linux-headers make python

RUN curl -o- -L https://yarnpkg.com/install.sh | sh

WORKDIR /www

COPY . .
# RUN yarn --frozen-lockfile --production

EXPOSE 8081

RUN npm install

RUN npm run build

CMD [ "npm", "start"]
