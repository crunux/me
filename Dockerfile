FROM node:18 as Builder

RUN corepack enable && corepack prepare pnpm@latest --activate
ENV PNPM_HOME=/usr/local/bin

WORKDIR /usr/src/app

COPY package*.json ./
RUN pnpm install

COPY . .
RUN pnpm run build

#EXPOSE 3000
#CMD ["npm", "start"]