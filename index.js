import cheerio from 'cheerio';
import cssParser from 'css';

export default function removeUnusedCss(html, css){
  var obj = cssParser.parse(css);
  var $ = cheerio.load(html);

  let newRules = obj.stylesheet.rules.reduce((acc, rule) => {
    if(rule.type === 'rule'){
      let newRule = processRule(rule, $);
      if(newRule.selectors.length){
        // if the rule matched any selector at all
        acc.push(newRule);
      }

    } else if(rule.type === 'media'){
      let media = processMedia(rule, $);
      if(media.rules.length){
        // if any rules inside the media query matched
        acc.push(media);
      }
    }

    return acc;

  }, []);

  obj.stylesheet.rules = newRules;
  return cssParser.stringify(obj);
}

function processRule(rule, $){
  let usedSelectors = rule.selectors.filter(sel => !!$(sel).length);
  rule.selectors = usedSelectors;
  return rule;
}

function processMedia(media, $){
  let newRules = media.rules.reduce((acc, rule) => {
    if(rule.type === 'rule'){
      let result = processRule(rule, $);
      if(result.selectors.length){
        // if the rule matched any selector at all
        acc.push(result);
      }
    } else {
      acc.push(rule);
    }

    return acc;
  }, []);

  media.rules = newRules;
  return media;
}
