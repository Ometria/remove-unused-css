# remove-unused-css

Small module that, given some CSS and a static HTML file, filters out unused CSS rules.
Also works with rules inside media queries.

Works by parsing the css and checking for the presence of the target element in the HTML.
Developed for optimizing emails created with a css framework.

## Install

Install it directly from github:

```
npm install Ometria/remove-unused-css --save
```

## Usage

```
import removeUnusedCss from 'remove-unused-css'

let newCss = removeUnusedCss(htmlFileContents, cssFileContents);
```



