// 1. IMPORTAÇÕES
require('dotenv').config();
const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');

// ... (configurações e middlewares continuam iguais)
const app = express();
const PORT = 3000;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
app.use(cors());
app.use(express.json());

// 4. CRIAÇÃO DO ENDPOINT DA API
app.post('/api/gerar-dieta', async (req, res) => {
  console.log('Recebido pedido para gerar dieta com os dados:', req.body);

  try {
    const { calorias, proteinas, carboidratos, gorduras, objetivo } = req.body;

    // O prompt continua o mesmo que você criou
    const prompt = `
      Você é um nutricionista virtual especializado em cálculo de macros.
      Vou te passar a meta de calorias e macronutrientes de uma pessoa, e você deve criar 3 opções diferentes de dieta diária que batam o mais próximo possível desses valores.

      ## Metas Nutricionais a Atingir:
      - Objetivo do usuário: ${objetivo}
      - Calorias: ${calorias} kcal/dia
      - Proteínas: ${proteinas}g
      - Carboidratos: ${carboidratos}g
      - Gorduras: ${gorduras}g

      ## Instruções:
      - Crie 3 opções de dietas diárias distintas (ex: uma tradicional, uma vegetariana, uma com refeições mais práticas, etc. Seja criativo).
      - Divida cada dieta em 4 ou 5 refeições (Café da manhã, Almoço, Lanche, Jantar, e Ceia se necessário).
      - Inclua quantidades aproximadas dos alimentos em medidas caseiras (xícaras, colheres) e/ou em gramas.
      - No final de CADA uma das 3 opções, mostre um **Resumo Nutricional** com a soma total de Calorias, Proteínas, Carboidratos e Gorduras daquela opção específica.
      - O objetivo principal é **ficar o mais próximo possível dos macros fornecidos**.
      - Utilize alimentos comuns e acessíveis no Brasil.
      - Use títulos em markdown (ex: '### Opção 1: Dieta Tradicional') para separar claramente cada plano.

      Agora, gere as 3 dietas diferentes que atinjam as metas fornecidas acima.
    `;

    // Chama a API da OpenAI
    const completion = await openai.chat.completions.create({
      // ======================================================
      // ===          AQUI ESTÁ A ÚNICA MUDANÇA             ===
      // ======================================================
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
    });

    const dietaGerada = completion.choices[0].message.content;
    res.json({ dieta: dietaGerada });

  } catch (error) {
    console.error("Erro ao chamar a API da OpenAI:", error);
    res.status(500).json({ error: "Desculpe, não foi possível gerar a dieta no momento." });
  }
});

// 5. INICIA O SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});