FROM node:10.16.0-alpine

# ENV NODE_ENV "production"
# ENV APP_ENV "production"
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT "3003"
ENV TZ "Asia/Bangkok"
ENV BASE_URL http://128.199.207.76:8080
RUN apk --no-cache add curl g++ gcc libgcc libstdc++ linux-headers make python

RUN curl -o- -L https://yarnpkg.com/install.sh | sh

WORKDIR /admin

COPY . .
# RUN yarn --frozen-lockfile --production

EXPOSE 3003

RUN npm install

RUN npm run build

CMD [ "npm", "run" ,"start"]