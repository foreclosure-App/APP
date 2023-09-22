<br/>
<p align="center">

</p>

<div align="center">


</div>

<p align="center"><b>Created with :heart:</b></p>
<p align="center"><a href="https://blazity.com/">xyz</a> is... Contact us at <a href="mailto:contact@xyz.com">contact@xyz.com</a> if you’d like to talk about your project or just to have a chat with us</p>


<br />

## Table Of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
- [One click deploy](#one-click-deploy)
- [Built With](#-built-with)



## Features

- ⚡ **Next.js** - React framework for static rendering
- **Best SEO setup** - Meta Tags, JSON-LD and Open Graph Tags
- **[Tina CMS](https://tina.io/) integration** - local & (optional) production CMS
- **Optimized for Web Vitals**
- **Blog with MDX**
- **Mailchimp Integration** - for newsletters
- **Sendgrid Integration** - for sending emails
- **Dark mode** - and customizable themes!
- **No UI library** - just styled components, so you don't have to learn any new syntax
- **One click deployment** - with Vercel or any other serverless deployment environment
- **Eslint** - with Next.js's recommended settings and imports sorting rule
- **Prettier**

## 🤓 Getting Started
- yarn dev
```
# run the dev mode
$ yarn dev

# run the prod mode
yarn start

# build the app
yarn build
```
- Click `Use the template` or [this link](https://github.com/Blazity/next-saas-starter/generate)
- Setup your [sendgrid](https://sendgrid.com/) API key and add it to environment variables (`SENDGRID_API_KEY` - `.env.local`)
- Adjust the template to your needs (and checkout `env.ts` file)
- Deploy the project on [Vercel](https://vercel.com/) **don't forget to add env variables**
- _(optional)_ Create [Tina Cloud account](https://app.tina.io/), [a project](https://tina.io/docs/tina-cloud/) and fill these `NEXT_PUBLIC_ORGANIZATION_NAME`, `NEXT_PUBLIC_TINA_CLIENT_ID` env vars with proper values
  > Tina's Content API authenticates directly with GitHub removing the need for users to create GitHub accounts. Access is granted through the dashboard, allowing users to login directly through your site and begin editing! Any changes that are saved by your editors will be commited to the configured branch in your GitHub repository.
  - For more details [see the docs](https://tina.io/docs/tina-cloud/)


> Hint: To edit the blog pages go to [/admin](http://localhost:3000/admin) and navigate to a blog page to edit it. To exit editing mode navigate to [/admin/logout](http://localhost:3000/admin/logout)

## 🚀 One click deploy

Clone the repository and one-click deploy to Vercel for free!

[![Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-saas-starter)

Clone the repository and one-click deploy to Netlify for free!

[![Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Blazity/next-saas-starter)

## 🧰 Built With

- Statically generated pages with [**Next.js** ](https://github.com/vercel/next.js)
- [Styled components](https://github.com/styled-components/styled-components/)
- [MDX](https://github.com/mdx-js/mdx)
- [TypeScript](https://github.com/Microsoft/TypeScript)

