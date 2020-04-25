export default (router, api) => {
  /**
   * @swagger
   *
   * /水平垂直居中布局的方式有哪些:
   *   get:
   *     description: 测试接口
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: test ok
   */
  router.get(api, async (ctx) => (ctx.body = 'test ok'));
};
