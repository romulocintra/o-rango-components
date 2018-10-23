webpackJsonp([126],{805:function(e,n,t){var o=t(15),r=t(45),s=t(286).PageRenderer;s.__esModule&&(s=s.default);var a=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(962)}},componentWillMount:function(){},render:function(){return o.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,e.exports=a},962:function(e,n){e.exports="# outputJson(file, object, [options, callback])\n\nAlmost the same as [`writeJson`](writeJson.md), except that if the directory does not exist, it's created.\n\n**Alias:** `outputJSON()`\n\n- `file` `<String>`\n- `object` `<Object>`\n- `options` `<Object>`\n  - `spaces` `<Number|String>` Number of spaces to indent; or a string to use for indentation (i.e. pass `'\\t'` for tab indentation). See [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_space_argument) for more info.\n  - `EOL` `<String>` Set EOL character. Default is `\\n`.\n  - `replacer` [JSON replacer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter)\n  - Also accepts [`fs.writeFile` options](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)\n- `callback` `<Function>`\n\n## Example:\n\n```js\nconst fs = require('fs-extra')\n\nconst file = '/tmp/this/path/does/not/exist/file.json'\nfs.outputJson(file, {name: 'JP'}, err => {\n  console.log(err) // => null\n\n  fs.readJson(file, (err, data) => {\n    if (err) return console.error(err)\n    console.log(data.name) // => JP\n  })\n})\n\n// With Promises:\nfs.outputJson(file, {name: 'JP'})\n.then(() => fs.readJson(file))\n.then(data => {\n  console.log(data.name) // => JP\n})\n.catch(err => {\n  console.error(err)\n})\n```\n"}});
//# sourceMappingURL=126.57fb226b.chunk.js.map