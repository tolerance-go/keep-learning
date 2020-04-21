# 发布策略

概述：主干发布，分支开发

通过 github pr 进行开发，每一个 pr 都要打上 label，以便生成正确的 changelog

注意：因为项目是把源码和构建产物都存放在一起管理的，这里就将源码及其副作用影响都算在了一个版本范围内了，也就是版本号打在 build 之后

## 分支分类

- master
- ~~develop~~
- feat/xxx
- fix/xxx
- vx.x.x
- feat-vx.x.x/xxx
- fix-vx.x.x/xxx

~~develop 从 master 切出后，永不回去，也就是只有 develop 向 master 合并~~

目前 develop 分支也省略，之前考虑是构建产物和源码放在一起，所以用一个分支来做缓存，但是一个人开发还是挺麻烦的，现在的方式是增量的 PR 直接合并，修改构建源的 PR 手动构建后提交，不等发布时构建

目前开发和测试是同一个人，所以没有 release 分支

注意：当新的大版本发布，旧版本相应的独立切出一个分支出来，以便维护；如果旧版本发生的问题，需要在当前版本同样检查一次

## 发布流程

1. 从 master 新建分支 feat 功能分支或者 fix 问题修复分支，开发工作完成后，merge to master
2. 一旦准备发布，提交 pr from master to master
3. 在 master 分支生成 changelog 和 构建产物并提交新的 commit，同时在顶部打上 tag
4. ~~推送 master 到远程即可，推送前会触发构建，将副作用的影响代码都输出，因为可能利用到 branch name，所以是在 pre-push 前进行~~

如果要回溯版本，将当前 commit 重置到上一个 tag 对应的 commit 即可

## 版本规范

版本号语义规范严格遵循 [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/)

tag msg 格式遵循 `version x.x.x`

tag name 格式遵循 `vx.x.x`

commit msg 格式遵循 `publish: vx.x.x`
