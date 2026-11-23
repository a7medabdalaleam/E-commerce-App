module.exports = async (req, res) => {
  const { reqHandler } = await import('../dist/fresh-ecommerce/server/server.mjs');
  return reqHandler(req, res);
};
