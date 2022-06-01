<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

## Required WordPress Plugins:

- WP Gatsby
- WP GraphQL
- WPGraphQL JWT Authentication [[link](https://github.com/wp-graphql/wp-graphql-jwt-authentication)]
- WPGraphQL WooCommerce (WooGraphQL) [[link](https://github.com/wp-graphql/wp-graphql-woocommerce)]

## Built using:

- nvm list    :	16.15.0
- npm -v			:	8.5.5
- node -v			:	16.15.0
- yarn -v			:	1.22.18
- gatsby -v		:	4.15.0
- npx gatsby new    :	2.15.0
- composer -v : 2.3.5

## Useful resource links for Gatsby plugins used

- gatsby-source-wordpress : [[Docs](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress#docs-)] [[Plugin Options](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/plugin-options.md#url-string)]

### Note:
- __Don't forget to add .env file vars as per .env.example__

#### Add these content to the HCMS Footer #1:
```html
<form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-196" method="post" data-id="196" data-name="News Letter">
<div class="mc4wp-form-fields">
<div class="input-group cs-in-gp">
  <input type="email" name="EMAIL" class="form-control cs-form-control" required="" placeholder="Your email" aria-label="Your email" aria-describedby="signup-newsletter"><p></p>
<div class="input-group-append">
    <input name="INTERESTS[aae379b25c][]" type="hidden" value="ec56e24afa"><br>
    <input type="submit" class="btn" value="" id="signup-newsletter">
  </div>
</div>
</div>
<p><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off"></label><input type="hidden" name="_mc4wp_timestamp" value="1654020685"><input type="hidden" name="_mc4wp_form_id" value="196"><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1"></p>
<div class="mc4wp-response"></div>
</form>
```

#### Add these content to the HCMS Footer #2:
```html
<p><a href="https://www.instagram.com/carrotandstickofficial/" class="list-group-item list-group-item-action">Instagram</a></p>
<p><a href="https://www.facebook.com/CarrotAndStickSkinCare/" class="list-group-item list-group-item-action">Facebook</a></p>
```
