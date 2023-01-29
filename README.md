# Web diego-luque.com


1) cambiar las variables de entorno

- VITE_API= *enlace del api*
- VIRTUAL_HOST= *www.ejemplo.com,  ejemplo.com*
- VIRTUAL_PORT= *puerto para ser ocupado por el contenedor de letsencrypt*
- LETSENCRYPT_HOST= *www.ejemplo.com,  ejemplo.com*
  
2) correr nuestro docker
- docker-compose up -d 