import fs from 'fs';
import path from 'path';

const cwd = process.cwd();

const paths = {
  src: path.join(__dirname, '../src'),
  qaAsset: path.join(cwd, 'assets/qa.json'),
};

const names = {
  root: 'root',
  src: 'src',
};

const data = {};

const qaCollector = (container) => (title, callback) => {
  const q = (qus) => ({
    a: (ans) => {
      container[title]
        ? (container[title][qus] = ans)
        : (container[title] = { [qus]: ans });
    },
  });

  callback(q);
};

const load = (folder = paths.src, pathArr = []) => {
  const files = fs.readdirSync(folder);
  files.forEach((file) => {
    const ps = path.join(folder, file);

    const s = fs.statSync(ps);
    const meta = path.parse(ps);
    const { name } = meta;

    if (s.isDirectory()) {
      load(ps, [...pathArr, file]);
      return;
    }

    if (/.*\.qa.(t|j)sx?$/.test(file)) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { default: qaGenerate } = require(ps);
      // remove .qa
      const [fileName] = name.split('.');

      let parentPath;
      let mainFileName;

      if (fileName === 'index') {
        parentPath = pathArr.slice(0, -1);
        mainFileName = pathArr[pathArr.length - 1].split('.')[0];
      } else {
        parentPath = pathArr;
        mainFileName = fileName;
      }

      const tempData = {};
      qaGenerate(qaCollector(tempData));

      data[path.join(...pathArr, mainFileName)] = tempData;
    }
  });
};

const exportData = () => {
  fs.writeFileSync(paths.qaAsset, JSON.stringify(data));
};

load();
exportData();
