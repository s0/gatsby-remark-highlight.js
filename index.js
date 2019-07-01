const highlight = require('remark-highlight.js');

let transformer = null;

module.exports = ({ markdownAST }, options) => {
  if (!transformer || transformer.options !== options) {
    try {
      transformer = {
        transformer: highlight(options),
        options
      };
    } catch(e) {
      throw new Error('Invalid options passed to plugin gatsby-remark-highlight.js: ' + e.toString());
    }
  }

  return transformer.transformer(markdownAST);
}
