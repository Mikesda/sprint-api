module.exports = async (req, res) => {
   const cpf = req.body.cpf;
   const contas = [
        {
            nome: "Teste 1",
            cpf: "99999999999",
            cep: "55555555"
        },
        {
            nome: "Teste 2",
            cpf: "88888888888",
            cep: "66666666"
        }
   ]

   let body;
   let cpfExistente;
   let statusCode;

   try {
        for (let index = 0; index < contas.length; index++) {
            if (contas[index].cpf == cpf) {
                body = {
                    nome: contas[index].nome,
                    cpf: contas[index].cpf,
                    cep: contas[index].cep
                }
                cpfExistente = true;
            }
        }

        if (!cpfExistente) {
            body = {
                message: "Conta com esse CPF não existe"
            }
        }

        statusCode = 200;
   } catch (error) {
        body = {
            errorMessage: error.message
        }
        statusCode = 400;
   } finally {
        return res.status(statusCode).json(body)
   }
}