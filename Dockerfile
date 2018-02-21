FROM nginx:1.13.8-alpine
COPY ./html /usr/share/nginx/html
COPY ./container /etc/nginx/conf.d