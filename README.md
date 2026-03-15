# Crema — Website

Minimal marketing site for [Crema](https://crema.app), the espresso tracking app for iOS.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Pages

- `/` — Landing page (hero, features, TestFlight CTA)
- `/privacy` — Privacy policy (required for App Store)
- `/support` — Support & FAQ (required for App Store)

## Getting started

```bash
npm install
npm run dev        # → http://localhost:4321
npm run build      # → static output in ./dist
npm run preview    # → preview the build
```

## TODO before App Store submission

- [ ] Replace `hello@crema.app` with your real email
- [ ] Replace `https://threads.net/@yourhandle` with your Threads URL
- [ ] Replace `https://crema.app` in `astro.config.mjs` with your actual domain
- [ ] Add app screenshots to `/public/images/` and reference in the hero section
- [ ] (Optional) Add an email collection form (Buttondown, Mailchimp, etc.)
- [ ] Update the "Last updated" date in the privacy policy if you make changes
- [ ] Replace "David" in the footer copyright with your preferred name/entity

## App Store links

When submitting to App Store Connect, use these URLs:

- **Privacy Policy URL**: `https://yourdomain.com/privacy`
- **Support URL**: `https://yourdomain.com/support`
- **Marketing URL** (optional): `https://yourdomain.com`
