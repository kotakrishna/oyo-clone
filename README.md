This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Server Side Props

Next.js Architecture:
1-Visible, live on domain. It checks for the the `getServerSideProps ` in the page , if the page includes it. Next js will run that function and then render that page.
we can do fetch and other pull stuff

For the static pages which does not have getServerSideProps at all that will be set as Completely Static and they are given immediately

### Static Props

at initial for dynamic routes the the pre build pages are 0;
but when the use visits the dynamic route the get static prop saves them in cache.

thus when new use visit that page the is served as static.

Revalidate = create that page after that time;
// _ time : 0 5 6 6 6 6 8 9 9 10 13 14 17
// _ req : 1 2 3 4 5 6 7 8 9 10 11 12 13
// \* vers : 1 1 1 1 1 1 1 1 1 1 2 2 2

### Get Static Path

for the params from url.. inform the next js

it returns paths as a array and then those will be build during build time.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
