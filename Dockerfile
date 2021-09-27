FROM node:14.17.4-buster-slim

COPY --chown=node . /app/

USER node
WORKDIR /app/
RUN npm install
RUN npm run build

EXPOSE 5000

ENTRYPOINT ["npx", "serve", "-s", "build"]
