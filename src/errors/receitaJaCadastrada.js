class ReceitaJaCadastrada extends Error {
  constructor() {
    super("Receita já cadastrada!")
    this.id = 5
    this.name = "ReceitaJaCadastrada"
  }
}

module.exports = ReceitaJaCadastrada
