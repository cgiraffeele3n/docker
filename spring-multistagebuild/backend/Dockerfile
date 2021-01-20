# build-image
FROM gradle:6.7.1-jdk11 as build-stage

COPY ./build.gradle .
COPY ./settings.gradle .
COPY ./src src
RUN ["gradle", "build"]

# runtime-image
FROM openjdk:11-jre-slim
WORKDIR /home/app
COPY --from=build-stage /home/gradle/build/libs/backend-0.0.1-SNAPSHOT.jar .