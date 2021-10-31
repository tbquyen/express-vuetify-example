FROM node:14.3.0-stretch-slim
RUN mkdir -p /home/backend
COPY ./package*.json /home/backend
WORKDIR /home/backend
RUN npm install
COPY . .
EXPOSE 3000

CMD [ "node", "index" ]
