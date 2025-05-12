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
                begin: '\\b(if|else|while|return|se|senao|enquanto|retorne)\\b'
            },
            {
                className: 'tag',
                begin: '\\b(begin|end|inicio|fim)\\b'
            },
            {
                className: 'literal',
                begin: '\\b(true|false|none|verdadeiro|falso|nada)\\b'
            },
            {
                className: 'operator',
                begin: '\\b(and|or|not|plus|minus|times|divided by|greater than|greater or equals|less than|less or equals|equals|not equals|e|ou|nao|mais|menos|vezes|dividido por|maior que|maior ou igual a|menor que|menor ou igual a|igual a|nao igual a)\\b'
            },
            {
                className: 'built_in',
                begin: '\\b(write|read|text|clock)\\b'
            },
            {
                className: 'class',
                begin: '\\b(class|inherits|super|classe|herda)\\b',
            },
            {
                className: 'title.class',
                begin: '(?<=\\b(class|inherits|classe|herda)\\s)[a-zA-Z_][a-zA-Z0-9_]*'
            },
            {
                className: 'function',
                begin: '\\b(function|funcao)\\b',
            },
            {
                className: 'title.function',
                variants: [
                    { begin: '(?<=\\b(function|funcao)\\s)([a-zA-Z_][a-zA-Z0-9_]*)' },
                    { begin: '\\b[a-zA-Z_][a-zA-Z0-9_]*\\s*(?=\\()' }
                ]
            },
            {
                className: 'variable',
                begin: '\\b(variable|this|variavel|esse)\\b',
            },
            {
                className: 'title',
                begin: '(?<=\\b(variable|variavel)\\s)[a-zA-Z_][a-zA-Z0-9_]*'
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
