# 如何删除 stash

## 清空列表

`git stash list` 查看列表，`git stash clear` 可以清空所有列表内容

## 删除指定内容

`git stash drop stash@{0}` 这里表示丢弃下标为 0 的暂存内容
