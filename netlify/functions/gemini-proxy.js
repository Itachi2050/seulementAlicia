const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    // 1. On refuse les requêtes qui ne sont pas des POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // 2. On récupère les données envoyées par l'application
        const { prompt, history, currentUser } = JSON.parse(event.body);
        
        // 3. On récupère la clé API secrète depuis les variables de Netlify
        const apiKey = process.env.GEMINI_API_KEY;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        // 4. On prépare le "prompt système" pour donner sa personnalité à l'IA
        let systemPrompt = `Tu n'es plus une IA. Tu es Chrice Linaharison... (copiez-collez ici l'intégralité du prompt système qui se trouve dans votre index.html)`;
        
        if (currentUser.toLowerCase() === 'alicia') {
            systemPrompt += `\nINSTRUCTION SPÉCIALE : La personne avec qui tu parles est Alicia... (copiez le reste de l'instruction)`;
        } else {
            systemPrompt += `\nINSTRUCTION SPÉCIALE : La personne avec qui tu parles s'appelle ${currentUser}... (copiez le reste de l'instruction)`;
        }
        
        // 5. On prépare la requête pour l'API Gemini
        const formattedHistory = history.slice(0, -1).map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content.replace("[SET_MOOD_ANGRY]", "") }]
        }));
        
        const contents = [
            { role: 'user', parts: [{ text: systemPrompt }] }, 
            { role: 'model', parts: [{ text: `Ok, c'est noté. Je suis Chrice. Je parle avec ${currentUser}.` }]} , 
            ...formattedHistory, 
            {role: 'user', parts: [{text: prompt}]}
        ];

        const payload = { 
            contents: contents, 
            generationConfig: { temperature: 0.85, topP: 0.95, maxOutputTokens: 256 }
        };

        // 6. On appelle l'API Gemini
        const geminiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!geminiResponse.ok) {
            throw new Error(`API Error: ${geminiResponse.status}`);
        }

        const result = await geminiResponse.json();
        const text = result.candidates[0].content.parts[0].text.trim();

        // 7. On renvoie la réponse de l'IA à notre application
        return {
            statusCode: 200,
            body: JSON.stringify({ text: text })
        };

    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch response' }) };
    }
};
