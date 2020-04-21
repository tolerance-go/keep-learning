const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const cwd = process.cwd();
const folderFlag = 'folder';

const branchName = shell.exec('git rev-parse --abbrev-ref HEAD').trim();

const paths = {
  src: path.join(cwd, 'src'),
  utils: path.join(cwd, 'src/utils.js'),
  readme: path.join(cwd, 'README.md'),
  readmeHead: path.join(cwd, 'README_HEAD.md'),
};

const tree = {};

const readSrc = (folder = paths.src, node = tree) => {
  const files = fs.readdirSync(folder);
  files.forEach((file) => {
    const p = path.join(folder, file);

    if (p === paths.utils) return;

    const s = fs.statSync(p);
    const meta = path.parse(p);
    const { name } = meta;

    if (s.isDirectory()) {
      node[name] = {
        [folderFlag]: true,
      };
      readSrc(p, node[name]);
      return;
    }

    node[name] = meta;
  });

  return node;
};

const writeReadme = () => {
  fs.writeFileSync(paths.readme, fs.readFileSync(paths.readmeHead) + '\n', {
    flag: 'w',
  });

  const eachTree = (node, parents = '', level = 0) => {
    for (let file in node) {
      if (file === folderFlag) continue;

      if (typeof node[file] === 'object' && node[file][folderFlag]) {
        fs.writeFileSync(paths.readme, `${'  '.repeat(level)}- ${file}\n`, {
          flag: 'a',
        });
        eachTree(node[file], path.join(parents, file), level + 1);
        continue;
      }
      fs.writeFileSync(
        paths.readme,
        `${'  '.repeat(
          level,
        )}- [${file}](https://github.com/tolerance-go/keep-learning/blob/${branchName}/src/${path.join(
          encodeURIComponent(parents),
          encodeURIComponent(node[file].base),
        )})\n`,
        {
          flag: 'a',
        },
      );
    }
  };

  eachTree(tree);
};

readSrc();
writeReadme();
