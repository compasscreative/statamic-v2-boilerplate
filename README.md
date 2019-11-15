# Compass Statamic Boilerplate

This repo is a starting point for Statamic projects at Compass Creative. It includes the basic pieces for building a small contractor website.

If this is your first project with this boilerplate, a good workflow may be to [download a fresh copy of Statamic](https://statamic.com/try) and pull pieces of this repo in one at a time.

## Getting Started
- Download this repo and place in your equivalent of a `~/Sites` folder.
- We haven’t included Statamic V2 files in this repo for copyright reasons, you can [download Statamic](https://statamic.com/try) and replace the `/statamic` folder in this repo with it’s contents.
- You may run the site using any PHP host, MAMP/WAMP or Laravel Valet are good options.
- In the file `.env`, set your local environment to be `local` by setting `APP_ENV=local`
- Set your local development domain in `/site/settings/environments/local.yaml`
- Add yourself as a user in Statamic. This can be done by duplicating a current users’ YAML file in `site/users/`, removing the ID and changing the information to be your own. Set the password to be a plain text value. When you login, it will be encrypted.
- You should then be able to login at `http://[local-domain]/cp`.

## Theming
- The `theme` is typically left as `main`. All files, related to the theme are left in the folder `site/themes/main`. This includes the `package.json` and `node_modules`.
- Make sure you are on a recent version of Node and NPM. I’m currently using Node v10.15.0 and npm v6.4.1
- Run `npm install --save-dev` in `public/site/themes/main` directory.
- Set localURL variable in `webpack.mix.js` to be the url you are using locally
- To view the rendered site, run open `site/themes/main` in a Terminal window and run `npm run watch`. This will run the site using Browser Sync in your default browser. Assets will now compile and livereload.

## Coding Standards
- We’ve set an `.editorconfig` file to control indentation. Most code editors respect these settings.
- When launching the website, we have a `_website-launch-list.md` file to follow. Typically Jeremy will go through these steps during launch. This is a good reference to what we typically consider as part of the build.
- A good CSS style guide to follow is the [Airbnb Styleguide](https://github.com/airbnb/css).
- Aibnb also has a great [JavaScript styleguide](https://github.com/airbnb/javascript).
- PHP Standards are based on [PHP-FIG](https://www.php-fig.org/).

## Front-end Libraries

### JavaScript
- Compiling assets is done with Laravel Mix, the config file for this is `webpack.mix.js`
- We use a vanilla approach to JS, bringing in a few libraries as needed and process custom code with Babel.
- Lazy loading images is often done with the [Lazysizes library](https://github.com/aFarkas/lazysizes)
- If you’d like to add more JavaScript libraries, you can import them using

### CSS
- CSS is written in plain CSS and processed with a couple PostCSS libraries. We use a [utility first approach](https://frontstuff.io/in-defense-of-utility-first-css)
- The boilerplate is setup to use [Tailwindcss](https://tailwindcss.com/) for CSS.
- [Photoswipe](https://photoswipe.com/documentation/getting-started.html) is used for image galleries.

## Deployments

- Unless there is very sensitive data included in the file structure, we commit all the files in the repo, except:
  - Cache files
  - `.env`
  - `node_modules` folder
- This gives us a single source for the entire project. Getting into a project is quick and easy by just cloning the repo and running it in PHP.
