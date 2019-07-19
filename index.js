const postcss = require('postcss');
const difference = require('lodash.difference');

module.exports = postcss.plugin('postcss-class-checker', (opts) => {
  if (typeof opts.expected !== 'object' && typeof opts.blacklist !== 'object') {
    throw new Error('You need to pass expected or blacklisted selectors / rules');
  }

  return (root) => {
    // Build array of all available selectors
    const selectors = [];
    root.walkRules((rule) => {
      selectors.push(rule.selectors[0]);
    });

    // Expected selectors
    const missingRules = difference(opts.expected, selectors);
    if (missingRules.length > 0) {
      throw new Error(
        `You are missing expected classes: \n${
          missingRules}`,
      );
    }

    // Blacklisted selectors
    const blacklistPrep = difference(opts.blacklist, selectors);
    const blacklistMatches = difference(opts.blacklist, blacklistPrep);
    if (blacklistMatches.length > 0) {
      throw new Error(
        `You are using blacklisted classes: \n${
          blacklistMatches}`,
      );
    }
  };
});
