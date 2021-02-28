# SpaceXplorer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Git Repo

https://github.com/a45b/spaceXplorer

Note: Project has husky and commitizen setup.
Husky helps running git pre-commit or pre-push hooks.  
Commitizen helps having better git commit. (use `git cz` instead of get commit please)

## Live Demo

https://a45b.github.io/spaceXplorer/ (without ssr)

It's deployed into github pages and the process is baked with github action (ci/cd).
So, when I do a push to master or merge a pr - github actions will run and deploy the project into github pages.

Note: I have some issue deploying into some serverless environments. I have Macbook M1, I'm having some issue with the cli-tools of firebase and heroku. I also checked vercel and netlify but wasn't able to deploy yet.

## You can test SSR locally

- Do git clone (you need nodejs and angular cli installed)
  `git clone https://github.com/a45b/spaceXplorer.git`
  `cd spaceXplorer`
  `npm install`
  `npm run build:ssr`
  `npm run serve:ssr`

Note: I will try to deploy anyway - Its a good task to learn. But I don't want to delay submiting the task.

I builed with nodejs `15.10.0` and `14.16.0`

What will you get from SSR?
Browser will not make the initial API call as it cache the request on server and transfer to client.
It's done via a http interceptor which cache response depends on the url (withparams).

# Testing

I have install playwright to test on all three browser chrome, firefox, webkit.
But the setup need some time. I'm having issue with Puppeteer due to M1 processor.
Test is skip on the ci/cd process for now. I need to write proper test.
I have done written unit test on my projects.
I will also add cypress for e2e in future.

## Task

Responsive Design and other UI elements - It's as per what the task required from the responsiveness to style. - Trying to put my best within the readme file, describing everything :-)

## Lighthouse

Without SSR and from served from Github Pages

Mobile
![lighthouse-without-ssr-mobile]("./lighthouse-without-ssr-mobile.png?raw=true")

Desktop
![lighthouse-without-ssr-desktop]("./lighthouse-without-ssr-desktop.png?raw=true")

With SSR and from served from localhost

Mobile
![lighthouse-with-ssr-mobile]("./lighthouse-ssr-mobile.png?raw=true")

Desktop
![lighthouse-with-ssr-desktop]("./lighthouse-ssr-desktop.png?raw=true")
