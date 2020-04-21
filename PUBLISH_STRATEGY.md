# 发布策略

概述：主干发布，分支开发

通过 github pr 进行开发，每一个 pr 都要打上 label，以便生成正确的 changelog

对于 tag commit 会触发 ci 的构建流程，将构建产物通过提交一个 commit 推送 rep master 分支，所以不要在其它的分支打 tag

## 分支分类

- master
- develop
- feat/xxx
- fix/xxx
- vX.X.X
- feat-vX.X.X/xxx
- fix-vX.X.X/xxx

develop 从 master 切出后，永不回去，也就是只有 develop 向 master 合并

目前开发和测试是同一个人，所以没有 release 分支

注意：当新的大版本发布，旧版本相应的独立切出一个分支出来，以便维护；如果旧版本发生的问题，需要在当前版本同样检查一次

## 发布流程

1. 从 develop 新建分支 feat 功能分支或者 fix 问题修复分支，开发工作完成后，merge to develop
2. 一旦准备发布，提交 pr from develop to master
3. 在 master 分支生成 changelog 并提交新的 commit，同时在顶部打上 tag
4. 推送 master 到远程即可；ci 接收到有 tag 信息的 commit 后，会触发构建，提交一个 commit 把构建产物推送到 repo

如果要回溯版本，将当前 commit 重置到上一个 tag 对应的 commit 即可
