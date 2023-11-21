<p align="center"><img align="center" width="280" src="https://raw.githubusercontent.com/irfaan008/simple-skill-icons/main/.github/simple-skill-logo.png"/></p>

<h3 align="center">Transform your tech skills into stunning SVG icons effortlessly, and showcase your expertise with style on LinkedIn, Resume and other place</h3>
<hr>

<h3 align="center">Powered by Cloudflare Workers ⚡</h3>

# Docs

### BASE_URL = https://simpleskill.icons.workers.dev/svg
<!-- - [Example](#example) -->
- [Specifying Icons](#specifying-icons)
- [Themed Icons](#themed-icons)
- [Icons Per Line](#icons-per-line)
- [Centering Icons](#centering-icons)
- [Icons List](#icons-list)


# Specifying Icons

Copy and paste the code block below into your readme to add the skills icon element!

Change the `?i=js,html,css` to a list of your skills seprated by ","s! You can find a full list of icons [here](https://simpleicons.org/).

```md
[![My Skills]([BASE_URL]?i=react,node.js,docker,mongodb,postgresql,awslambda,adobexd,angular)
```

![My Skills](https://simpleskill.icons.workers.dev/svg?i=react,node.js,docker,mongodb,postgresql,awslambda,adobexd,bitbucket)

# Themed Icons

Some icons have a dark and light themed background. You can specify which theme you want as a url parameter.

This is optional. The default theme is dark.

Change the `&theme=light` to either `dark` or `light`. The theme is the background color, so light theme has a white icon background, and dark has a black-ish.

**Light Theme Example:**

```md
[![My Skills]([BASE_URL]?i=react,node.js,docker,mongodb,postgresql,awslambda&theme=light)](#)
```

[![My Skills](https://simpleskill.icons.workers.dev/svg?i=react,node.js,docker,mongodb,postgresql,awslambda&theme=light)](#)

# Icons Per Line

You can specify how many icons you would like per line! It's an optional argument, and the default is 15.

Change the `&perline=3` to any number between 1 and 50.

```md
[![My Skills]([BASE_URL]?i=react,node.js,docker,mongodb,postgresql,awslambda,adobexd,bitbucket&perline=4)]
```

![My Skills](https://simpleskill.icons.workers.dev/svg?i=react,node.js,docker,mongodb,postgresql,awslambda,adobexd,bitbucket&perline=4)

# Centering Icons

Want to center the icons in your readme? The SVGs are automatically resized, so you can do it the same way you'd normally center an image.

```html
<p align="center">
  <a href="#">
    <img src="[BASE_URL]?i=react,node.js,docker,mongodb,postgresql,awslambda" />
  </a>
</p>
```

<p align="center">
  <a href="#">
    <img src="https://simpleskill.icons.workers.dev/svg?i=react,node.js,docker,mongodb,postgresql,awslambda" />
  </a>
</p>

# Icons List

The exciting part of this project is it doesn't manages its own icon repository instead it fetches it from https://simpleicons.org which has large repository of more than 2700 tech skills icons and they are keep getting added.

You can use any of those icons directly here. Head over to https://simpleicons.org/ and browse icons which fits your needs

## 💖 Support the Project

To support the project directly, feel free to open issues for more features & customisations, or contribute with a pull request!
Request for new icon can't be accepted as the icon is being served from a different project. You can put your icon request on https://simpleicons.org
