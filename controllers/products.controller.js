const products = require('../assets/products.json')

exports.getProducts = (req, res) => {
  const requiredType = req.params.type
  const results = products.filter((product) => product.type === requiredType)

  if (results.length === 0) {
    res.send('Aucun résultat')
  } else {
    res.send(results)
  }
}

exports.searchProducts = (req, res) => {
  const searchQuery = req.params.searchquery
  const results = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  res.send(results)
}
