FROM nginx

# 拷贝服务器的前端资源到镜像之中
COPY . /var/www/cyberpunk/

# 拷贝服务器的nginx配置到镜像之中
COPY ./cyberpunk.conf /etc/nginx/conf.d/

RUN service nginx restart
