FROM node:20-bookworm-slim AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:20-bookworm-slim AS runner
LABEL maintainer="Nicola Clark <nicola@slottedspoon.dev>"
EXPOSE 3000
WORKDIR /app
ENTRYPOINT [ "node", "build" ]
COPY --from=builder /app/build ./build/
COPY --from=builder /app/package*.json ./
RUN npm ci --omit dev
