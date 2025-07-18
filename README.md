# Sharp Transportation Website Revamp

## Project Overview

This repository contains the codebase for the redeveloped Sharp Transportation website, a modern and functional platform designed to enhance online presence, improve user experience, and streamline driver recruitment and client communication. The project aims to replace the existing legacy site with a robust, scalable, and visually appealing solution built on contemporary web technologies.

## Technologies Used

- **Next.js:** React framework for production-grade applications, enabling server-side rendering and static site generation.
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development, including the Typography plugin for styled Markdown content.
- **Framer Motion:** A production-ready motion library for React, used for animations and transitions.
- **Nodemailer:** Module for Node.js applications to allow easy email sending.
- **Gray-matter & Remark:** For parsing Markdown files and converting them to HTML for blog content.
- **Lucide React:** A collection of beautiful open-source icons.

## Getting Started

To set up and run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone [repository-url]
   cd site
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**
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

   _Replace placeholder values with your actual SMTP details. This file should not be committed to version control._

4. **Run the development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Future Enhancements

Based on the current development roadmap, future plans for this project include:

- Implementing a comprehensive trailer tracking solution.
- Setting up Playwright for end-to-end automated testing.
- Further optimizing SEO and defining service pages.
- Adding more dynamic and interactive elements across the site.
- Expanding content on employment and driver resources pages.
- Updating the main video with better shots.

## Contact

For any inquiries or collaboration opportunities, please contact me at <Jadenanderson22@gmail.com>.

