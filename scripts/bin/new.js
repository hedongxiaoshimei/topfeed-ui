'use strict';

process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('Please enter new component name');
  process.exit(1);
}

const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const ChineseName = process.argv[3] || componentname;
const ComponentName = uppercamelcase(componentname);
const componentPath = path.resolve(__dirname, '../../src', componentname);
const root = path.resolve(__dirname, '../../');

fs.appendFile(
  path.join(root, 'src/index.ts'),
  `export { default as ${ComponentName} } from './${componentname}'`,
  err => {
    if (err) throw err;
    console.log('export component done!');
  }
);

  
const Files = [
  {
    filename: `src/${componentname}/index.tsx`,
    content: `import  React from 'react';
import classNames from 'classnames';

export interface ${ComponentName}Props {

}

export default class ${ComponentName} extends React.Component {
  render() {
    return 
  }
};`
  },
  {
    filename: 'src/${componentname}/__test__/${componentname}_test.js',
    content: `test('unit test', () => {
  expect(sum(1, 2)).toBe(3);
});`
  },
  {
    filename: `docs/${componentname}.md`,
    content: `## ${ComponentName} ${ChineseName}`
  },
  // site file
  {
    filename: `site/pages/${componentname}/index.tsx`,
    content: `import MarkDown from '../../libs/markdown';

export default class ${ComponentName} extends MarkDown {
  document() {
    return require('../../../docs/${componentname}.md');
  }
}
`
  }
  // todo update site/pages/index.js
];


Files.forEach(file => {
  fileSave(path.join(root, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});



console.log('DONE!');
