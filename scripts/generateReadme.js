/**
 * fileName = 水平居中.origin
 * baseFileName = 水平居中.origin.md
 * mainFileName = 水平居中
 */

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

const tree = {
  [folderFlag]: true,
};

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

// const findNode = (node, search) => {
//   if (!node[folderFlag]) return;
//   for (const key in node) {
//     if (key === folderFlag) continue;
//     const child = node[key];
//     if (key === search) {
//       return child;
//     }
//     findNode(child, search);
//   }
// };

const fileNameIsMain = (fileName) => {
  return !(
    fileName === 'index' ||
    fileName.endsWith('visual') ||
    fileName.endsWith('service') ||
    fileName.endsWith('test') ||
    fileName.endsWith('origin') ||
    fileName.endsWith('code')
  );
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

    node[name] = {
      ...meta,
      mainName: meta.name.split('.')[0],
    };

    if (fileNameIsMain(meta.name)) {
      addOfPaths(pathArr);
    }
  });

  return node;
};

const getVisualLink = (mainFileName) => {
  return `[🌈](http://47.92.70.143:8000/?path=/story/${encodeURIComponent(
    mainFileName,
  )})`;
};

const getServiceLink = (mainFileName) => {
  return `[🍕](http://47.92.70.143:3000/${encodeURIComponent(mainFileName)})`;
};

const getTestLink = (parentsPathRelativeSrc, mainFileName, parentNode) => {
  return `[⛱️](https://github.com/tolerance-go/keep-learning/blob/${branchName}/src/${path.join(
    encodeURIComponent(parentsPathRelativeSrc),
    encodeURIComponent(parentNode[mainFileName + '.test'].base),
  )})`;
};

const getCodeLink = (parentsPathRelativeSrc, mainFileName, parentNode) => {
  return `[💻](https://github.com/tolerance-go/keep-learning/blob/${branchName}/src/${path.join(
    encodeURIComponent(parentsPathRelativeSrc),
    encodeURIComponent(parentNode[mainFileName + '.code'].base),
  )})`;
};

const getGithubSourceLink = (parentsPathRelativeSrc, title, baseFileName) => {
  return `[${title}](https://github.com/tolerance-go/keep-learning/blob/${branchName}/src/${path.join(
    encodeURIComponent(parentsPathRelativeSrc),
    encodeURIComponent(baseFileName),
  )})`;
};

const getFileType = (node, mainFileName) => {
  const hasVisual = !!node[mainFileName + '.visual'];
  const hasService = !!node[mainFileName + '.service'];
  const hasTest = !!node[mainFileName + '.test'];
  const hasCode = !!node[mainFileName + '.code'];
  return {
    hasVisual,
    hasService,
    hasTest,
    hasCode,
  };
};

const writeSrcReadme = () => {
  const dfs = (node, res = []) => {
    if (node && !node.folder) {
      if (node.ext === '.md' && node.name.endsWith('origin')) {
        res.push(node);
      }
      return;
    }

    for (const key in node) {
      dfs(node[key], res);
    }

    return res;
  };

  const originFileList = dfs(tree);

  const eachTree = (node, pathStr = 'root', parentsPath = '', level = 0) => {
    for (let fileName in node) {
      const fileMeta = node[fileName];

      if (typeof fileMeta === 'object' && fileMeta[folderFlag]) {
        const nextPathStr = pathStr + '-' + fileName;

        eachTree(
          fileMeta,
          nextPathStr,
          path.join(parentsPath, fileName),
          level + 1,
        );
        continue;
      }

      if (fileMeta.ext === '.md' && fileMeta.name.endsWith('origin')) {
        const mainFileName = fileMeta.name.split('.')[0];

        const { hasVisual, hasService, hasTest, hasCode } = getFileType(
          node,
          mainFileName,
        );

        const headline = `# ${mainFileName}${
          hasCode ? ` ${getCodeLink(parentsPath, mainFileName, node)}` : ''
        }${hasVisual ? ` ${getVisualLink(mainFileName)}` : ''}${
          hasService ? ` ${getServiceLink(mainFileName)}` : ''
        }${hasTest ? ` ${getTestLink(parentsPath, mainFileName, node)}` : ''}`;

        const index = originFileList.findIndex(
          (item) => item.name === fileMeta.name,
        );
        const pre = originFileList[index - 1];
        const next = originFileList[index + 1];

        const footer = `---\n\n${
          pre
            ? `上一题：${getGithubSourceLink(
                pre.dir.replace(path.join(process.cwd(), 'src/') , ''),
                pre.mainName,
                pre.mainName + '.md',
              )}`
            : ''
        }${
          next
            ? `${pre ? '\n\n' : ''}下一题：${getGithubSourceLink(
                next.dir.replace(path.join(process.cwd(), 'src/') , ''),
                next.mainName,
                next.mainName + '.md',
              )}`
            : ''
        }`;

        fs.writeFileSync(
          path.join(fileMeta.dir, mainFileName + '.md'),
          `${headline}\n\n${fs.readFileSync(
            path.join(fileMeta.dir, fileMeta.base),
          )}\n\n${footer}`,
          {
            flag: 'w',
          },
        );
      }
    }
  };

  eachTree(tree);
};

const writeRootReadme = () => {
  fs.writeFileSync(paths.readme, fs.readFileSync(paths.readmeHead) + '\n', {
    flag: 'w',
  });

  fs.writeFileSync(paths.readme, `总数(${sumOfPath.root})\n\n`, {
    flag: 'a',
  });

  const eachTree = (node, keyPath = 'root', parentsPath = '', level = 0) => {
    for (let fileName in node) {
      if (fileName === folderFlag) continue;
      if (!fileNameIsMain(fileName)) continue;

      const mainFileName = fileName;
      const mainFileMeta = node[mainFileName];

      if (typeof mainFileMeta === 'object' && mainFileMeta[folderFlag]) {
        const nextPathStr = keyPath + '-' + mainFileName;

        // 如果目录下存在 index，则设置链接
        if ('index' in mainFileMeta) {
          fs.writeFileSync(
            paths.readme,
            `${'  '.repeat(
              level,
            )}- [${mainFileName}](https://github.com/tolerance-go/keep-learning/blob/${branchName}/src/${path.join(
              encodeURIComponent(parentsPath),
              encodeURIComponent(mainFileName),
              encodeURIComponent(mainFileMeta.index.base),
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
            `${'  '.repeat(level)}- ${mainFileName}${
              sumOfPath[nextPathStr] ? `(${sumOfPath[nextPathStr]})` : ''
            }\n`,
            {
              flag: 'a',
            },
          );
        }

        eachTree(
          mainFileMeta,
          nextPathStr,
          path.join(parentsPath, mainFileName),
          level + 1,
        );
        continue;
      }

      const { hasVisual, hasService, hasTest, hasCode } = getFileType(
        node,
        mainFileName,
      );

      fs.writeFileSync(
        paths.readme,
        `${'  '.repeat(level)}- ${getGithubSourceLink(
          parentsPath,
          mainFileName,
          mainFileMeta.base,
        )}${hasCode ? ` ${getCodeLink(parentsPath, mainFileName, node)}` : ''}${
          hasVisual ? ` ${getVisualLink(mainFileName)}` : ''
        }${hasService ? ` ${getServiceLink(mainFileName)}` : ''}${
          hasTest ? ` ${getTestLink(parentsPath, mainFileName, node)}` : ''
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
writeSrcReadme();
writeRootReadme();
exportTree();
