FROM nginx:alpine
COPY ./html /usr/share/nginx/html
COPY ./container /etc/nginx/sites-enabled