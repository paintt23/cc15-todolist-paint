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


#4 : App Layout (or Page layout)
วาง layout ของหน้าหลัก (ในที่นี้เรามี 1 หน้า)
ในไฟล์ App.js วาง markup สำหรับทำ layout

   <div className='todo'>
        <div className="todo__header">Header</div>
        <div className="todo__sidebar">SideBar</div>
        <div classNAme="todo_content">TodoContent</div>
    </div>


สร้างไฟล์ App.scss
ไฟล์ App.scss : เขียน css สำหรับจัด layout

$header-height: 44px;
$sidebar-width: 300px;

.todo {
    display: grid;
    grid-template-rows: $header-height calc(100vh - $header-height);
    grid-template-columns: $sidebar-width calc(100vw - $sidebar-width);

    &__header {
        grid-column: 1/3;
        grid-row: 1/2;
    }

    &__sidebar {
        grid-row: 2/3;
        grid-column: 1/2;
        // position: sticky;
    }

    &__content {
        grid-row: 2/3;
        grid-column: 2/3;

        // other css
        overflow-y: scroll;
        padding: 20px 30px;
        padding-top: 0;
    }
}


ไฟล์ App.scss : ปรับนามสกุลไฟล์ เป็น App.module.scss
หากมี error จากการหา variable ไม่เจอ : ให้ import global css เข้ามาใช้งาน
ไฟล์ App.jsx : implement styles ลงไฟล์ App.jsx

import styles from 'App.module.scss';

<div className={styles.todo}>
    <div className={styles.todo__header}>Header</div>
    <div className={styles.todo__sidebar}>SideBar</div>
    <div classNAme={styles.todo__content}>TodoContent</div>
</div>;



5 : UI-TASK
5.1 : AppBar or HeaderComponent
preview
![header](./images/header.png)

ติดตั้ง library สำหรับทำ icon : npm install react-icons link to npm ,link to document

สร้างไฟล์ Header.jsx สำหรับทำ Header

<header className='header'>
    {/* Logo */}
    <div className='header__logo'></div>

    {/* Text */}
    <div className='header__text'>
        <h3>Todoist</h3>
    </div>

    {/* Search */}
    <div className='header__search'></div>
</header>


สร้างไฟล์ Header.module.scss สำหรับ css

// import global.scss
.header {
    background-color: $primary;
    color: $grey-light;
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 20px;

    &__logo {
        display: flex;
        cursor: pointer;
        font-size: 24px;
    }

    &__text {
        flex: 1;
    }
    &__search {
        min-width: 300px;
    }
}


import styles มาใช้ใน JSX
implement styles กับ className

import styles from './Header.module.scss';

// implement styles กับ className



#### 5.1.1 : Logo

แทรก Logo Home ลงใน container

import { FaHome } from 'react-icons/fa';


// add this code in return statement
<div className='header__logo'>
    <FaHome />
</div>