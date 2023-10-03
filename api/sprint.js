module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS POST");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const cpf = req.body.cpf;
  const contas = [
    {
      Nome: "João",
      Valor: 423.56,
      Data: "2023-06-12",
      Horario: "14:30",
      Pagamento: "Cartão de Crédito",
      Cpf: "12345678910",
    },
    {
      Nome: "João",
      Valor: 789.21,
      Data: "2023-02-18",
      Horario: "10:15",
      Pagamento: "PIX",
      Cpf: "12345678910",
    },
    {
      Nome: "João",
      Valor: 234.75,
      Data: "2023-09-04",
      Horario: "19:45",
      Pagamento: "Dinheiro",
      Cpf: "12345678910",
    },
    {
      Nome: "João",
      Valor: 123.89,
      Data: "2023-07-23",
      Horario: "16:52",
      Pagamento: "Cartão de Débito",
      Cpf: "12345678910",
    },
    {
      Nome: "João",
      Valor: 567.32,
      Data: "2023-11-30",
      Horario: "22:10",
      Pagamento: "PIX",
      Cpf: "12345678910",
    },
    {
      Nome: "João",
      Valor: 312.45,
      Data: "2023-04-08",
      Horario: "11:37",
      Pagamento: "Cartão de Crédito",
      Cpf: "12345678910",
    },
    {
      Nome: "João",
      Valor: 654.78,
      Data: "2023-10-15",
      Horario: "13:20",
      Pagamento: "Dinheiro",
      Cpf: "12345678910",
    },
    {
      Nome: "João",
      Valor: 189.99,
      Data: "2023-05-29",
      Horario: "09:05",
      Pagamento: "Cartão de Crédito",
      Cpf: "12345678910",
    },
    {
      Nome: "João",
      Valor: 456.23,
      Data: "2023-08-07",
      Horario: "18:14",
      Pagamento: "Cartão de Débito",
      Cpf: "12345678910",
    },
    {
      Nome: "João",
      Valor: 105.57,
      Data: "2023-03-17",
      Horario: "20:40",
      Pagamento: "Dinheiro",
      Cpf: "12345678910",
    },
    {
      Nome: "Maria",
      Valor: 532.12,
      Data: "2023-06-12",
      Horario: "14:30",
      Pagamento: "Cartão de Crédito",
      Cpf: "10987654321",
    },
    {
      Nome: "Maria",
      Valor: 987.45,
      Data: "2023-02-18",
      Horario: "10:15",
      Pagamento: "PIX",
      Cpf: "10987654321",
    },
    {
      Nome: "Maria",
      Valor: 324.76,
      Data: "2023-09-04",
      Horario: "19:45",
      Pagamento: "Dinheiro",
      Cpf: "10987654321",
    },
    {
      Nome: "Maria",
      Valor: 145.67,
      Data: "2023-07-23",
      Horario: "16:52",
      Pagamento: "Cartão de Débito",
      Cpf: "10987654321",
    },
    {
      Nome: "Maria",
      Valor: 621.34,
      Data: "2023-11-30",
      Horario: "22:10",
      Pagamento: "PIX",
      Cpf: "10987654321",
    },
    {
      Nome: "Maria",
      Valor: 287.89,
      Data: "2023-04-08",
      Horario: "11:37",
      Pagamento: "Cartão de Crédito",
      Cpf: "10987654321",
    },
    {
      Nome: "Maria",
      Valor: 765.43,
      Data: "2023-10-15",
      Horario: "13:20",
      Pagamento: "Dinheiro",
      Cpf: "10987654321",
    },
    {
      Nome: "Maria",
      Valor: 198.76,
      Data: "2023-05-29",
      Horario: "09:05",
      Pagamento: "Cartão de Crédito",
      Cpf: "10987654321",
    },
    {
      Nome: "Maria",
      Valor: 543.21,
      Data: "2023-08-07",
      Horario: "18:14",
      Pagamento: "Cartão de Débito",
      Cpf: "10987654321",
    },
    {
      Nome: "Maria",
      Valor: 876.45,
      Data: "2023-03-17",
      Horario: "20:40",
      Pagamento: "Cartão de Crédito",
      Cpf: "10987654321",
    },
    {
      "Nome": "Maria",
      "Valor": 732.54,
      "Data": "2023-08-21",
      "Horario": "17:42",
      "Pagamento": "Dinheiro"
    },
    {
      "Nome": "Maria",
      "Valor": 265.87,
      "Data": "2023-01-10",
      "Horario": "12:15",
      "Pagamento": "Cartão de Crédito"
    },
    {
      "Nome": "Maria",
      "Valor": 156.23,
      "Data": "2023-05-03",
      "Horario": "09:58",
      "Pagamento": "PIX"
    },
    {
      "Nome": "Maria",
      "Valor": 874.29,
      "Data": "2023-09-15",
      "Horario": "20:03",
      "Pagamento": "Cartão de Débito"
    },
    {
      "Nome": "Maria",
      "Valor": 421.67,
      "Data": "2023-11-05",
      "Horario": "21:30",
      "Pagamento": "Dinheiro"
    }
  ];

  let body;
  let cpfExistente;
  let statusCode;

  try {
    body = []
    for (let index = 0; index < contas.length; index++) {
      if (contas[index].Cpf == cpf) {
        body.push({
          nome: contas[index].Nome,
          valor: contas[index].Valor,
          data: contas[index].Data,
          horario: contas[index].Horario,
          pagamento: contas[index].Pagamento,
        });
        cpfExistente = true;
      }
    }

    if (!cpfExistente) {
      body = {
        message: "Não existe conta cadastrada para este CPF",
      };
    }

    statusCode = 200;
  } catch (error) {
    body = {
      errorMessage: error.message,
    };
    statusCode = 400;
  } finally {
    return res.status(statusCode).json(body);
  }
};
