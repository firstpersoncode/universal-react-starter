const lodash = require('lodash');

const isEmpty = lodash.isEmpty;

const isNotEmptyFor = (name) => {
    return (value) => {
        if (isEmpty(value)) {
            return name + ' is required';
        }
        return true;
    };
};

module.exports = function (plop) {
    plop.addHelper('firstLetterUpperCase', (txt) => {
        return txt.substring(0,1).toUpperCase() + txt.substring(1).toLowerCase();
    });

    // generators
    plop.setGenerator('component', {
        description: 'Add a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name? (without \'Component\' extension)',
                validate: isNotEmptyFor('name')
            },
        ],
        actions: [
            (answers) => {
                console.log(`New component: \n
                - name: ${answers.name}`);
                return '';
            },
            {
                type: 'add',
                path: '../client/src/component/{{properCase name}}/index.js',
                templateFile: 'templates/component/index.js.hbs'
            },
            {
                type: 'add',
                path: '../client/src/component/{{properCase name}}/style.css',
                templateFile: 'templates/component/style.css.hbs'
            },
        ]
    });

    plop.setGenerator('container', {
        description: 'Add a container',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your container name? (without \'COntainer\' extension)',
                validate: isNotEmptyFor('name')
            },
        ],
        actions: [
            (answers) => {
                console.log(`New container: \n
                - name: ${answers.name}`);
                return '';
            },
            {
                type: 'add',
                path: '../client/src/container/{{properCase name}}/index.js',
                templateFile: 'templates/container/index.js.hbs'
            },
            {
                type: 'add',
                path: '../client/src/container/{{properCase name}}/actions.js',
                templateFile: 'templates/container/actions.js.hbs'
            },
            {
                type: 'add',
                path: '../client/src/container/{{properCase name}}/constants.js',
                templateFile: 'templates/container/constants.js.hbs'
            },
            {
                type: 'add',
                path: '../client/src/container/{{properCase name}}/reducer.js',
                templateFile: 'templates/container/reducer.js.hbs'
            },
            {
                type: 'add',
                path: '../client/src/container/{{properCase name}}/style.css',
                templateFile: 'templates/container/style.css.hbs'
            }
        ]
    });
};
