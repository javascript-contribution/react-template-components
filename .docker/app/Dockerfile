FROM node:16.15-alpine AS development

LABEL AUTHOR=srijan

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]

