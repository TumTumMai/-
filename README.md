## **UpServer**
1. เปิดCMDใส่คำสั่ง ssh root@128.199.207.76
2. Password:@wmc2020e9a510db27272be0b9c64544699b9003
3. cd live-steaming
4. docker-compose down หยุดทำงานServer
5. git pull origin master คำสั่ง เอาไฟล์ล่าสุดของMaster
6. docker-compose up --build -d คำสั่งรันServer
