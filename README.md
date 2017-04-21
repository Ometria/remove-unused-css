# remove-unused-css

Small module that, given some CSS and a static HTML file, filters out unused CSS rules.
Also works with rules inside media queries.

Works by parsing the CSS and checking for the presence of the target elements in the HTML.

Developed for optimizing emails created using a CSS framework.

## Install

Directly from github, at this point:

```
npm install Ometria/remove-unused-css --save
```

## Usage

```javascript
import removeUnusedCss from 'remove-unused-css'

let newCss = removeUnusedCss(htmlFileContents, cssFileContents);
```



