# Delivery Application Backend API

## About the Project

This is a **delivery application** project in which I created an API that serves different roles: **Admin**, **Client** (store), and **Manager**.  
Each role has specially allocated functions, ensuring the smooth functioning of the system.

The project integrates all necessary **CRUD operations** to meet user requirements.  
It is also possible to **filter orders by any field**.

## Key Features

- Role-based functionality (Admin, Client, Manager)  
- Full CRUD operations for orders and related entities  
- Order filtering by any field  
- Secure authentication with JWT  
- Password hashing with bcrypt  
- API documentation using Swagger UI  
- Scalable architecture ready for deployment  

## Technologies Used

- Node.js, Express.js  
- PostgreSQL (Prisma ORM)  
- JWT for authentication  
- bcrypt for password hashing  
- Swagger (API documentation)  

## API Endpoints Overview

> Full and detailed API documentation is available at `/api-docs` (Swagger UI).

Main operations:

- User authentication (login/register)  
- Role-specific endpoints for Admin, Client, and Manager  
- CRUD operations for orders and related data  
- Order filtering by any field  

## How to Run

1. **Clone the repository**  
   ```bash
   git clone <repository-url>
   cd <project-folder>

   
--------------------------------------------------


# დელივერის აპლიკაციის Backend API

## პროექტის შესახებ

ეს არის **დელივერის აპლიკაციის** პროექტი, რომელშიც შევქმენი API, რომელიც ემსახურება სხვადასხვა როლებს: **ადმინი**, **კლიენტი** (მაღაზია) და **მენეჯერი**.  
თითოეულ როლს აქვს სპეციალურად გამოყოფილი ფუნქციები, რაც უზრუნველყოფს სისტემის გლუვ ფუნქციონირებას.

პროექტში ინტეგრირებულია ყველა საჭირო **CRUD ოპერაცია**, რაც სრულად აკმაყოფილებს მომხმარებლის მოთხოვნებს.  
ასევე შესაძლებელია **შეკვეთის ნებისმიერი ველის მიხედვით გაფილტვრა**.

## ძირითადი ფუნქციები

- როლზე დაფუძნებული ფუნქციონალი (ადმინი, კლიენტი, მენეჯერი)  
- შეკვეთებისა და დაკავშირებული მონაცემების სრული CRUD ოპერაციები  
- შეკვეთის ფილტრი ნებისმიერი ველით  
- უსაფრთხო ავტორიზაცია JWT-ით  
- პაროლის დაშიფვრა bcrypt-ით  
- API დოკუმენტაცია Swagger UI-ში  
- მასშტაბირებადი არქიტექტურა, მზად განთავსებისთვის  

## გამოყენებული ტექნოლოგიები

- Node.js, Express.js  
- PostgreSQL (Prisma ORM)  
- JWT ავტორიზაციისთვის  
- bcrypt პაროლის დაშიფვრისთვის  
- Swagger (API დოკუმენტაცია)  

## API Endpoint-ების მიმოხილვა

> სრული და დეტალური API დოკუმენტაცია ხელმისაწვდომია `/api-docs` (Swagger UI).

მთავარი ოპერაციები:

- მომხმარებლის ავტორიზაცია (შესვლა/რეგისტრაცია)  
- როლზე სპეციფიური endpoint-ები ადმინისთვის, კლიენტისთვის და მენეჯერისთვის  
- შეკვეთებისა და დაკავშირებული მონაცემების CRUD ოპერაციები  
- შეკვეთის ფილტრი ნებისმიერი ველით  

## როგორ გავუშვა

1. **რეპოზიტორიის კლონირება**  
   ```bash
   git clone <repository-url>
   cd <project-folder>
