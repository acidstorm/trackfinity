FROM alpine:latest

ARG PB_VERSION=0.22.17

RUN apk add --no-cache \
    unzip \
    ca-certificates

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_arm64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /app/

RUN rm /tmp/pb.zip
# uncomment to copy the local pb_migrations dir into the image
COPY ./pb_migrations /app/pb_migrations

# uncomment to copy the local pb_hooks dir into the image
COPY ./pb_hooks /app/pb_hooks

EXPOSE 8090

# start PocketBase
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8090"]