# Base image
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy source code
COPY . .

# Build ứng dụng
RUN npm run build

# Mở port
EXPOSE 3000

# Khởi chạy ứng dụng
CMD ["npm", "start"] 