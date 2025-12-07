// Función para las animaciones de las secciones al hacer scroll
const animatedSections = document.querySelectorAll('.animated-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible')
        }
    });
}, { threshold: 0.1 });

animatedSections.forEach(section => {
    observer.observe(section);
});


// Lógica del Chatbot
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatbot = document.getElementById('close-chatbot');
const chatbotBody = document.getElementById('chatbot-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

chatbotToggle.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
});

closeChatbot.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    appendMessage(userMessage, 'user-message');
    userInput.value = '';

    setTimeout(() => {
        handleBotResponse(userMessage);
    }, 1000);
}

function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.innerText = text;
    chatbotBody.appendChild(messageDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll automático al final
}

function handleBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    let botResponse = 'Lo siento, no entendí esa pregunta. Puedes preguntar por la experiencia, conocimientos, formación o habilidades de Frederick.';

    if (lowerCaseMessage.includes('experiencia')) {
        botResponse = 'Frederick tiene experiencia en soporte técnico (hardware, software y redes básicas), y ha participado en proyectos académicos de resolución de incidencias técnicas y configuración de sistemas operativos.';
    } else if (lowerCaseMessage.includes('conocimientos') || lowerCaseMessage.includes('lenguajes') || lowerCaseMessage.includes('herramientas')) {
        botResponse = 'Sus conocimientos incluyen: Lenguajes de programación (Python, Java, C, C++), Bases de datos (MySQL, SQL Server), Sistemas operativos (Windows, Linux), y herramientas como Git, Visual Studio Code, PyCharm y Figma.';
    } else if (lowerCaseMessage.includes('formacion') || lowerCaseMessage.includes('estudios')) {
        botResponse = 'Frederick estudia Ingeniería en Sistemas Computacionales en el Instituto Tecnológico Superior de Felipe Carrillo Puerto. Su formación se enfoca en soporte técnico, mantenimiento de equipos y fundamentos de redes básicas.';
    } else if (lowerCaseMessage.includes('habilidades')) {
        botResponse = 'Sus principales habilidades son: trabajo en equipo, adaptabilidad, resolución de problemas, comunicación efectiva y aprendizaje continuo.';
    } else if (lowerCaseMessage.includes('contacto')) {
        botResponse = 'Puedes contactar a Frederick por teléfono al 983-700-9882 o por correo electrónico en frederickaguilar317@gmail.com.';
    }

    appendMessage(botResponse, 'bot-message');
}