# Preethi Portfolio

A responsive multi-page React portfolio using Vite, React Router, Framer Motion and Lucide icons. Personal content and project links are centralized in `src/data/siteConfig.js`.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code or a terminal.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL printed by Vite.
5. Run `npm run build` before deployment.

## Customize

Edit `src/data/siteConfig.js` to update your bio, links, skills, projects, internships and education. Replace `public/assets/preethi-profile.png` and `public/assets/preethi-resume.pdf` to update your portrait and resume.

## Contact form

The contact form currently validates the fields and prepares an email using the visitor's default mail application. It does not claim a message was sent. To use a hosted form provider later, configure a service such as Formspree or EmailJS and replace the mailto handler in `src/pages/Contact.jsx`.

## Deploy

Run `npm run build`; deploy the generated `dist` folder to Vercel, Netlify or another static hosting provider. Configure SPA fallback/rewrite to `/index.html` so nested React Router routes work on refresh.

## Notes

- Project visuals are original CSS illustrations, not screenshots from the repositories.
- The portfolio includes the four confirmed GitHub repositories and the two internships listed in the supplied resume.
- No live project deployment URLs or certificate verification links were supplied, so none are invented.
