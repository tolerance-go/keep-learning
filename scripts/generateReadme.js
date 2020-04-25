const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const cwd = process.cwd();
const folderFlag = 'folder';

// const branchName = shell.exec('git rev-parse --abbrev-ref HEAD').trim();
const branchName = 'master';

const paths = {
  src: path.join(cwd, 'src'),
  utils: path.join(cwd, 'src/utils.js'),
  readme: path.join(cwd, 'README.md'),
  readmeHead: path.join(cwd, 'README_HEAD.md'),
  treeAsset: path.join(cwd, 'assets/tree.json'),
  treePathAsset: path.join(cwd, 'assets/treePath.json'),
};

const tree = {};

const sumOfPath = {};

const addOfPaths = (pathArr) => {
  let res = [];
  for (let i = 0; i < pathArr.length; i++) {
    if (res.length === 0) {
      res.push(pathArr[i]);
    } else {
      res.push(res[res.length - 1] + '-' + pathArr[i]);
    }
  }

  res.forEach((pathItem) => {
    if (sumOfPath[pathItem] != null) {
      sumOfPath[pathItem]++;
    } else {
      sumOfPath[pathItem] = 1;
    }
  });
};

const readSrc = (folder = paths.src, node = tree, pathArr = ['root']) => {
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
      readSrc(p, node[name], [...pathArr, name]);
      return;
    }

    node[name] = meta;
    addOfPaths(pathArr);
  });

  return node;
};

const writeReadme = () => {
  fs.writeFileSync(paths.readme, fs.readFileSync(paths.readmeHead) + '\n', {
    flag: 'w',
  });

  fs.writeFileSync(paths.readme, `总数(${sumOfPath.root})\n\n`, {
    flag: 'a',
  });

  const eachTree = (node, pathStr = 'root', parents = '', level = 0) => {
    for (let file in node) {
      if (file === folderFlag) continue;
      if (file === 'index') continue;
      if (file.endsWith('visual') || file.endsWith('service')) continue;

      if (typeof node[file] === 'object' && node[file][folderFlag]) {
        const nextPathStr = pathStr + '-' + file;

        // 如果目录下存在 index，则设置链接
        if ('index' in node[file]) {
          fs.writeFileSync(
            paths.readme,
            `${'  '.repeat(
              level,
            )}- [${file}](https://github.com/tolerance-go/keep-learning/blob/${branchName}/src/${path.join(
              encodeURIComponent(parents),
              encodeURIComponent(file),
              encodeURIComponent(node[file].index.base),
            )})${
              sumOfPath[nextPathStr] ? `(${sumOfPath[nextPathStr]})` : ''
            }\n`,
            {
              flag: 'a',
            },
          );
        } else {
          fs.writeFileSync(
            paths.readme,
            `${'  '.repeat(level)}- ${file}${
              sumOfPath[nextPathStr] ? `(${sumOfPath[nextPathStr]})` : ''
            }\n`,
            {
              flag: 'a',
            },
          );
        }

        eachTree(node[file], nextPathStr, path.join(parents, file), level + 1);
        continue;
      }

      const hasVisual = !!node[file + '.visual'];
      const hasService = !!node[file + '.service'];

      fs.writeFileSync(
        paths.readme,
        `${'  '.repeat(
          level,
        )}- [${file}](https://github.com/tolerance-go/keep-learning/blob/${branchName}/src/${path.join(
          encodeURIComponent(parents),
          encodeURIComponent(node[file].base),
        )}) ${
          hasVisual
            ? `[:stars:](http://47.92.70.143:8000/?path=/story/${encodeURIComponent(
                file,
              )})`
            : ''
        } ${
          hasService
            ? `[:zap:](http://47.92.70.143:3000/${encodeURIComponent(
                file,
              )})`
            : ''
        }\n`,
        {
          flag: 'a',
        },
      );
    }
  };

  eachTree(tree);
};

const exportTree = () => {
  fs.writeFileSync(paths.treeAsset, JSON.stringify(tree));
  fs.writeFileSync(paths.treePathAsset, JSON.stringify(sumOfPath));
};

readSrc();
exportTree();
writeReadme();
