FROM openjdk:8

WORKDIR /app

RUN apt-get update

COPY nongbushim /app

RUN chmod +x /app/mvnw

CMD /app/mvnw spring-boot:run