# 软件工程课设
## 项目配置文件——config.json
放置在项目根目录，格式如下
```JSON
{
    "port": /*Number*/,             //API端口号
    "dbHost": /*String*/,           //数据库主机名
    "dbName": /*String*/,           //数据库名称
    "dbUser": /*String*/,           //数据库用户
    "dbPassword": /*String*/,       //数据库密码
    "tokenKey": /*String*/,         //token签发密钥
    "adminRegistKey": /*String*/    //管理员注册密码
}
```
## /用户
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /用户/用户密码修改
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/user/change-password

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"oldPassword": "18376787150",
	"newPassword": "3843831"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
#### 成功响应示例
```javascript
{"state":0,"msg":"旧密码不正确"}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 0 | Text | 状态码
msg | 旧密码不正确 | Text | 返回文字描述
## /用户/用户头像修改
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/user/edit-avatar

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
avatar | C:\Users\luolei\Desktop\secondhand-market\src\assets\avatar.jpg | File | 是 | 
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
#### 成功响应示例
```javascript
{"state":0,"msg":"没有上传头像"}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 0 | Text | 状态码
msg | 没有上传头像 | Text | 返回文字描述
## /用户/用户信息修改
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/user/edit

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"username": "luolei",
	"email": "1074366993@qq.com",
	"phone": "18376787150"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
#### 成功响应示例
```javascript
{"state":0,"msg":"此用户名已经被注册了"}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 0 | Text | 状态码
msg | 此用户名已经被注册了 | Text | 返回文字描述
## /用户/用户自动登录
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/user/auto-login

#### 请求方式
> POST

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1,"user":{"id":1,"username":"luolei","avatar":null,"email":null,"phone":null,"createdAt":"2021-05-01T11:15:38.000Z"}}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
user |  | Text | 用户信息
user.id | 1 | Text | 用户id
user.username | luolei | Text | 用户名
user.avatar |  | Text | 头像
user.email |  | Text | 邮箱
user.phone |  | Text | 电话
user.createdAt | 2021-05-01T11:15:38.000Z | Text | 创建时间
## /用户/用户登录
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/user/login

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"username": "luolei1",
	"password": "3843831"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"state": 1,
	"token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYxOTg2Nzg5MSwiZXhwIjoxNjIwMDQwNjkxfQ.zk4LVsi6ZItawBatbE4GumBnHHLP1MRkXkHl6knep4s",
	"user": {
		"id": 1,
		"username": "luolei",
		"avatar": null,
		"email": null,
		"phone": null,
		"createdAt": "2021-05-01T11:15:38.000Z"
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
token | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYxOTg2Nzg5MSwiZXhwIjoxNjIwMDQwNjkxfQ.zk4LVsi6ZItawBatbE4GumBnHHLP1MRkXkHl6knep4s | Text | 认证令牌
user |  | Text | 用户信息
user.id | 1 | Text | 用户id
user.username | luolei | Text | 用户名
user.avatar |  | Text | 头像
user.email |  | Text | 邮箱
user.phone |  | Text | 电话
user.createdAt | 2021-05-01T11:15:38.000Z | Text | 创建时间
#### 成功响应示例
```javascript
{"state":0,"msg":"用户名或密码错误"}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 0 | Text | 状态码
msg | 用户名或密码错误 | Text | 返回文字描述
## /用户/用户注册
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/user/regist

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"username": "luolei",
	"password": "3843831"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1,"token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYxOTg2NzgwNSwiZXhwIjoxNjIwMDQwNjA1fQ.KHNHdYB1BcVGWRY0y745_dLnQlIHYkA0k8qN2EnQArA","user":{"id":2,"username":"luolei1","createdAt":"2021-05-01T11:16:45.209Z"}}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
token | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYxOTg2NzgwNSwiZXhwIjoxNjIwMDQwNjA1fQ.KHNHdYB1BcVGWRY0y745_dLnQlIHYkA0k8qN2EnQArA | Text | 认证令牌
user |  | Text | 用户信息
user.id | 2 | Text | 用户id
user.username | luolei1 | Text | 用户名
user.createdAt | 2021-05-01T11:16:45.209Z | Text | 创建时间
#### 成功响应示例
```javascript
{"state":0,"msg":"此用户名已经被注册了"}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 0 | Text | 状态码
msg | 此用户名已经被注册了 | Text | 返回文字描述
## /收货地址
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /收货地址/收货地址编辑
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/address/edit

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 3,
	"name": "罗磊",
	"phone": "1837678715",
	"area": "广西/南宁",
	"detail": "xxxxxxx",
	"postCode": "530002"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
## /收货地址/收货地址删除
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/address/delete

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 1
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
#### 成功响应示例
```javascript
{"state":0,"msg":"没有找到此地址或此地址不属于此用户"}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 0 | Text | 状态码
msg | 没有找到此地址或此地址不属于此用户 | Text | 返回文字描述
## /收货地址/收货地址添加
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/address/add

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"name": "罗磊",
	"phone": "1837678715",
	"area": "广西/南宁",
	"detail": "xxxxxxx",
	"postCode": "530001"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
