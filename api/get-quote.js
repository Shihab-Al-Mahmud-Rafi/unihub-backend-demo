module.exports = (req, res) => {
    const quotes = [
        "First, solve the problem. Then, write the code. - John Johnson",
        "Computers are good at following instructions, but not at reading your mind. - Donald Knuth",
        "Code is like humor. When you have to explain it, it’s bad. - Cory House",
        "Fix the cause, not the symptom. - Steve Maguire"
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Set CORS headers so your frontend can securely fetch it
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // Return the response code and data using Vercel's helper methods
    return res.status(200).json({ quote: randomQuote });
};
