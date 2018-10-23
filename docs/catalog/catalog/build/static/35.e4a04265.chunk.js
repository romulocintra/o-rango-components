webpackJsonp([35],{1053:function(e,t){e.exports='![hoek Logo](https://raw.github.com/hapijs/hoek/master/images/hoek.png)\n\nUtility methods for the hapi ecosystem. This module is not intended to solve every problem for everyone, but rather as a central place to store hapi-specific methods. If you\'re looking for a general purpose utility module, check out [lodash](https://github.com/lodash/lodash) or [underscore](https://github.com/jashkenas/underscore).\n\n[![Build Status](https://secure.travis-ci.org/hapijs/hoek.svg)](http://travis-ci.org/hapijs/hoek)\n\n<a href="https://andyet.com"><img src="https://s3.amazonaws.com/static.andyet.com/images/%26yet-logo.svg" align="right" /></a>\n\nLead Maintainer: [Nathan LaFreniere](https://github.com/nlf)\n\n**hoek** is sponsored by [&yet](https://andyet.com)\n\n## Usage\n\nThe *Hoek* library contains some common functions used within the hapi ecosystem. It comes with useful methods for Arrays (clone, merge, applyToDefaults), Objects (removeKeys, copy), Asserting and more.\n\nFor example, to use Hoek to set configuration with default options:\n```javascript\nconst Hoek = require(\'hoek\');\n\nconst default = {url : "www.github.com", port : "8000", debug : true};\n\nconst config = Hoek.applyToDefaults(default, {port : "3000", admin : true});\n\n// In this case, config would be { url: \'www.github.com\', port: \'3000\', debug: true, admin: true }\n```\n\n## Documentation\n\n[**API Reference**](API.md)\n'},896:function(e,t,o){var n=o(15),s=o(45),a=o(286).PageRenderer;a.__esModule&&(a=a.default);var r=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(1053)}},componentWillMount:function(){},render:function(){return n.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,e.exports=r}});
//# sourceMappingURL=35.e4a04265.chunk.js.map