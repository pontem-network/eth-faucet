FROM node:16.16

ENV YARN_VERSION="3.2.2" \
    DAPPCORE_URL="https://github.com/pontem-network/eth-faucet/files/13561399/useDappCore.zip"

RUN apt update && \
    apt install -y zip && \
    yarn set version ${YARN_VERSION}

WORKDIR /opt
RUN wget -O useDappCore.zip ${DAPPCORE_URL} && \
    unzip -q useDappCore.zip && \
    rm useDappCore.zip && \
    cd useDappCore && \
    npm install

WORKDIR /opt/app
COPY ["package.json", "yarn.lock", ".yarnrc.yml", "./"]
COPY .yarn .yarn
RUN yarn install
COPY . .
ARG NODE_ENV=production
ENV NODE_ENV="${NODE_ENV}"
RUN if [[ "${NODE_ENV}" == 'production' ]]; then yarn build:prod; else yarn build:dev; fi
CMD ["yarn", "start"]
