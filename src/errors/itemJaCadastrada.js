class ItemJaCadastrado extends Error {
  constructor() {
    super("Item já cadastrado!")
    this.id = 5
    this.name = "ItemJaCadastrado"
  }
}

module.exports = ItemJaCadastrado
