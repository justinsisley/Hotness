FROM node:5
COPY . /src
RUN cd /src && npm install
EXPOSE 8743
CMD ["npm", "run", "production"]
