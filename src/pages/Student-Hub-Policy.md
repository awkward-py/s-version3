---
title: 'Student-Hub Policy'
layout: '~/layouts/MarkdownLayout.astro'

---

## Table of Contents
1. [Introduction](#introduction)
2. [HTML File Overview](#html-file-overview)
3. [JavaScript File Overview](#javascript-file-overview)
4. [How IT Off-Topics Stores and Accesses Data](#how-it-off-topics-stores-and-accesses-data)
6. [Checkmark-Policy](#checkmark-policy)

## Introduction

This document provides an overview of how "IT Off-Topics" handles data using HTML and JavaScript. It explains the structure of the HTML file, the functionality of the JavaScript file, and the methods used for data storage and access.

## HTML File Overview

The HTML file sets up the structure of the web page and includes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roll-Call-Hub</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Student Data</h1>
    <table id="data-table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Email</th>
                <th>Name</th>
                <th>Department</th>
                <th>Roll Number</th>
                <th>Sem</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
         
        </tbody>
    </table>
    <script src="script.js"></script>
</body>
</html>
```

### Key Elements:
- **`<head>` Section:** Contains meta-information about the page, including character encoding and viewport settings.
- **`<body>` Section:** Includes the visible content, such as the table structure where data will be displayed.
- **`<script>` Element:** Links to the JavaScript file that handles dynamic data insertion.

## JavaScript File Overview

The JavaScript file manages the dynamic content of the page:

```javascript

const data = [ 
const studentsData = [
    { date: "Sep 16, 2024 9:00 AM", email: "ma*******@gmail.com", name: "Manisha", branch: "IT", rollNumber: "22009120014", semester: 5, cgpa: 8.05 },
    { date: "Sep 16, 2024 8:46 AM", email: "pk*******@gmail.com", name: "Pawan Kumar", branch: "IT", rollNumber: "22009120020", semester: 5, cgpa: 6.9 },
    { date: "Sep 16, 2024 8:28 AM", email: "parg*****@gmail.com", name: "Ghanshyam Pargai", branch: "IT", rollNumber: "22009120010", semester: 5, cgpa: 7 },
    { date: "Sep 16, 2024 8:22 AM", email: "msan*****@gmail.com", name: "Sanskriti Mishra", branch: "CSE", rollNumber: "23009050039", semester: 3, cgpa: 8.48 },
    { date: "Sep 16, 2024 6:03 AM", email: "pk04*****@gmail.com", name: "Pawan Kumar", branch: "IT", rollNumber: "22009120020", semester: 5, cgpa: 6.9 },
    { date: "Sep 15, 2024 11:58 PM", email: "ishanp****@gmail.com", name: "Ishan Papnoi", branch: "CSE", rollNumber: "22009050016", semester: 5, cgpa: 8.25 },
    { date: "Sep 15, 2024 11:41 PM", email: "devilki****@gmail.com", name: "Mukesh Chandra Arya", branch: "CSE", rollNumber: "22009050025", semester: 6, cgpa: 6.9 },
    { date: "Sep 15, 2024 11:35 PM", email: "abhishe*****@gmail.com", name: "Abhishek Kirti", branch: "CSE", rollNumber: "22009050002", semester: 5, cgpa: 7.6 },
    { date: "Sep 15, 2024 11:30 PM", email: "rawataka****@gmail.com", name: "Akhilesh Rawat", branch: "IT", rollNumber: "22009250003", semester: 5, cgpa: 7.43 },
    { date: "Sep 15, 2024 11:12 PM", email: "banwar****@gmail.com", name: "Ayush", branch: "IT", rollNumber: "2200912004", semester: 5, cgpa: 7.84 },
    { date: "Sep 15, 2024 11:02 PM", email: "cyberde***@gmail.com", name: "Arjun Mourya", branch: "IT", rollNumber: "22033320003", semester: 5, cgpa: 6.5 },
    { date: "Sep 15, 2024 10:53 PM", email: "nathsush***@gmail.com", name: "Sushil Nath", branch: "IT", rollNumber: "23009122001", semester: 5, cgpa: 6.92 },
    { date: "Sep 15, 2024 10:52 PM", email: "salonikash***@gmail.com", name: "Saloni", branch: "IT", rollNumber: "22009120025", semester: 5, cgpa: 7.83 },
    { date: "Sep 15, 2024 10:50 PM", email: "sudhans***@gmail.com", name: "Sudhanshu Joshi", branch: "IT", rollNumber: "22011120028", semester: 5, cgpa: 7.2 },
    { date: "Sep 15, 2024 10:48 PM", email: "aadiver***@gmail.com", name: "Aditya Verma", branch: "IT", rollNumber: "22009120001", semester: 5, cgpa: 7 },
    { date: "Sep 15, 2024 10:21 PM", email: "jyotisan****@gmail.com", name: "Jyoti Sanwal", branch: "IT", rollNumber: "23009250021", semester: 3, cgpa: 7.32 },
    { date: "Sep 15, 2024 10:08 PM", email: "jyotisa*****@gmail.com", name: "Jyoti Sanwal", branch: "IT", rollNumber: "23009250021", semester: 3, cgpa: 7.32 },
    { date: "Sep 15, 2024 9:45 PM", email: "mehraart****@gmail.com", name: "Aarti Mehra", branch: "IT", rollNumber: "23009250024", semester: 3, cgpa: 7.64 },
    { date: "Sep 15, 2024 9:42 PM", email: "mehraart****@gmail.com", name: "Aarti Mehra", branch: "IT", rollNumber: "23009250024", semester: 3, cgpa: 7.64 },
    { date: "Sep 15, 2024 9:29 PM", email: "harshb***@gmail.com", name: "Harsh Bhatt", branch: "IT", rollNumber: "23009120021", semester: 3, cgpa: 7.26 },
    { date: "Sep 15, 2024 8:36 PM", email: "harshb***@gmail.com", name: "Harsh Bhatt", branch: "IT", rollNumber: "23009120021", semester: 3, cgpa: 7.26 },
    { date: "Sep 15, 2024 7:59 PM", email: "lalitr***@gmail.com", name: "Lalit Kumar", branch: "IT", rollNumber: "2421841045", semester: 3, cgpa: 0 },
    { date: "Sep 15, 2024 7:54 PM", email: "lakshita***@gmail.com", name: "Lakshita Sharma", branch: "IT", rollNumber: "23009120014", semester: 3, cgpa: 6.58 },
    { date: "Sep 15, 2024 7:30 PM", email: "amandikti***@gmail.com", name: "Aman Diktiya", branch: "IT", rollNumber: "23009120017", semester: 3, cgpa: 7.06 },
    { date: "Sep 15, 2024 7:28 PM", email: "prajapat***@gmail.com", name: "Paras Kumar", branch: "IT", rollNumber: "23009120032", semester: 3, cgpa: 7.34 },
    { date: "Sep 15, 2024 7:17 PM", email: "payalne***@gmail.com", name: "Payal Negi", branch: "IT", rollNumber: "23009120028", semester: 3, cgpa: 6.6 },
    { date: "Sep 14, 2024 7:40 PM", email: "bharatr***@gmail.com", name: "Bharat Singh Rawat", branch: "IT", rollNumber: "22009120005", semester: 5, cgpa: 9.4 },
    { date: "Sep 14, 2024 12:37 PM", email: "jyotisan****@gmail.com", name: "Jyoti Sanwal", branch: "IT", rollNumber: "23009250021", semester: 3, cgpa: 7.32 },
    { date: "Sep 14, 2024 12:37 PM", email: "mehraart****@gmail.com", name: "Aarti Mehra", branch: "IT", rollNumber: "23009250024", semester: 3, cgpa: 7.64 },
    { date: "Sep 11, 2024 11:22 AM", email: "rahuls.bis***@gmail.com", name: "Rahul Singh Bisht", branch: "IT", rollNumber: "23009120016", semester: 3, cgpa: 6.3 },
    { date: "Sep 11, 2024 11:14 AM", email: "himans****@gmail.com", name: "Himanshu Rawat", branch: "IT", rollNumber: "23009120022", semester: 3, cgpa: 7.12 },
 
];


function populateTable() {
    const tableBody = document.querySelector('#data-table tbody');
    
    data.forEach(item => {
        const row = document.createElement('tr');
        
        
        Object.values(item).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        
       
        tableBody.appendChild(row);
    });
}

window.onload = populateTable;
```

### Key Functions:
- **`data` Array:** Holds the data to be displayed.
- **`populateTable` Function:** Inserts data into the table by creating rows and cells dynamically.
- **`window.onload`:** Ensures the table is populated when the page loads.

## How IT Off-Topics Stores and Accesses Data

### Data Storage:
- **HTML and JavaScript Handling:**
  - Data is initially handled and displayed using JavaScript arrays and objects within the HTML document.
  - This data is typically static in the example provided, meaning it's embedded directly into the JavaScript file and used to populate the table on page load.

### Data Access:
- **Dynamic Content Loading:**
  - When the page is loaded, the JavaScript file accesses the data array and dynamically generates table rows and cells.
  - This approach ensures that the data displayed in the table is current and relevant based on the content defined in the JavaScript file.

### Privacy and Data Management:
- **Data Privacy:**
  - For privacy reasons, sensitive data such as email addresses may be masked (e.g., `aw*******@gmail.com`).
- **Local Handling:**
  - In the provided example, data is handled locally in the browser. For more complex applications, data might be fetched from a server or database via AJAX or other methods.


# Checkmark Policy

In the IT Off-Topics community, checkmarks are used to recognize individuals based on their contributions and roles. Each checkmark represents a different level of engagement and achievement. Below is the detailed description of each checkmark category:

## Checkmark Categories

### Blue Tick 
**Eligibility**: 
- **Contributors**: Individuals who actively contribute to IT Off-Topics in various capacities.
- **Activities**:
  - **Coding**: Writing and maintaining code for IT Off-Topics projects.
  - **Publicity**: Promoting IT Off-Topics through social media, blogs, and other channels.
  - **Project Assistance**: Providing support and help in the development and execution of IT Off-Topics projects.
  - **Growth Support**: Assisting in the expansion and enhancement of IT Off-Topics in any manner.

**Description**: The blue tick is awarded to those who play a significant role in the IT Off-Topics ecosystem. These individuals contribute through coding, spreading awareness, assisting with various tasks, and supporting the community's growth. Their dedication helps drive the success and advancement of IT Off-Topics projects.

### Gray Tick 
**Eligibility**: 
- **Academic Toppers**: Students who have achieved top grades and academic excellence in their college.
- **Class Representatives (CR)**: Students who serve as leaders and representatives of their respective classes.

**Description**: The gray tick acknowledges academic achievers and leaders within the college community. This includes students who excel academically and those who take on leadership roles as Class Representatives. Their efforts and leadership contribute to the academic and social environment, making them stand out in the IT Off-Topics community.

### Golden Tick
**Eligibility**: 
- **Coders**: Individuals who have made significant contributions to the coding and development of IT Off-Topics websites.
- **Website Owners**: Individuals who own and manage IT Off-Topics websites.

**Description**: The golden tick is a prestigious recognition for those who have made exceptional contributions to IT Off-Topics websites. This includes skilled coders who develop and enhance the websites and owners who manage these platforms. Their efforts are crucial in maintaining and advancing the online presence of IT Off-Topics, and this checkmark honors their significant impact.

---

**Note**: The checkmark system is designed to recognize and reward individuals based on their contributions and roles within the IT Off-Topics community. Each category represents a unique level of achievement and involvement.
