FROM node:18-slim

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update &&\
  apt-get -y upgrade &&\
  apt-get -y install --no-install-recommends tini &&\
  apt-get clean &&\
  rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .
EXPOSE 4000

ENTRYPOINT ["tini", "--"]
CMD ["node", "index.js"]