#### 成功响应示例
```javascript
{"state":0,"msg":"notNull Violation: Address.detail cannot be null"}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 0 | Text | 状态码
msg | notNull Violation: Address.detail cannot be null | Text | 返回文字描述
## /管理员
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /管理员/注册
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/admin/regist

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"username": "luolei",
	"password": "3843831",
	"adminRegistKey": "3843831"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1,"token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2MTk4NzAzMjYsImV4cCI6MTYyMDA0MzEyNn0.qHMxQ73I3TRclJu1AGqQaRDBlvTyvrs07p7RFoh3nqM","admin":{"id":1,"username":"luolei"}}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
token | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2MTk4NzAzMjYsImV4cCI6MTYyMDA0MzEyNn0.qHMxQ73I3TRclJu1AGqQaRDBlvTyvrs07p7RFoh3nqM | Text | 认证令牌
admin |  | Text | 管理员
admin.id | 1 | Text | 管理员id
admin.username | luolei | Text | 管理员用户名
## /管理员/登录
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/admin/login

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"username": "luolei",
	"password": "3843831"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1,"token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2MTk4NzA0MTYsImV4cCI6MTYyMDA0MzIxNn0.4I0HnBL15Mb1FAei0tO5KJBC8mUwGHZA28NZG1yxEzY","admin":{"id":1,"username":"luolei","avatar":null,"email":null,"phone":null}}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
token | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2MTk4NzA0MTYsImV4cCI6MTYyMDA0MzIxNn0.4I0HnBL15Mb1FAei0tO5KJBC8mUwGHZA28NZG1yxEzY | Text | 认证令牌
admin |  | Text | 管理员
admin.id | 1 | Text | 管理员id
admin.username | luolei | Text | 管理员用户名
admin.avatar |  | Text | 管理员头像
admin.email |  | Text | 管理员邮箱
admin.phone |  | Text | 管理员电话
## /管理员/自动登录
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/admin/auto-login

#### 请求方式
> POST

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /管理员/修改头像
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/admin/edit-avatar

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
avatar | C:\Users\luolei\Desktop\secondhand-market\src\assets\avatar.jpg | File | 是 | 
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /管理员/信息修改
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/admin/edit

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"username": "luolei",
	"email": "1074366993@qq.com",
	"phone": "18376787150"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"state":1}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
state | 1 | Text | 状态码
## /管理员/修改密码
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/admin/change-password

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"oldPassword": "18376787150",
	"newPassword": "3843831"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /管理员/删除商品
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/commodity/admin-delete

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 6
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /分类
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /分类/添加
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/category/add

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 小米手机 | Text | 是 | 
image | C:\Users\luolei\Desktop\secondhand-market\src\assets\category\xiaomi.png | File | 是 | 
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /分类/删除
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/category/delete

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 1
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /分类/编辑
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/category/edit

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 2 | Text | 是 | 
name | 小米手机 | Text | 是 | 
image | C:\Users\luolei\Desktop\secondhand-market\src\assets\category\xiaomi.png | File | 是 | 
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /分类/列表
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/category/list

#### 请求方式
> GET

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /商品
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /商品/分类列表
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/commodity/category?id=2

#### 请求方式
> GET

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 2 | Text | 是 | 
#### 请求Body参数
```javascript

```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /商品/详情
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/commodity/14

#### 请求方式
> GET

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /商品/添加
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/commodity/add

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
title | 小米11 | Text | 是 | 
info | 小米最新旗舰 | Text | 是 | 
area | 广西/南宁 | Text | 是 | 
price | 1999.99 | Text | 是 | 
mainImg | C:\Users\luolei\Desktop\secondhand-market\src\assets\phone\小米11.png | File | 是 | 
categoryId | 2 | Text | 是 | 
detailImgs | C:\Users\luolei\Desktop\secondhand-market\src\assets\category\huawei.jpg|C:\Users\luolei\Desktop\secondhand-market\src\assets\category\xiaomi.png | File | 是 | 
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /商品/删除
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/commodity/delete

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 11
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /商品/编辑
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/commodity/edit

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 14 | Text | 是 | 
title | 小米12 | Text | 是 | 
info | 小米最新旗舰 | Text | 是 | 
area | 广西/南宁 | Text | 是 | 
price | 1999.99 | Text | 是 | 
mainImg | C:\Users\luolei\Desktop\secondhand-market\src\assets\phone\小米11.png | File | 是 | 
categoryId | 2 | Text | 是 | 
detailImgs | C:\Users\luolei\Desktop\secondhand-market\src\assets\category\huawei.jpg|C:\Users\luolei\Desktop\secondhand-market\src\assets\category\xiaomi.png | File | 是 | 
detailImgs | uMl3YzOmxBIuXtTyGNou1.jpg | Text | 是 | 
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /商品/列表
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/commodity/list

#### 请求方式
> GET

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /商品/搜索
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/commodity/search

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"title": "小米"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /通知
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /通知/删除
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/notice/delete

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 2
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /通知/发送
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/notice/add

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"content": "123",
	"userId": 2
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /通知/通知列表
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/notice/list

#### 请求方式
> GET

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /通知/查看通知
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/notice/1

#### 请求方式
> GET

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /购买记录
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /购买记录/列表
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/purchase/list

#### 请求方式
> GET

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /购买记录/详情
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/purchase/1

#### 请求方式
> GET

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /购买记录/删除
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/purchase/delete

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 1
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /购物车
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /购物车/列表
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/shoppingCart/list

#### 请求方式
> GET

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /购物车/添加
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/shoppingCart/add

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"commodityId": 14
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /购物车/删除
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/shoppingCart/delete

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 2
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /交易
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/transaction

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"commodityId": 14,
	"name": "罗磊",
	"phone": "18376787150",
	"area": "广西/南宁",
	"detail": "xxxx",
	"postCode": "530001"
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /卖出记录
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /卖出记录/列表
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/sale/list

#### 请求方式
> GET

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /卖出记录/详情
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/sale/1

#### 请求方式
> GET

#### Content-Type
> form-data

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /卖出记录/删除
```text
暂无描述
```
#### 接口状态
> 开发中

#### 接口URL
> localhost:3000/sale/delete

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"id": 1
}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```