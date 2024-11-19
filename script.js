document.addEventListener('DOMContentLoaded', () => {
    const backendUrl = "http://127.0.0.1:5000";

    // Fetch upcoming matches
    fetch(`${backendUrl}/api/matches`)
        .then(response => response.json())
        .then(data => {
            const matchesList = document.getElementById('matches-list');
            matchesList.innerHTML = data.map(match => `<p>${match}</p>`).join('');
        })
        .catch(() => {
            const matchesList = document.getElementById('matches-list');
            matchesList.innerHTML = "Greška pri učitavanju utakmica.";
        });

    // Fetch AI analysis
    fetch(`${backendUrl}/api/ai-analysis`)
        .then(response => response.json())
        .then(data => {
            const aiResult = document.getElementById('ai-result');
            aiResult.textContent = data.prediction;
        })
        .catch(() => {
            const aiResult = document.getElementById('ai-result');
            aiResult.textContent = "Greška pri učitavanju prognoze.";
        });
});
