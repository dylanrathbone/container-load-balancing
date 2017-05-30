FROM node:7.4.0

RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY . /app

ENV PORT 10010
EXPOSE 10010

ENTRYPOINT ["node"]
CMD ["app.js"]
