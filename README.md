# SPS Bangladesh — GitHub Pages deployment

This project is configured for GitHub Pages using Vite and GitHub Actions. The workflow builds the site and publishes the `dist/` output automatically whenever you push to the `main` branch.

## Publish it

1. Create a GitHub repository (for example, `spsbangladesh-website`).
2. Upload/push the **contents of this project folder** to the repository's `main` branch. Keep the `.github/workflows/deploy.yml` file.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Open the **Actions** tab and wait for “Deploy SPS Bangladesh website to GitHub Pages” to finish successfully.
6. Your site URL will be shown under **Settings → Pages**. For a project repository, it normally looks like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Custom domain (spsbangladesh.org)

GitHub Pages can use a custom domain, but the domain must be configured separately:
- In **Settings → Pages → Custom domain**, enter `spsbangladesh.org` and save.
- Configure the DNS records at the domain provider to point to GitHub Pages. Use GitHub's current official documentation for the exact A/AAAA and `www` CNAME records.
- Enable **Enforce HTTPS** after DNS verification is complete.

Do not change DNS until you decide to host the public site on GitHub Pages. This will point the domain away from any other hosting currently serving it.

## Important limitations

- This is a static frontend. GitHub Pages does not run PHP, Node server processes, databases, or a private admin backend.
- Forms need an external form service endpoint (such as Formspree) configured as `VITE_FORM_ENDPOINT` before build, or will use the existing email-app fallback.
- The current demo admin feature does not persist changes and is not a secure content-management system.
- The site uses hash-style routes (`#/...`) which work on GitHub Pages.
- `public/.htaccess` is for Apache-based hosting and is not used by GitHub Pages.
