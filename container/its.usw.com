server {
    listen 80;
    server_name its.usw.com;
    root /usr/share/nginx/html/its.southwales.ac.uk;
    location / {
		try_files $uri $uri/ /index.html;
	}
}