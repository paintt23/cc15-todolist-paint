#0 Setup Project
-`npx create-react-app<project-name>`
-`cd <project-name`
-`npm start`or`npmrun start`or`npx react-scripts start`
-auto open browser localhost:3000

#1 About Project
-Other code เรียกว่าDependencies อยู่ใน node_modules
-ลบทิ้งได้
-ติดตั้งใหม่ด้วย `npm install`



#2 ลบสิ่งที่ไม่จำเป็น
 Clean up Project - remove unnecessary thing
clean up index.js
clean up App.js, App.css
clean up public/index.html
remove unnecessary file
restructure folder to app/ component/


#3 css setup
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%; /*equal font-size : 10px*/
}

body {
    box-sizing: border-box;
}

#### 3.4 : Typography

ไฟล์ index.scss : ให้ทำการ import google font

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@400;600;700&display=swap');