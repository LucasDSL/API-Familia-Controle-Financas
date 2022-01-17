class NenhumItemEncontrado extends Error {
  constructor() {
    super("Nenhum item foi encontrado!")
    this.id = 2
    this.name = "NenhumItemEncontrado"
  }
}

module.exports = NenhumItemEncontrado
