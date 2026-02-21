const output = document.getElementById('terminal-output');
const imageContainer = document.getElementById('image-container');

const lines = [
    "Iniciando sistema de memórias...",
    "Conectando ao banco de dados: AMOR 5 ANOS",
    "Verificando status do relacionamento...",
    "Status: MAIS FORTE DO QUE NUNCA.",
    "Buscando momentos felizes...",
    "Iniciando escaneamento biométrico...",
    "Detectando presença de: Francyanne...",
    "Analise de DNA: 100% Compatível com Gabriel.",
    "Nível de Felicidade: Mais de 8000!",
    "Acesso concedido. Abrindo pasta: NOSSO_FUTURO.exe",

    
    "Localizando fotos e sorrisos...",
    "Comando: carregar_melhor_pessoa.sh",
    "Status: SUCESSO! Melhor pessoa carregada.",
    "Aguarde... Carregando 5 anos de história..."
];

let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            output.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 40); 
        } else {
            output.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeWriter, 800); 
        }
    } else {
        setTimeout(() => {
            output.innerHTML += "<br><span style='color: white;'>[SISTEMA FINALIZADO COM SUCESSO]</span>";
            
            imageContainer.classList.remove('hidden'); 
            
            mostrarContador(); 
            
            criarChuvaDeCoracoes(); 
            
        }, 1000);
    }
}

function mostrarContador() {
    const dataInicio = new Date('2021-02-22T00:00:00'); 
    if (document.getElementById('contador')) return;

    const contadorElemento = document.createElement('div');
    contadorElemento.id = 'contador';
    imageContainer.appendChild(contadorElemento);

    setInterval(() => {
        const agora = new Date();
        const diferenca = agora - dataInicio;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / 1000 / 60) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        contadorElemento.innerHTML = `<p style="color: #2ecc71; font-size: 1.2rem; margin-top: 20px; font-family: 'Courier New', monospace;">
            Juntos há: ${dias} dias, ${horas}h, ${minutos}m e ${segundos}s
        </p>`;
    }, 1000);
}

function criarChuvaDeCoracoes() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-bit');
        
        const itens = ['<3', '0', '1', 'Love', '5'];
        heart.innerText = itens[Math.floor(Math.random() * itens.length)];
        
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 
        heart.style.opacity = Math.random();
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 200);
}

window.onload = typeWriter;