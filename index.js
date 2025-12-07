// 简单的示例应用程序
console.log('欢迎使用 lingma-test-repo!');

function greet(name) {
  return `你好, ${name}!`;
}

// 使用示例
const userName = 'GitHub 用户';
console.log(greet(userName));

// 导出函数供其他模块使用
module.exports = { greet };