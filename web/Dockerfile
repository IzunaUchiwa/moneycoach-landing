# Dockerfile for building Web image
FROM cirrusci/flutter:latest-web AS build
WORKDIR /app
COPY . .
RUN flutter build web

FROM nginx:alpine
COPY --from=build /app/build/web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
