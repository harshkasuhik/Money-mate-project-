const transactiondata  = require("../Database/tranasction");

const delettrans = (req, res) => {
  const id = Number(req.params.id);

  const index = transactiondata.findIndex(
    (item) => item.id === id
  );

  if (index === -1) {
    return res.status(404).send("Transaction nahi mila");
  }

  transactiondata.splice(index, 1);

  res.send("Successfully deleted");
};

module.exports = delettrans;