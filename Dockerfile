FROM node

WORKDIR /src

COPY . .

EXPOSE 5512

CMD node server.js