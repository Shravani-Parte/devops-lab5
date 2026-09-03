FROM node:18-alpine
COPY server.js .
EXPOSE 3000
CMD ["node", "server.js"]