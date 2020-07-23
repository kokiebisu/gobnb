FROM golang:alpine

LABEL maintainer="Kenichi Okiebisu <kenichikona@gmail.com>"

# Install Git
RUN apk update && apk add --no-cache git

# Set the current working directory inside the container
WORKDIR /app

# Copy go.mod, go.sum into the container's app directory
COPY go.mod .

COPY go.sum .

# Install all the dependencies
RUN go mod download

# Copy all the files to the container's app directory
COPY . .

EXPOSE 8080

CMD ["go", "run", "main.go"]
