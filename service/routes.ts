import Router from 'koa-router';
import fs from 'fs';
import path from 'path';

const router = new Router();

const paths = {
  src: path.join(__dirname, '../src'),
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

    if (/.*\.service.(t|j)sx?$/.test(file)) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { default: apiGenerator } = require(ps);
      // remove .service
      const [fileName] = name.split('.');

      let parentArr;
      let mainFileName;

      if (fileName === 'index') {
        parentArr = pathArr.slice(0, -1);
        mainFileName = pathArr[pathArr.length - 1].split('.')[0];
      } else {
        parentArr = pathArr;
        mainFileName = fileName;
      }

      apiGenerator(
        router,
        encodeURI(path.join('/', ...parentArr, mainFileName)),
      );
    }
  });
};

router.get('/', async (ctx) => (ctx.body = 'hello world'));

load();

export const routes = router.routes();
