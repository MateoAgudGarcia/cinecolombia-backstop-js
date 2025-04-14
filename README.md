# Visual Regression Testing PoC - Cinecolombia[![BackstopJS Tests and Deployment](https://github.com/MateoAgudGarcia/cinecolombia-backstop-js/actions/workflows/backstop-deployment.yml/badge.svg)](https://github.com/MateoAgudGarcia/cinecolombia-backstop-js/actions/workflows/backstop-deployment.yml)

This Proof of Concept (PoC) demonstrates the use of **BackstopJS** for visual regression testing on the Cinecolombia platform.

## Table of Contents

- [Getting Started](#getting-started)
- [Technical Stack](#technical-stack)
- [Features](#features)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Reports](#reports)
- [Requirements](#requirements)

## Getting Started

1. Clone the repository via SSH:

```bash
git clone git@github.com:MateoAgudGarcia/cinecolombia-backstop-js.git
cd cinecolombia-backstop-js
```

## Technical Stack

- Node.js 22+ (Required)
- BackstopJS
- Husky & lint-staged (code quality)
- ESLint & Prettier

## Features

- Automated visual regression testing
- HTML visual report generation
- Code quality tools integration
- Simple configuration and execution

## Setup

1. Install dependencies:

```bash
npm install
```

## Running Tests

- **Create visual references (baseline):**

```bash
npm run reference
```

- **Run visual regression tests:**

```bash
npm test
```

## Reports

Visual reports are generated automatically and can be viewed in the default BackstopJS report directory:

```bash
backstop_data/html_report/
```
