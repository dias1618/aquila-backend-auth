FROM node:13-alpine
RUN apk add git
WORKDIR /app
#ADD package.json /app/package.json
RUN git clone https://github.com/dias1618/negai-backend.git
WORKDIR /app/negai-backend
RUN npm config set registry http://registry.npmjs.org
RUN npm install
#ADD . /app
EXPOSE 3000
CMD ["npm", "run", "start"]

