exports.handler = async function (event, context) {
    const quotes = [
        "First, solve the problem. Then, write the code. - John Johnson",
        "Computers are good at following instructions, but not at reading your mind. - Donald Knuth",
        "Code is like humor. When you have to explain it, it’s bad. - Cory House",
        "Fix the cause, not the symptom. - Steve Maguire"
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*" // Allows our local frontend to securely talk to this endpoint
        },
        body: JSON.stringify({ quote: randomQuote }),
    };
};
