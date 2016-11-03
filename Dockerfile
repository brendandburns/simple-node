FROM node:4.0

ADD *.js /

EXPOSE 8000
CMD node app.js

