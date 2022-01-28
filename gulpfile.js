/* gulpfile.js */

const uswds = require("@uswds/compile");

/** 
 * Path settings
 * Set as many as you need
 */ 

uswds.paths.dist.css = './_assets/css';
/* uswds.paths.dist.sass = './_assets/css'; */

/** 
 * Exports
 * Add as many as you need
 */ 

 exports.compile = uswds.compile;
 exports.watch = uswds.watch;
 exports.init = uswds.init;
 exports.update = uswds.updateUswds;
 exports.default = uswds.watch;
