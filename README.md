# Huuthien.com - Personal Landing Page

Đây là trang web cá nhân được xây dựng bằng Next.js, một framework React hiện đại. Website được thiết kế để giới thiệu về bản thân và các dịch vụ phát triển web.

## 🚀 Tính năng

- Thiết kế responsive, tương thích với cả desktop và mobile
- Giao diện người dùng hiện đại và thân thiện
- Các trang giới thiệu dịch vụ Frontend và Backend
- Tối ưu hóa SEO
- Hiệu suất cao

## 🛠 Công nghệ sử dụng

- [Next.js](https://nextjs.org/) - React framework
- TypeScript
- Tailwind CSS
- Docker

## 🏃‍♂️ Hướng dẫn chạy dự án

1. Clone repository:
```bash
git clone <your-repo-url>
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
```

3. Chạy môi trường development:
```bash
npm run dev
# hoặc
yarn dev
```

4. Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 🐳 Chạy với Docker

```bash
# Build image
docker build -t huuthien-landing .

# Chạy container
docker run -p 3000:3000 huuthien-landing
```

## 📁 Cấu trúc thư mục

```
src/
  ├── app/              # App router pages
  ├── components/       # React components
  ├── styles/          # CSS styles
  └── utils/           # Utility functions
public/                # Static files
```

## 🚀 Deployment

Dự án có thể được triển khai lên nhiều nền tảng khác nhau như Vercel, Netlify, hoặc VPS.

## 📝 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.
