# Study Point Website

Production-ready landing website for Study Point by StackForge, intended for public launch and payment gateway verification on `stackforge.tech`.

## Tech Stack

- Next.js App Router
- Tailwind CSS
- Plain React components
- Static policy pages
- No backend, login, signup, or payment integration

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Pages

- `/` - Home
- `/privacy-policy` - Privacy Policy
- `/terms-and-conditions` - Terms and Conditions
- `/refund-policy` - Refund and Cancellation Policy
- `/contact` - Contact and support form UI

## Deploy to Vercel

Install the Vercel CLI if needed:

```bash
npm install -g vercel
```

Deploy the project:

```bash
vercel
```

Deploy to production:

```bash
vercel --prod
```

## Connect `stackforge.tech`

1. Open the project in the Vercel dashboard.
2. Go to Settings > Domains.
3. Add `stackforge.tech`.
4. Update DNS records at the domain provider as instructed by Vercel.
5. Wait for DNS propagation and SSL certificate issuance.

## Notes

- Support email is set to `support@stackforge.tech`.
- The site does not include payment collection, payment gateway integration, login, signup, or backend submission.
- Payment options are shown for information only; no payment checkout is implemented on the website.
- The contact form is a frontend-only UI and shows an email instruction after submit.
- Policy text should be reviewed by the business owner or legal advisor before public launch.
