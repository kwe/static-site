FROM nginx:alpine
COPY ./html /usr/share/nginx/html
COPY ./container /usr/etc/nginx/sites-enabled