FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY scripts/ /usr/share/nginx/html/scripts/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]