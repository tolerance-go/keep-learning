export default (router) => {
  /**
   * @swagger
   *
   * /test:
   *   get:
   *     description: 测试接口
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: test ok
   */
  router.get('/test', async (ctx) => (ctx.body = 'test ok'));
};
