
import { expect } from 'chai';
import removeCss from '../index.js';

describe('Tests with basic input', function(){
  it('Should accept and return empty strings', function(){
    expect(removeCss('', '')).to.equal('');
  });

  it('Should only preserve used classes when provided with simple css rules', function(){
    let html = '<html><body><p class="big-text">hi</p></body></html>';
    let css = `
    .big-text { font-size: 16px; }
    .small-text { font-size: 11px; }
    `;
    let result = '.big-text{font-size:16px;}';

    expect(removeCss(html, css).replace(/\s/g, '')).to.equal(result);
  });

  it('Should removed unused rules from inside media queries as well', function(){
    let html = '<html><body><p class="big-text">hi</p></body></html>';
    let css = `
    @media all {
      .big-text { font-size: 16px; }
      .small-text { font-size: 11px; }
    }`;
    let result = '@mediaall{.big-text{font-size:16px;}}';

    expect(removeCss(html, css).replace(/\s/g, '')).to.equal(result);
  })
})
