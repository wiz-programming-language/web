function wiz() {
    return {
        name: 'Wiz',
        contains: [
            {
                className: 'comment',
                begin: '#',
                end: '$'
            },
            {
                className: 'comment',
                begin: '/\\*',
                end: '\\*/'
            },
            {
                className: 'string',
                variants: [
                    { begin: '"', end: '"' },
                    { begin: "'", end: "'" }
                ]
            },
            {
                className: 'keyword',
                begin: '\\b(if|else|while|for|return)\\b'
            },
            {
                className: 'tag',
                begin: '\\b(begin|end)\\b'
            },
            {
                className: 'literal',
                begin: '\\b(true|false|none)\\b'
            },
            {
                className: 'operator',
                begin: '\\b(and|or|not|plus|minus|times|divided by|greater than|greater or equals|less than|less or equals|equals|not equals)\\b'
            },
            {
                className: 'built_in',
                begin: '\\b(write|read|text|clock)\\b'
            },
            {
                className: 'class',
                begin: '\\b(class|inherits|super)\\b',
            },
            {
                className: 'title.class',
                begin: '(?<=\\b(class|inherits)\\s)[a-zA-Z_][a-zA-Z0-9_]*'
            },
            {
                className: 'function',
                begin: '\\b(function)\\b',
            },
            {
                className: 'title.function',
                variants: [
                    { begin: '(?<=\\b(function)\\s)([a-zA-Z_][a-zA-Z0-9_]*)' },
                    { begin: '\\b[a-zA-Z_][a-zA-Z0-9_]*\\s*(?=\\()' }
                ]
            },
            {
                className: 'variable',
                begin: '\\b(variable|me)\\b',
            },
            {
                className: 'title',
                begin: '(?<=\\b(variable)\\s)[a-zA-Z_][a-zA-Z0-9_]*'
            },
            // {
            //     className: 'title',
            //     begin: '[a-zA-Z_][a-zA-Z0-9_]*'
            // },
            {
                className: 'number',
                variants: [
                    { begin: '\\b\\d+\\b' },
                    { begin: '\\b\\d+\\.\\d+\\b' }
                ]
            }
        ]
    };
};

export default wiz;
