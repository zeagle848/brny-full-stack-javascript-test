# News API Home Project for BNRY

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Development Notes](#development-notes)

## Introduction

This application was made as a skills test for the company BNRY. The brief summary was to make an application that uses the [News API](https://newsapi.org/). The user should be able to either view the top headlines or query the API for specific topics.

The tech requested to create the application was preferrably React and Node.js (Koa or Express), or simple JavaScript, although ideally TypeScript.

## Getting Started

Before we can start the live server we must first make sure that Node.js is installed. Check by opening your console and running `node -v`. If you can't see a version number you must install Node.js. 

To view the app locally you can begin by installing the dependencies...

`npm install`

...and then start by running:

`npm run serve`.

The application should be live on `http://localhost:8080/` if it doesn't open automatically.

## Development Notes

### Tech Used

I created this application using plain HTML, CSS and JavaScript. No JavaScript frameworks were used and neither were any Node.js web frameworks. This was a conscious decision due to the fact that I have no experiance or knowledge working with JavaScript frameworks such as React, nor any Node.js web frameworks such as Koa and Express. 

### Design Choices

I chose to create a UI that was simple and functional. The articles returned via the API are made into cards that are appended to the `.article-cards-container`. There are two ways to sort the displayed articles. The user can either view the top headlines by clicking the 'Top Headlines' button or query the API themselves through the search box. 

### Using the API

This is the first application I've developed using an API. I had to learn how to use JSON data in JavaScript and use URLS to fetch data from the API. Didn't run into too many problems  and overall the experiance was a lot of fun!
