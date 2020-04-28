# http常见的状态码有哪些

## 1xx 信息性状态码（Information）

服务器正在处理请求

## 2xx 成功状态码（Success）

请求正常处理完毕

- 200 OK

  请求正常处理完毕

- 204 No Content

  请求成功处理，没有实体的主体返回

## 3xx 重定向状态码（Redirection）

需要进行额外操作以完成请求

- 301 Moved Permanently

  永久重定向，资源已永久分配新 URI

- 302 Found

  临时重定向，资源已临时分配新 URI

## 4xx 客户端错误状态码（Client Error）

客户端原因导致服务器无法处理请求

- 400 Bad Request

  请求报文语法错误或参数错误

- 401 Unauthorized

  要通过 HTTP 认证，或认证失败

- 403 Forbidden

  请求资源被拒绝

- 404 Not Found

  无法找到请求资源（服务器无理由拒绝）

## 5xx 服务器错误状态码（Server Error）

服务器原因导致处理请求出错

- 500 Internal Server Error

  服务器故障或 Web 应用故障

- 501 Not Implemented

  服务器不支持请求的功能，无法完成请求

- 502 Bad Gateway

  充当网关或代理的服务器，从远端服务器接收到了一个无效的响应

- 504 Gateway Time-out

  充当网关或代理的服务器，响应远端服务器超时

- 503 Service Unavailable

  服务器超负载或停机维护


---

上一题：[https获取加密密钥的过程是什么](https://github.com/tolerance-go/keep-learning/blob/master/output/前端/http(s)/https获取加密密钥的过程是什么.md)

下一题：[http的方法有哪几种](https://github.com/tolerance-go/keep-learning/blob/master/output/前端/http(s)/http的方法有哪几种.md)