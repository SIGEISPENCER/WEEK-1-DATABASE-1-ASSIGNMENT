# Week 1: Introduction & Foundational Skills (Focus on Project Relevance)

This week, we'll be diving into the exciting world of SQL and databases! We'll explore what SQL is used for, how it benefits web applications, and the building blocks of databases: tables, columns, and data types. But most importantly, we'll get our hands dirty by creating a basic database structure for our upcoming Expense Tracker project!

## Learning Objectives:
Understand the purpose and applications of SQL, particularly for web applications.
Identify the fundamental components of a database: tables, columns, and data types.
Design a basic database schema for our Expense Tracker project.
Instructions
This assignment is designed to be completed in approximately 2 hours.

**What you'll need:**

Access to a computer with internet access
A text editor (Microsoft Word document)
Drawing software (e.g. Draw.io, visual paradigm) for the bonus question.

_________________________________________________________________________________________________________________________
## Submission:

Save your completed assignment as a document (e.g., .docx, pdf)
Submit your document through the designated course platform.
_________________________________________________________________________________________________________________________

## Part 1: Understanding SQL (30 minutes)

**Question 1. Research**

Use online resources like websites or PowerPoint slides.

**1.1.** In a single Word document, summarize your findings in a short paragraph (3-5 sentences).
Web Applications:  

Imagine a dynamic website like an online store. How do you think SQL plays a role in managing data behind the scenes? Consider how product information, user accounts, and order details might be stored and accessed.

In a dynamic website like an online store, SQL (Structured Query Language) plays a crucial role in managing backend data. Product information, user accounts, and order details are typically stored in SQL databases, allowing for efficient storage, retrieval, and management of structured data.

**1.2.** Write a short explanation (3-5 sentences) in your document about the role of SQL in web applications.

SQL in web applications serves as the primary interface for managing relational databases. It handles tasks such as creating, reading, updating, and deleting data (CRUD operations), ensuring data integrity through constraints, and enabling complex queries for data analysis and reporting.

**1.3.** List 3 benefits of using SQL for web applications.

Structured Querying: Allows for complex queries that can retrieve specific data efficiently.
Data Integrity: Enforces constraints like unique keys and foreign keys to maintain data accuracy.
Scalability: Supports large datasets and is well-suited for growing web applications.

**1.4.** Think about efficiency, data organization, and data retrieval capabilities. Briefly explain each benefit in your document (1-2 sentences per benefit).

Efficiency: SQL's optimized querying capabilities reduce the time needed to retrieve specific data subsets.
Data Organization: Tables, relationships, and indexes in SQL ensure structured and organized data storage.
Data Retrieval: SQL's querying language allows for flexible and powerful data retrieval based on various criteria.

**1.5.** List any 3 Database Management Systems. 

MySQL
PostgreSQL
Microsoft SQL Server

## Part 2: Database Fundamentals (45 minutes)

**Question 2.1: Tables**

Think about how data is organized in rows and columns.
In your document, define a database table and explain its similarity to a spreadsheet (2-3 sentences).

A database table is a structured collection of data organized in rows and columns, similar to a spreadsheet's grid format. Each row represents a unique record, and each column represents a data attribute shared across all records.

**Question 2.2: Columns**

Consider different types of data like text, numbers, and dates.
Define "columns" and provide an example with an explanation (2-3 sentences) in your document.
Data Types: Why are data types important in a database? Briefly explain 3 common data types (e.g., Text, Number, Date).

Columns in a database table define the different types of data that can be stored. For example, in a table of expenses, "amount" could be a column that stores numerical values representing the cost of each expense.



**Question 2.3: Data Types**

Think about how data types ensure data integrity and efficient storage.
Explain the importance of data types and provide brief explanations of 3 common types (2-3 sentences each) in your document.

Data types in databases define the kind of values that can be stored in a column and ensure data integrity by restricting the type and format of data entered. Common types include:

Text: Stores alphanumeric characters and strings.
Number: Stores numeric data for calculations.
Date: Stores dates and times accurately for chronological data.

## Part 3: Expense Tracker Database Design (45 minutes)

**3.1. Planning:** 
We'll be building an Expense Tracker application. What kind of data do you think we'll need to track? List at least 5 data points relevant to our project.

* Consider information like expense amount, date, and category.
* List your identified data points in your document.

Data Points for Expense Tracker

Expense ID (unique identifier for each expense)
Amount (cost of the expense)
Date (date when the expense occurred)
Category (type of expense, e.g., groceries, utilities)
Description (additional notes or details about the expense)

**3.2. Tables:** 
Considering the data points you listed, design a basic database schema with one main table (likely named "Expenses").

* Define the columns needed for this table.
* Assign appropriate data types to each column based on the kind of data it will hold. (e.g., amount: number, date: date, category: text)
  
  In your document, create a table structure that includes:
* Table name (e.g., Expenses)
* Column names (e.g., expense_id, amount, date, category)
* Data type for each column (e.g., INT, DECIMAL, DATE, TEXT)


Table Name: Expenses
expense_id (INT, primary key)
amount (DECIMAL)
date (DATE)
category (VARCHAR or TEXT)
description (TEXT)

## Bonus:  

Sketch a simple Entity Relational Diagram (ERD) of your table structure, including column names and data types.

Use drawing software or a simple table format to visually represent your schema.

** Remember: There might be multiple ways to design your database schema. The goal is to understand the concepts and create a logical structure to store our expense tracking data.

  _________________________________________ _WELLDONE_ _____________________________________________
