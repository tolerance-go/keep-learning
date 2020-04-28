export default (qa) => {
  qa('null的作用是什么', (q) => {
    q('null的作用是什么').a('标记进入下一层');
  });
};
