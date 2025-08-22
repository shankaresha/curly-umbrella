# **Course Enrollment System - MongoDB Schema**

## **Overview**

You're helping build the backend of a course enrollment platform. In this assignment, your task is to design a Mongoose schema to represent students, the courses they can enroll in, and related data validations.

> You'll write the schema in a schema.js file inside the boilerplate project.

## **Schema Requirements**

### **General Guidelines**

- Use proper data types and Mongoose validators
- Ensure fields like email are unique
- Use embedded documents where appropriate
- Apply constraints like required, default, and min or max where it makes sense

### **Schema Fields**

#### **Student Schema**

- name

  - Type: String
  - Required: true
  - Purpose: Student’s full name

- email

  - Type: String
  - Required: true
  - Unique: true
  - Purpose: Used for student login and communication

- enrollmentDate

  - Type: Date
  - Default: current date
  - Purpose: Tracks when the student registered

- courses

  - Type: Array of ObjectIds
  - Ref: 'Course'
  - Purpose: Stores list of enrolled course IDs

#### **Course Schema**

- title

  - Type: String
  - Required: true
  - Purpose: Course title

- description

  - Type: String
  - Purpose: Short course description

- durationWeeks

  - Type: Number
  - Required: true
  - Purpose: Course length in weeks

- instructor

  - Type: String
  - Required: true
  - Purpose: Name of the course instructor

## **Deliverable**

- Write a MongoDB schema for the above user management system, ensuring all required fields, unique constraints, and data types are correctly implemented.

# **How to Fork and Set Up Your Repository**

## **1. Fork the Repository on StackBlitz**

- You will be provided with a **StackBlitz** link for the assignment.
- Open the link in your browser and click on the **Fork** button in StackBlitz.  
  This will create a copy of the repository in your StackBlitz account.

---

## **2. Clone the Repository to Your Personal GitHub**

- After forking, you can download the project or push it directly to your personal GitHub repository:
  - **Option 1: Download and Push**
    1. Download the repository files from StackBlitz.
    2. Open your terminal/command prompt, navigate to the project folder, and run:

bash
git init
git remote add origin <your_github_repo_url>

       Replace <your_github_repo_url> with your personal GitHub repository URL.
    3. Commit and push the files to your GitHub repository:


bash
git add .
git commit -m "Completed the assignment"
git push -u origin main

- **Option 2: Push Directly**
  1. Use the **Push to GitHub** option in StackBlitz to directly connect and push the repository to your GitHub account.

## **Submission Instructions**

- Submit your GitHub repo link
- Submit the Google Drive video link (ensure access permissions are open to kalvium.community)
- Include a short 1–2 line note summarizing your schema design
- **All of the above details must be added to a PDF file and uploaded on the submission portal.**

### **PDF Submission Format**

Title your submission file as:
mongoose-schema-assignment\_<yourname>.pdf

Your PDF should include:

- GitHub repository link
- Google Drive link to your video
- A short note on the schema you wrote (1–2 lines)

---

### **Example Submission Format**

- GitHub: https://github.com/<your_username>/course-enrollment-schema
- Video: Google Drive link
- Note: “I created schemas for students and courses with appropriate validations and used referencing for course enrollment.”
