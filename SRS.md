# Software Requirements Specification (SRS) Document

## 1. Introduction

### 1.1 Purpose
This document outlines the Software Requirements Specification (SRS) for the **iScheme** web application. The purpose of iScheme is to provide a user-friendly platform for citizens to identify and access government schemes they are eligible for. This document details the functional and non-functional requirements of the system to guide the development process and serve as a reference for all stakeholders.

### 1.2 Scope
The scope of this project is to develop a minimum viable product (MVP) for a hackathon submission. The application will consist of a frontend user interface and a backend service to determine scheme eligibility based on user-provided data.

### 1.3 Definitions, Acronyms, and Abbreviations
* **iScheme:** The name of the project.
* **UI:** User Interface.
* **UX:** User Experience.
* **MVP:** Minimum Viable Product.
* **JSON:** JavaScript Object Notation.

## 2. Overall Description

### 2.1 Product Perspective
iScheme is a standalone web application. It does not require integration with any existing systems in its current MVP form, but is designed with future integrations (e.g., with government APIs) in mind. The application will be deployed and accessible online.

### 2.2 Product Functions
* Present a multi-step questionnaire to the user.
* Collect user inputs for demographic data (e.g., education, state, income).
* Process the collected data to determine eligibility for a predefined list of schemes.
* Display the results, including the user's provided data and the list of eligible schemes.

### 2.3 User Characteristics
The target users are citizens of various age groups and technical backgrounds who are looking for information on government schemes. The UI is designed to be simple and intuitive to ensure accessibility for all.

### 2.4 Constraints
* **Time:** The project must be completed within the hackathon's time limit.
* **Team Size:** Development is limited to a small team of four members.
* **Scope:** Focus is on core functionality for the MVP, with advanced features reserved for future development.

## 3. Specific Requirements

### 3.1 Functional Requirements

#### **FR1: Questionnaire Flow**
* **FR1.1:** The system shall display a multi-step questionnaire.
* **FR1.2:** Each step shall present a single question to the user.
* **FR1.3:** The user shall be able to navigate forward (`Next`) and backward (`Back`) through the questions.
* **FR1.4:** The `Next` button shall be disabled if a mandatory field is not filled.
* **FR1.5:** Upon completing the last question, the user shall be navigated to a results page.

#### **FR2: Data Handling**
* **FR2.1:** The system shall collect and store user answers in a temporary state object on the frontend.
* **FR2.2:** Upon completion of the questionnaire, the system shall format the collected answers as a JSON object.
* **FR2.3:** The system shall pass this JSON data to the results page via a URL query parameter.

#### **FR3: Results Display**
* **FR3.1:** The results page shall retrieve the JSON data from the URL query parameter.
* **FR3.2:** The page shall parse the JSON data and display it in a clear, formatted code block.
* **FR3.3:** The results page will serve as a placeholder for displaying a list of eligible schemes in future iterations.

### 3.2 Non-Functional Requirements

#### **3.2.1 Performance**
* **NFR1:** The application should be highly responsive, with all UI transitions and page loads occurring without noticeable lag.
* **NFR2:** The questionnaire navigation should be instantaneous.

#### **3.2.2 Usability**
* **NFR3:** The user interface shall be intuitive and easy to understand for first-time users.
* **NFR4:** The application shall feature a consistent dark theme across all pages.

#### **3.2.3 Reliability**
* **NFR5:** The application must handle form validation errors gracefully, providing clear feedback to the user.
* **NFR6:** Data passed between pages must be correctly formatted and decoded without errors.

#### **3.2.4 Security**
* **NFR7:** User data will not be stored permanently in the MVP to ensure privacy. (This can be updated with more details from your backend team).

## 4. System Architecture
### 4.1 Frontend Architecture
* **Client-side Rendering (CSR):** The main application logic and questionnaire state are handled on the client side using React hooks (`useState`, `useEffect`).
* **Routing:** App routing is managed by Next.js's App Router.
* **Styling:** Tailwind CSS is used for utility-first styling. The design is component-based.

### 4.2 Backend Architecture
* 
    * **API Type:** 
    * **Endpoints:** 

## 5. Future Development
* **Database Integration:** Implement a dedicated database to store scheme information and user profiles.
* **User Accounts:** Add user authentication to allow users to save their results and profile.
* **Advanced UI:** Develop a more sophisticated results page that displays schemes with images, descriptions, and official links.
* **Search and Filter:** Add a search bar and filter options for users to browse schemes manually.