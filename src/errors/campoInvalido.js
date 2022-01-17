class CampoInvalido extends Error {
  constructor(campo) {
    const mensagem = `O campo ${campo} não é válido para atualização! Só é possível atualizar os campos 'data', 'valor' e 'descricao'.`
    super(mensagem)
    this.id = 3
    this.name = "CampoInvalido"
  }
}

module.exports = CampoInvalido
