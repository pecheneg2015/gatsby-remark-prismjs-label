# gatsby-remark-prismjs-label
A Gatsby remark plugin that will allows add label for code block
![demo](./img/demo.png)

###Install

```bash
npm i -S gatsby-remark-prismjs-label
```

###Usage

Add to your ``` gatsby-config.js```:

```javascript
    {
        resolve: `gatsby-remark-prismjs-label`,
        options: {
              templateGenerator: (title) => { return `<p>${title}</p>` }
            }
    }
```

