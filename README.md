# Vitrin Mock Server

سرور آزمایشی ساده‌ای که تنظیمات ویترین را برمی‌گرداند.

## اجرا

```bash
npm start
```

سپس تنظیمات از مسیر زیر در دسترس است:

```text
GET http://localhost:3000/config
```

برای انتخاب پورت دیگر، متغیر محیطی `PORT` را تنظیم کنید.

## اجرا با Docker Compose

```bash
docker compose up --build -d
```

برای توقف سرویس:

```bash
docker compose down
```

پورت پیش‌فرض `3000` است. برای انتشار سرویس روی پورت دیگری:

```bash
PORT=8080 docker compose up --build -d
```

## اجرا با Docker

```bash
docker build -t vitrin-mock-server .
docker run --rm -p 3000:3000 vitrin-mock-server
```
# vitrin-mock-server
