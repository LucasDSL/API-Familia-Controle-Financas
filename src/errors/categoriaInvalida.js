class CategoriaInvalida extends Error {
  constructor() {
    super("Categoria fornecida é inválida!")
    this.id = 4
    this.name = "CategoriaInvalida"
  }
}

module.exports = CategoriaInvalida
