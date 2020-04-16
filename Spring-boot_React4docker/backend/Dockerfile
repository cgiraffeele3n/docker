FROM openjdk:8

WORKDIR /usr/src/app/REST
COPY ./REST/build.gradle /usr/src/app/REST
COPY ./REST/settings.gradle /usr/src/app/REST
COPY ./REST/gradlew /usr/src/app/REST
COPY ./REST/gradle/ /usr/src/app/REST/gradle

RUN ./gradlew