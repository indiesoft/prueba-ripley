## Requerimientos
* Docker version 19.03.1 o posterior

## Estructura
* api - contiene proyecto backend creado con node 8 y framework express
* front - contiene proyecto Angular 7

## Despliegue
* El proyecto fue construido para su despliegue en contenedores docker, por lo que al ejecutar los siguiente compandos se desplegara un contenedor para Redis, Api y el front:
   - docker-compose build
   - docker-compose up -d


Para ver el projecto en funcionamiento, ingresar al siguiente link http://104.248.220.164/
