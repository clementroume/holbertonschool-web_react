# TypeScript - Holberton School

Welcome to the **TypeScript** project repository! This project is part of the **Holberton School Full-Stack** curriculum and is designed to introduce the fundamentals and advanced concepts of TypeScript, a strongly typed superset of JavaScript that enhances code quality and maintainability.

---

## Table of Contents

- [Description](https://www.google.com/search?q=%23description "null")
- [Project Structure](https://www.google.com/search?q=%23project-structure "null")
- [Learning Objectives](https://www.google.com/search?q=%23learning-objectives "null")

---

## Description

TypeScript enhances JavaScript by adding static types, allowing developers to catch errors early in the development process. This project provides a hands-on introduction to TypeScript's core features, from basic types and interfaces to more advanced concepts like namespaces, declaration merging, and nominal typing.

The objective is to build a solid understanding of how TypeScript improves code safety and developer experience, especially in larger applications.

This project includes:

- **Progressive Tasks**: A series of tasks that build upon each other, starting with basic interfaces and moving to complex architectural patterns.
- **Real-World Scenarios**: Exercises that simulate common development challenges, such as integrating untyped, third-party JavaScript libraries.
- **Webpack Configuration**: Each task is configured with Webpack and `ts-loader` to transpile TypeScript into browser-compatible JavaScript.
- **Strict Type-Checking**: The project is set up with strict compiler options to enforce best practices and ensure robust, error-free code.

By completing these tasks, you will gain the skills needed to write clean, scalable, and maintainable applications using TypeScript.

---

## Project Structure

The repository is divided into several task-based directories, each focusing on a specific set of TypeScript concepts.

|Directory|Description|
|---|---|
|`task_0/`|**Introduction to Interfaces:** Creates a `Student` interface and renders a list of students into an HTML table using Vanilla JS, demonstrating basic type definition and DOM manipulation.|
|`task_1/`|**Advanced Interfaces and Classes:** Defines a `Teacher` interface with read-only and optional properties, extends it, creates an interface for a function, and builds a `StudentClass` with corresponding instance and constructor interfaces.|
|`task_2/`|**Advanced Types:** Focuses on creating type-safe functions using **type unions** (`Director|
|`task_3/`|**Ambient Types:** Demonstrates how to integrate an external, untyped JavaScript library (`crud.js`) by writing an ambient declaration file (`.d.ts`) to provide full type safety.|
|`task_4/`|**Namespaces & Declaration Merging:** Structures code across multiple files that all contribute to a single `Subjects` namespace. It uses declaration merging to extend the `Teacher` interface from different files.|
|`task_5/`|**Nominal Typing:** Introduces **branded types** to create `MajorCredits` and `MinorCredits` interfaces. Although structurally identical, their unique "brand" prevents them from being used interchangeably.|

---

## Learning Objectives

At the end of this project, the following concepts should be clearly understood and applied:

- **Basic types** in TypeScript.
- How to use **Interfaces, Classes, and Functions**.
- How to work with the **DOM and TypeScript**.
- Understanding and using **Generic types**.
- How to use **Namespaces** to organize code.
- How to **merge declarations** to extend existing types.
- How to use an **ambient Namespace** to import an external library.
- Implementing basic **nominal typing** with branded types.

---
