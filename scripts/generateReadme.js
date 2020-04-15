const fs = require("fs");
const path = require("path");

const cwd = process.cwd();
const folderFlag = "folder";

const paths = {
  src: path.join(cwd, "src"),
  utils: path.join(cwd, "src/utils.js"),
  readme: path.join(cwd, "README.md"),
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
  fs.writeFileSync(paths.readme, `# keep-learning\n\n`, { flag: "w" });

  const eachTree = (node, parents = "", level = 0) => {
    for (let file in node) {
      if (file === folderFlag) continue;

      if (typeof node[file] === "object" && node[file][folderFlag]) {
        fs.writeFileSync(paths.readme, `- ${file}\n`, { flag: "a" });
        eachTree(node[file], path.join(parents, file), level + 1);
        continue;
      }
      fs.writeFileSync(
        paths.readme,
        `${"  ".repeat(level)}- [${file}](${path.join(
          "https://github.com/tolerance-go/keep-learning/blob/master/src",
          parents,
          node[file].base
        )})\n`,
        {
          flag: "a",
        }
      );
    }
  };

  eachTree(tree);
};

readSrc();
writeReadme();
