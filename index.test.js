const postcss = require('postcss');

const plugin = require('./');

function run(input, opts) {
    return postcss([plugin(opts)])
        .process(input, {from: undefined})
        .then((result) => {
            expect(result.warnings()).toHaveLength(0);
        });
}

it('All expected selectors are found', () => run(
    '.my-class {}',
    {
        expected: [
            '.my-class',
        ],
    },
));

it('No blacklisted selectors are found', () => run(
    '.not-forbidden {}',
    {
        blacklist: [
            '.forbidden',
        ],
    },
));
