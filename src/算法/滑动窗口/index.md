# 框架模型

```js
let left = 0,
  right = 0;

while (right < s.length) {
  window.add(s[right]);
  right++;

  while (valid) {
    window.remove(s[left]);
    left++;
  }
}
```
