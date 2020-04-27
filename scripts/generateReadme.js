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

const names = {
  output: 'output',
  root: 'root',
  src: 'src',
};

const tree = {
  [folderFlag]: path.parse(paths.src),
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

const fileIsOrigin = (node) => {
  const info = node[folderFlag] || node;
  return info.ext === '.origin' || info.name.endsWith('origin');
};

const fileIsFolder = (fileMeta) => {
  return fileMeta[folderFlag];
};

const readTree = (folder = paths.src, node = tree, pathArr = [names.root]) => {
  const files = fs.readdirSync(folder);
  files.forEach((file) => {
    const p = path.join(folder, file);

    if (p === paths.utils) return;

    const s = fs.statSync(p);
    const info = path.parse(p);
    const { name } = info;

    if (fileIsOrigin(info)) {
      addOfPaths(pathArr);
    }

    if (s.isDirectory()) {
      node[name] = {
        [folderFlag]: {
          ...info,
          mainName: info.name.split('.')[0],
        },
      };
      readTree(p, node[name], [...pathArr, name]);
      return;
    }

    node[name] = {
      ...info,
      mainName: info.name.split('.')[0],
    };
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

const getTestLink = (parentsPathRelativeRoot, mainFileName, parentNode) => {
  return `[⛱️](https://github.com/tolerance-go/keep-learning/blob/${branchName}/src/${encodeURIComponent(
    path.join(parentsPathRelativeRoot, parentNode[mainFileName + '.test'].base),
  )})`;
};

const getCodeLink = (parentsPathRelativeRoot, mainFileName, parentNode) => {
  return `[💻](https://github.com/tolerance-go/keep-learning/blob/${branchName}/src/${encodeURIComponent(
    path.join(parentsPathRelativeRoot, parentNode[mainFileName + '.code'].base),
  )})`;
};

const getGithubSourceLink = (
  title,
  parentsPathRelativeRoot,
  baseFileName,
  root = 'output',
) => {
  return `[${title}](https://github.com/tolerance-go/keep-learning/blob/${branchName}/${root}/${encodeURIComponent(
    path.join(parentsPathRelativeRoot, baseFileName),
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

const writeOriginReadme = () => {
  const dfs = (node, res = []) => {
    if (node && !node[folderFlag]) {
      if (fileIsOrigin(node)) {
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

  const writeOriginToOutput = (
    fileInfo,
    parentsPath,
    node,
    mainFileName = fileInfo.mainName,
  ) => {
    const { hasVisual, hasService, hasTest, hasCode } = getFileType(
      node,
      mainFileName,
    );

    const headline = `# ${fileInfo.mainName}${
      hasCode ? ` ${getCodeLink(parentsPath, mainFileName, node)}` : ''
    }${hasVisual ? ` ${getVisualLink(fileInfo.mainName)}` : ''}${
      hasService ? ` ${getServiceLink(fileInfo.mainName)}` : ''
    }${hasTest ? ` ${getTestLink(parentsPath, mainFileName, node)}` : ''}`;

    const index = originFileList.findIndex(
      (item) => item.name === fileInfo.name,
    );
    const pre = originFileList[index - 1];
    const next = originFileList[index + 1];

    const footer = `---\n\n${
      pre
        ? `上一题：${getGithubSourceLink(
            pre.mainName,
            pre.dir.replace(path.join(process.cwd(), names.src, '/'), ''),
            pre.mainName + '.md',
          )}`
        : ''
    }${
      next
        ? `${pre ? '\n\n' : ''}下一题：${getGithubSourceLink(
            next.mainName,
            next.dir.replace(path.join(process.cwd(), names.src, '/'), ''),
            next.mainName + '.md',
          )}`
        : ''
    }`;

    return {
      headline,
      footer,
    };
  };

  const eachTree = (
    node,
    pathStr = names.root,
    parentsPath = '',
    level = 0,
  ) => {
    for (let fileName in node) {
      if (fileName === folderFlag) continue;
      const childNode = node[fileName];

      if (childNode[folderFlag]) {
        const folderInfo = childNode[folderFlag];
        const folderOriginType = folderInfo.ext === '.origin';

        if (folderOriginType) {
          const folderInfo = childNode[folderFlag];

          const { headline, footer } = writeOriginToOutput(
            folderInfo,
            parentsPath,
            node[folderInfo.name],
            node[folderInfo.name].index.name,
          );

          const outPath = path.join(
            folderInfo.dir.replace(names.src, names.output),
          );

          try {
            fs.statSync(outPath).isDirectory();
          } catch {
            fs.mkdirSync(outPath, { recursive: true });
          }

          fs.writeFileSync(
            path.join(outPath, folderInfo.name + '.md'),
            `${headline}\n\n${fs.readFileSync(
              path.join(folderInfo.dir, folderInfo.base, childNode.index.base),
            )}\n\n${footer}`,
            {
              flag: 'w',
            },
          );
        }

        const nextPathStr = pathStr + '-' + fileName;

        eachTree(
          childNode,
          nextPathStr,
          path.join(parentsPath, fileName),
          level + 1,
        );
        continue;
      }

      const fileInfo = childNode;
      if (fileIsOrigin(fileInfo)) {
        const { headline, footer } = writeOriginToOutput(
          fileInfo,
          parentsPath,
          node,
        );

        const outPath = fileInfo.dir.replace(names.src, names.output);

        try {
          fs.statSync(outPath).isDirectory();
        } catch {
          fs.mkdirSync(outPath, { recursive: true });
        }

        fs.writeFileSync(
          path.join(outPath, fileInfo.mainName + '.md'),
          `${headline}\n\n${fs.readFileSync(
            path.join(fileInfo.dir, fileInfo.base),
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

  const eachTree = (
    node,
    keyPath = names.root,
    parentsPath = '',
    level = 0,
  ) => {
    for (let fileName in node) {
      if (fileName === folderFlag) continue;

      const childNode = node[fileName];

      if (!fileIsFolder(childNode) && !fileIsOrigin(childNode)) continue;

      const originFileName = fileName;
      const mainFileName = originFileName.split('.')[0];

      const folderInfo = childNode[folderFlag];

      if (folderInfo) {
        const folderOriginType = folderInfo.ext === '.origin';
        const nextPathStr = keyPath + '-' + mainFileName;

        // 如果目录下存在 index，则设置链接
        if ('index' in childNode) {
          // 文件夹形式存在的 .origin
          if (folderOriginType) {
            const { hasVisual, hasService, hasTest, hasCode } = getFileType(
              node[folderInfo.name],
              node[folderInfo.name].index.name,
            );

            fs.writeFileSync(
              paths.readme,
              `${'  '.repeat(level)}- ${getGithubSourceLink(
                mainFileName,
                parentsPath,
                path.join(folderInfo.base, childNode.index.base),
                names.output,
              )}${
                hasCode
                  ? ` ${getCodeLink(
                      path.join(parentsPath, folderInfo.name),
                      node[folderInfo.name].index.name,
                      node[folderInfo.name],
                    )}`
                  : ''
              }${hasVisual ? ` ${getVisualLink(mainFileName)}` : ''}${
                hasService ? ` ${getServiceLink(mainFileName)}` : ''
              }${
                hasTest
                  ? ` ${getTestLink(
                      path.join(folderInfo.base, folderInfo.name),
                      node[folderInfo.name].index.name,
                      node[folderInfo.name],
                    )}`
                  : ''
              }\n`,
              {
                flag: 'a',
              },
            );
          } else {
            fs.writeFileSync(
              paths.readme,
              `${'  '.repeat(level)}- ${getGithubSourceLink(
                mainFileName,
                parentsPath,
                path.join(mainFileName, childNode.index.base),
                names.output,
              )}${
                sumOfPath[nextPathStr] ? `(${sumOfPath[nextPathStr]})` : ''
              }\n`,
              {
                flag: 'a',
              },
            );
          }
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
          childNode,
          nextPathStr,
          path.join(parentsPath, mainFileName),
          level + 1,
        );
        continue;
      }

      //// 一般 origin 文件处理
      const fileInfo = childNode;
      const { hasVisual, hasService, hasTest, hasCode } = getFileType(
        node,
        mainFileName,
      );

      fs.writeFileSync(
        paths.readme,
        `${'  '.repeat(level)}- ${getGithubSourceLink(
          mainFileName,
          parentsPath,
          mainFileName + '.md',
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

readTree();
exportTree();
writeOriginReadme();
writeRootReadme();
