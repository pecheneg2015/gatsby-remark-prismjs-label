# gatsby-remark-prismjs-label
A Gatsby remark plugin that will allows add label for code block
![demo](https://raw.githubusercontent.com/pecheneg2015/gatsby-remark-prismjs-label/master/img/demo.PNG)

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

