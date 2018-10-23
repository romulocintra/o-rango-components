webpackJsonp([4],{777:function(n,e,t){var r=t(15),a=t(45),o=t(286).PageRenderer;o.__esModule&&(o=o.default);var s=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(784)}},componentWillMount:function(){},render:function(){return r.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,n.exports=s},784:function(n,e){n.exports='# @o-rango/o-alert\nProvides feedback messages for  user actions with alert messages.\n\n[![npm version](https://badge.fury.io/js/%40o-rango%2Fo-alert.svg)](https://badge.fury.io/js/%40o-rango%2Fo-alert)\n\n[![Edit o-alert codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n7m2y31n44)\n\n## Demo\n![](./docs/o-alert_demo.gif)\n\n## Get Started \nFirst, npm install within the project or use it directly from CDN:\n\n```\nnpm install @o-rango/o-alert --save\n```\nor\n```html\n<script src="./node_modules/@o-rango/o-alert/dist/o-alert.js"><\/script>\n// OR\n<script src="https://unpkg.com/@o-rango/o-alert/dist/o-alert.js"><\/script>\n```\n\n### Usage example \n\nDefault Alert\n\n```html\n  // Default Alert\n  <o-alert  align="center" type="default">This is an default alert banner !!!!</o-alert>\n  // Success Alert aligned left\n  <o-alert align="left" type="success">This is an success alert banner</o-alert>\n  // Alert using slots \n  <o-alert type="error" align="center">\n          <div slot="start"> Start</div>\n          This is an error alert banner\n          <div slot="end">X</div>\n  </o-alert>\n```\n\n\nAlert with Line\n\n```html\n  // Success Alert aligned left\n  <o-alert line align="left" type="success">This is an success alert banner</o-alert>\n  // Alert using slots \n  <o-alert line type="error" align="center">\n          <div slot="start"> Start</div>\n          This is an error alert banner\n          <div slot="end">X</div>\n  </o-alert>\n```\n\n\n\nProperties\n\n```js\n//o-content-alert\n  @Prop() name?: string;\n  @Prop() align: string = \'center\' // left,right,center ;\n  @Prop() type: string = \'default\' //default, error, warning , info , success;\n  @Prop() line: boolean= false;\n\n```\n\n\n### Customization \n\n```css\n /* Generic Colors variables*/\n --o-alert-default: #FAFBFC;\n --o-alert-error : #DE350B;\n --o-alert-warning:#FFC400;\n --o-alert-info:  #0065FF;\n --o-alert-success:#36B37E;\n\n /* Size Style variables  & Font Style variables */\n --o-alert-height : 3.5em;\n --o-alert-font-size :14px;\n --o-alert-font-weight : 600;\n --o-alert-font-family : \'San Francisco\', -apple-system, BlinkMacSystemFont, \'.SFNSText-Regular\', \'Helvetica Neue\', Helvetica, sans-serif;\n --o-alert-font-color-light : #FFFFFF;\n --o-alert-font-color-dark : #091E42;\n\n```\n'}});
//# sourceMappingURL=4.456d2bde.chunk.js.map