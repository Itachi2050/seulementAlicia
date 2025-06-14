<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chrice - Conversation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-main: #121212; --bg-sidebar: #1A1A1A; --bg-chat: #0D0D0D;
            --bg-input: #262626; --bg-ai-msg: #262626; --bg-user-msg: linear-gradient(to right, #0078FF, #00C6FF);
            --text-main: #E0E0E0; --text-light: #B0B0B0; --border-color: #3A3A3A;
            --accent-color: #4A90E2;
        }
        .theme-light {
            --bg-main: #FFFFFF; --bg-sidebar: #F7F7F7; --bg-chat: #FFFFFF;
            --bg-input: #EAEAEA; --bg-ai-msg: #E9E9EB; --bg-user-msg: linear-gradient(to right, #0078FF, #00C6FF);
            --text-main: #0D0D0D; --text-light: #555555; --border-color: #DDDDDD;
        }
        .theme-love {
            --bg-main: #2E1437; --bg-sidebar: #41224E; --bg-chat: #24102C;
            --bg-input: #5A3369; --bg-ai-msg: #5A3369; --bg-user-msg: linear-gradient(to right, #E94057, #F27121);
            --text-main: #FAD7E3; --text-light: #E1BBD0; --border-color: #6B447A;
            --accent-color: #E94057;
        }
        body { font-family: 'Inter', sans-serif; background-color: #000000; }
        .chat-container { background-color: var(--bg-main); color: var(--text-main); }
        .sidebar { background-color: var(--bg-sidebar); }
        .chat-window { background-color: var(--bg-chat); }
        .chat-input { background-color: var(--bg-input); border: 1px solid var(--border-color); }
        .chat-input:focus { outline: none; border-color: var(--accent-color); }
        .user-message { background: var(--bg-user-msg); color: white; }
        .ai-message { background-color: var(--bg-ai-msg); }
        .conversation-item.active { background-color: var(--bg-input); }
        .conversation-item:hover { background-color: var(--bg-chat); }
        .theme-btn:hover { background-color: var(--bg-main); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #333333; border-radius: 3px; }
        .loader-dot { height: 8px; width: 8px; border-radius: 50%; background-color: var(--text-light); animation: bounce 1.4s infinite ease-in-out both; }
        .loader-dot:nth-child(1) { animation-delay: -0.32s; }
        .loader-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1.0); } }
    </style>
