FROM    node:latest

MAINTAINER Christian G. Warden <cwarden@xerus.org>

ADD . /src
RUN cd /src; npm install

EXPOSE  8080
CMD ["node", "/src/index.js"]
