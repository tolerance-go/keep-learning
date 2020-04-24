export default (router, api) => {
  router.get(api, async (ctx) => (ctx.body = 'test ok'));
};
