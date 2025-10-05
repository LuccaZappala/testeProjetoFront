const form = document.getElementById('calc-form');

// Variável para guardar os resultados e usar depois
let dadosCalculados = {};

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // ... (toda a parte de captura de dados e validação continua igual) ...
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const idade = parseInt(document.getElementById('idade').value);
    const pesoValue = document.getElementById('peso').value;
    const peso = parseFloat(pesoValue.replace(',', '.'));
    const altura = parseInt(document.getElementById('altura').value);
    const fatorAtividade = parseFloat(document.getElementById('atividade').value);
    const objetivo = document.getElementById('objetivo').value;

    if (isNaN(idade) || isNaN(peso) || isNaN(altura) || idade <= 0 || peso <= 0 || altura <= 0) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    // ... (toda a parte de cálculos de TMB, GET, Calorias e Macros continua igual) ...
    let tmb;
    if (genero === 'masculino') {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }
    const gastoEnergeticoTotal = tmb * fatorAtividade;
    let caloriasFinais;
    if (objetivo === 'cutting') {
        caloriasFinais = gastoEnergeticoTotal - 400;
    } else if (objetivo === 'bulking') {
        caloriasFinais = gastoEnergeticoTotal + 400;
    } else {
        caloriasFinais = gastoEnergeticoTotal;
    }
    const proteinasGramas = peso * 2;
    const gordurasGramas = peso * 1;
    const carboidratosCalorias = caloriasFinais - (proteinasGramas * 4) - (gordurasGramas * 9);
    const carboidratosGramas = carboidratosCalorias / 4;

    // Guarda os resultados na variável global
    dadosCalculados = {
        calorias: caloriasFinais.toFixed(0),
        proteinas: proteinasGramas.toFixed(0),
        carboidratos: carboidratosGramas.toFixed(0),
        gorduras: gordurasGramas.toFixed(0),
        objetivo: objetivo
    };

    // Exibe o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Seu Resultado:</h2>
        <p><strong>Calorias para o seu objetivo:</strong> ${dadosCalculados.calorias} kcal/dia</p>
        <h3>Distribuição de Macros:</h3>
        <p><strong>Proteínas:</strong> ${dadosCalculados.proteinas}g</p>
        <p><strong>Carboidratos:</strong> ${dadosCalculados.carboidratos}g</p>
        <p><strong>Gorduras:</strong> ${dadosCalculados.gorduras}g</p>
        
        <button id="gerar-dieta-btn" class="dieta-button">
            Quero receber minha dieta com base nesses dados
        </button>
        <div id="dieta-resultado">Carregando sua dieta...</div>
    `;
    document.getElementById('dieta-resultado').style.display = 'none'; // Esconde o "carregando"
    resultadoDiv.classList.remove('hidden');

    // Adiciona o 'listener' para o novo botão DEPOIS que ele foi criado
    document.getElementById('gerar-dieta-btn').addEventListener('click', gerarDieta);
});


// --- NOVA FUNÇÃO PARA CHAMAR A API DO NOSSO BACKEND ---
// Cole esta versão da função no seu JS/script.js
async function gerarDieta() {
    const btn = document.getElementById('gerar-dieta-btn');
    const resultadoDietaDiv = document.getElementById('dieta-resultado');

    // Mostra uma mensagem de "carregando" e desativa o botão
    resultadoDietaDiv.style.display = 'block';
    resultadoDietaDiv.textContent = 'Gerando sua dieta, por favor aguarde...';
    btn.disabled = true;
    
    // O endereço completo e correto do nosso backend
    const backendUrl = 'http://localhost:3000/api/gerar-dieta';

    try {
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosCalculados)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Houve um problema no servidor.');
        }

        const data = await response.json();
        resultadoDietaDiv.textContent = data.dieta;

    } catch (error) {
        resultadoDietaDiv.textContent = 'Desculpe, ocorreu um erro: ' + error.message;
    } finally {
        btn.style.display = 'none';
    }
}