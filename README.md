# Sharp Transportation Website Revamp

## Project Overview

This repository contains the codebase for the redeveloped Sharp Transportation website, a modern and functional platform designed to enhance online presence, improve user experience, and streamline driver recruitment and client communication. The project aims to replace the existing legacy site with a robust, scalable, and visually appealing solution built on contemporary web technologies.

## Key Features & Improvements

This project has involved significant enhancements, including:

-   **Dynamic Blog Platform:** Implemented a new blog system with Markdown support, allowing for easy content creation and management to improve SEO and share company news and industry insights.
-   **Enhanced Driver Interest Form:** Developed a fully functional driver interest form on the homepage, integrated with a backend API to capture leads and send automated email notifications using Nodemailer.
-   **Streamlined Contact Forms:** Refactored the general contact form to utilize `mailto:` links, providing a direct and user-friendly way for visitors to reach out via their preferred email client.
-   **Updated Navigation & Footer:** Corrected and optimized footer links, including integration with social media platforms (Instagram, YouTube), and refined header navigation for improved user flow.
-   **Dynamic Content Display:** Implemented conditional rendering in the header to adapt content based on the current page, enhancing contextual user experience.
-   **Refined Visuals:** Updated key imagery, including the hero image on the Directory page, to align with brand aesthetics and improve visual appeal.
-   **Expanded FAQ Section:** Enhanced the Frequently Asked Questions (FAQ) page with additional content to provide comprehensive answers to common inquiries.

## Technologies Used

-   **Next.js:** React framework for production-grade applications, enabling server-side rendering and static site generation.
-   **React:** A JavaScript library for building user interfaces.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
-   **Nodemailer:** Module for Node.js applications to allow easy email sending.
-   **Gray-matter & Remark:** For parsing Markdown files and converting them to HTML for blog content.
-   **Lucide React:** A collection of beautiful open-source icons.

## Getting Started

To set up and run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd site
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your email server credentials for the driver interest form:
    ```
    EMAIL_SERVER_HOST=
    EMAIL_SERVER_PORT=
    EMAIL_SERVER_SECURE=
    EMAIL_SERVER_USER=
    EMAIL_SERVER_PASSWORD=
    EMAIL_FROM=
    RECRUITING_EMAIL=
    ```
    *Replace placeholder values with your actual SMTP details.*

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Future Enhancements

Future plans for this project include:

-   Implementing a comprehensive trailer tracking solution.
-   Setting up Playwright for end-to-end automated testing.
-   Further optimizing SEO and defining service pages.
-   Adding more dynamic and interactive elements across the site.
-   Expanding content on employment and driver resources pages.

## Contact

For any inquiries or collaboration opportunities, please contact [Your Name/Email/LinkedIn Profile].