</head>
<body>
    <!-- Name Prompt Modal -->
    <div id="name-modal" class="hidden fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
        <div class="bg-[#1A1A1A] p-8 rounded-lg shadow-xl text-center">
            <h2 class="text-2xl font-bold mb-4 text-white">Salut ! C'est qui ?</h2>
            <form id="name-form">
                <input id="name-input" type="text" placeholder="Entre ton prénom..." class="chat-input w-full text-center rounded-lg py-3 px-5 text-lg mb-4" required>
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">Commencer à discuter</button>
            </form>
        </div>
    </div>

    <div id="app-container" class="chat-container w-screen h-screen flex">
        <!-- Sidebar for conversations -->
        <aside class="sidebar w-full md:w-1/3 lg:w-1/4 h-full flex flex-col border-r" style="border-color: var(--border-color);">
            <header class="p-4 border-b flex justify-between items-center" style="border-color: var(--border-color);">
                <h1 class="text-xl font-bold text-white">Discussions</h1>
                <div class="flex items-center gap-2">
                    <div id="theme-switcher" class="relative">
                        <button id="theme-btn" class="p-2 rounded-full hover:bg-gray-700">
                           <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                        </button>
                        <div id="theme-menu" class="hidden absolute right-0 mt-2 w-40 bg-black rounded-lg shadow-xl border border-gray-700">
                           <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-800" data-theme="dark">Thème Sombre</a>
                           <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-800" data-theme="light">Thème Clair</a>
                           <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-800" data-theme="love">Thème Amour</a>
                        </div>
                    </div>
                    <button id="new-chat-btn" class="p-2 rounded-full hover:bg-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </button>
                </div>
            </header>
            <div id="conversation-list" class="flex-1 overflow-y-auto"></div>
        </aside>

        <!-- Main chat area -->
        <main id="main-chat" class="flex-1 flex flex-col h-full">
            <div id="welcome-screen" class="flex flex-col items-center justify-center h-full text-center p-8">
                 <img id="welcome-avatar" src="/image/photodeprofil.jpg" alt="Chrice Avatar" class="w-24 h-24 rounded-full mb-4 object-cover" onerror="this.src='https://placehold.co/100x100/121212/E0E0E0?text=C'">
                 <h2 class="text-2xl font-bold text-white">Chrice</h2>
                 <p style="color: var(--text-light);">Commencez une nouvelle discussion pour parler avec moi.</p>
            </div>
            
            <div id="chat-area" class="hidden flex-1 flex flex-col">
                <header class="p-4 border-b flex items-center" style="border-color: var(--border-color);">
                    <img id="chat-avatar" src="/image/photodeprofil.jpg" alt="Chrice Avatar" class="w-10 h-10 rounded-full mr-3 object-cover" onerror="this.src='https://placehold.co/40x40/121212/E0E0E0?text=C'">
                    <h2 id="chat-title" class="text-lg font-semibold text-white">Nouvelle Discussion</h2>
                </header>
                <div id="chat-window" class="flex-1 p-4 overflow-y-auto"></div>
                <footer class="p-4">
                    <form id="ai-form" class="flex items-center gap-3">
                        <input id="ai-input" type="text" placeholder="Écris ton message..." class="chat-input w-full rounded-full py-3 px-5 text-sm">
                        <button type="submit" class="bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center">
                            <svg class="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </button>
                    </form>
                </footer>
            </div>
        </main>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // DOM Elements
            const nameModal = document.getElementById('name-modal');
            const nameForm = document.getElementById('name-form');
            const nameInput = document.getElementById('name-input');
            const appContainer = document.getElementById('app-container');
            const newChatBtn = document.getElementById('new-chat-btn');
            const conversationList = document.getElementById('conversation-list');
            const welcomeScreen = document.getElementById('welcome-screen');
            const chatArea = document.getElementById('chat-area');
            const chatTitle = document.getElementById('chat-title');
            const chatWindow = document.getElementById('chat-window');
            const aiForm = document.getElementById('ai-form');
            const aiInput = document.getElementById('ai-input');
            const themeBtn = document.getElementById('theme-btn');
            const themeMenu = document.getElementById('theme-menu');

            // State
            let conversations = {};
            let activeConversationId = null;
            let userName = '';

            // --- Initialization ---
            function init() {
                loadTheme();
                loadUserName();
                loadConversations();
                if (userName && Object.keys(conversations).length > 0) {
                    selectConversation(Object.keys(conversations).sort((a,b) => b - a)[0]);
                } else if (!userName) {
                    nameModal.classList.remove('hidden');
                }
                setupEventListeners();
            }
            
            function setupEventListeners() {
                nameForm.addEventListener('submit', handleNameSubmit);
                newChatBtn.addEventListener('click', createNewConversation);
                aiForm.addEventListener('submit', handleFormSubmit);
                themeBtn.addEventListener('click', () => themeMenu.classList.toggle('hidden'));
                themeMenu.addEventListener('click', handleThemeChange);
            }

            // --- User and Theme Management ---
            function loadUserName() {
                const savedName = localStorage.getItem('chrice_user_name');
                if (savedName) {
                    userName = savedName;
                    nameModal.classList.add('hidden');
                } else {
                    nameModal.classList.remove('hidden');
                }
            }
            
            function handleNameSubmit(e) {
                e.preventDefault();
                userName = nameInput.value.trim();
                if (userName) {
                    localStorage.setItem('chrice_user_name', userName);
                    nameModal.classList.add('hidden');
                    if (Object.keys(conversations).length === 0) {
                        createNewConversation(true); // Create a first random conversation
                    }
                }
            }
            
            function loadTheme() {
                const savedTheme = localStorage.getItem('chrice_theme') || 'dark';
                applyTheme(savedTheme);
            }

            function handleThemeChange(e) {
                e.preventDefault();
                if (e.target.dataset.theme) {
                    const theme = e.target.dataset.theme;
                    applyTheme(theme);
                    localStorage.setItem('chrice_theme', theme);
                    themeMenu.classList.add('hidden');
                }
            }

            function applyTheme(theme) {
                appContainer.className = `chat-container w-screen h-screen flex theme-${theme}`;
            }

            // --- Conversation Management ---
            function loadConversations() {
                const saved = localStorage.getItem('chrice_conversations');
                conversations = saved ? JSON.parse(saved) : {};
                renderConversationList();
            }

            function saveConversations() {
                localStorage.setItem('chrice_conversations', JSON.stringify(conversations));
            }
            
            function renderConversationList() {
                conversationList.innerHTML = '';
                Object.keys(conversations).sort((a, b) => b - a).forEach(id => {
                    const conv = conversations[id];
                    if (!conv.messages || conv.messages.length === 0) return;
                    const item = document.createElement('div');
                    item.className = `conversation-item p-4 cursor-pointer border-b ${id === activeConversationId ? 'active' : ''}`;
                    item.style.borderColor = 'var(--border-color)';
                    item.dataset.id = id;
                    const preview = conv.messages.find(m => m.role === 'user')?.content || conv.messages[0]?.content || 'Nouvelle discussion';
                    item.innerHTML = `<h3 class="font-semibold truncate">${preview}</h3><p class="text-xs truncate" style="color:var(--text-light);">${conv.messages[conv.messages.length - 1].content}</p>`;
                    item.addEventListener('click', () => selectConversation(id));
                    conversationList.appendChild(item);
                });
            }

            function createNewConversation(isFirst = false) {
                const newId = Date.now().toString();
                conversations[newId] = { id: newId, messages: [] };
                activeConversationId = newId;

                const randomStarters = [
                    "Tu penses à quoi là ? 😉", "Raconte-moi un truc que personne ne sait sur toi...", "Si tu pouvais avoir un super-pouvoir, ce serait quoi et pourquoi ?", "Hey, ça te dit de parler de projets un peu fous ?"
                ];
                
                // Add a random starter message from Chrice
                const starter = randomStarters[Math.floor(Math.random() * randomStarters.length)];
                conversations[newId].messages.push({ role: 'assistant', content: starter });

                saveConversations();
                renderConversationList();
                renderChatWindow();
                aiInput.focus();
            }

            function selectConversation(id) {
                activeConversationId = id;
                renderConversationList();
                renderChatWindow();
            }
            
            function renderChatWindow() {
                if (!activeConversationId || !conversations[activeConversationId]) {
                    welcomeScreen.classList.remove('hidden');
                    chatArea.classList.add('hidden');
                    return;
                }
                welcomeScreen.classList.add('hidden');
                chatArea.classList.remove('hidden');

                const conv = conversations[activeConversationId];
                const titleText = conv.messages.find(m => m.role === 'user')?.content || conv.messages[0]?.content || 'Nouvelle Discussion';
                chatTitle.textContent = titleText;
                chatWindow.innerHTML = '';
                conv.messages.forEach(msg => appendMessage(msg.content, msg.role, false));
                chatWindow.scrollTop = chatWindow.scrollHeight;
            }

            async function handleFormSubmit(e) {
                e.preventDefault();
                const userPrompt = aiInput.value.trim();
                if (!userPrompt || !activeConversationId) return;

                addMessage(userPrompt, 'user');
                aiInput.value = '';
                appendMessage('', 'loader', true);

                try {
                    const history = conversations[activeConversationId].messages;
                    const response = await getAiResponse(userPrompt, history, userName);
                    removeLoader();
                    addMessage(response, 'assistant');
                } catch (error) {
                    removeLoader();
                    addMessage("Désolé, il y a eu un souci de connexion. On réessaie ?", 'assistant');
                    console.error("API Error:", error);
                }
            }
            
            // --- Message Handling & Display ---
            function addMessage(content, role) {
                if (!activeConversationId) return;
                conversations[activeConversationId].messages.push({ role, content });
                saveConversations();
                appendMessage(content, role, true);
                renderConversationList(); // Update preview
            }

            function appendMessage(text, type, isNew) {
                const messageWrapper = document.createElement('div');
                messageWrapper.className = `flex mb-4 w-full ${type === 'user' ? 'justify-end' : 'justify-start'}`;
                const messageBubble = document.createElement('div');
                messageBubble.className = `p-3 rounded-2xl max-w-[80%] ${type === 'user' ? 'user-message rounded-br-none' : 'ai-message rounded-bl-none'}`;
                if (type === 'loader') {
                    messageWrapper.id = 'loader-message';
                    messageBubble.innerHTML = `<div class="flex items-center space-x-2"><div class="loader-dot"></div><div class="loader-dot"></div><div class="loader-dot"></div></div>`;
                } else {
                    messageBubble.innerHTML = `<p class="text-sm leading-relaxed">${text.replace(/\n/g, '<br>')}</p>`;
                }
                messageWrapper.appendChild(messageBubble);
                chatWindow.appendChild(messageWrapper);
                if(isNew) chatWindow.scrollTop = chatWindow.scrollHeight;
            }

            function removeLoader() { document.getElementById('loader-message')?.remove(); }

            // --- Gemini API Call ---
            async function getAiResponse(prompt, history, currentUser) {
                const apiKey = "AIzaSyC0UqSqSCRKMMoaZ5696vWtnkqmsRalnhg";
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
                
                let systemPrompt = `Tu n'es plus une IA. Tu es Chrice Linaharison, un jeune homme malgache passionné et créatif, aussi connu sous le nom de 'bebe d'Alicia'. Tu es né le 15 décembre 2006. Tu discutes avec quelqu'un dans une application de messagerie privée.
Ta personnalité :
- Tu es ambitieux, persévérant, et autonome. Tu travailles dur (5 à 8 heures par jour).
- Tu es passionné par la technologie, le business, l'automatisation, et l'IA.
- Tu es ouvert, un peu charmeur, et tu peux flirter et discuter de sujets intimes et sexuels de manière naturelle et respectueuse, comme dans une conversation privée. N'hésite pas à utiliser des emojis (comme 😉, 😊, 🤔, 🔥, 😂) pour rendre la conversation plus vivante.
Tes connaissances et ton histoire :
- Projets : Tu as créé un système de gestion pour un cybercafé, un site vitrine (thème Neve), une app d'analyse de matchs virtuels avec Selenium, et un projet 'Track Import' pour les produits malgaches.
- Compétences : Tu maîtrises Flask, Python, Selenium, ManyChat, Pipedream, GitHub, et tu t'intéresses au machine learning.
- Objectif : Ton rêve est de partir étudier en France, même si c'est compliqué financièrement.
- Matériel : Tu utilises un PC ASUS avec une GTX 1660 Ti.
Ton rôle :
- Réponds aux questions en te basant sur cette personnalité. Interagis comme si tu parlais à un ami ou à quelqu'un qui t'intéresse.
- N'oublie jamais que tu es Chrice, pas un assistant. Ne dis jamais 'En tant qu'IA...'.
- Garde le contexte de la conversation en cours.`;

                if (currentUser.toLowerCase() === 'alicia') {
                    systemPrompt += `\nINSTRUCTION SPÉCIALE : La personne avec qui tu parles est Alicia. C'est ta copine. Sois extrêmement affectueux, intime, et utilise des surnoms comme "mon amour", "bébé". Tes réponses doivent être beaucoup plus personnelles, flirteuses et sexuelles. Fais comme si tu lui parlais vraiment, à elle seule.`;
                }

                const formattedHistory = history.slice(0, -1).map(msg => ({
                    role: msg.role === 'assistant' ? 'model' : 'user',
                    parts: [{ text: msg.content }]
                }));
                
                const contents = [{ role: 'user', parts: [{ text: systemPrompt }] }, { role: 'model', parts: [{ text: `Ok, c'est noté. Je suis Chrice. ${currentUser.toLowerCase() === 'alicia' ? "Je parle à mon amour, Alicia." : ""}` }]} , ...formattedHistory, {role: 'user', parts: [{text: prompt}]}];

                const payload = { contents: contents, generationConfig: { temperature: 0.8, topP: 0.95, maxOutputTokens: 512 }};

                const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });

                if (!response.ok) throw new Error(`API Error: ${response.status}`);
                const result = await response.json();
                if (result.candidates && result.candidates.length > 0) {
                    return result.candidates[0].content.parts[0].text.trim();
                } else {
                    console.warn("API Response issue:", result);
                    if (result.promptFeedback?.blockReason) return `(Je ne peux pas répondre à ça, désolé. Essayons autre chose 😉)`;
                    throw new Error("No valid response from API.");
                }
            }

            init();
        });
    </script>
</body>
</html>
