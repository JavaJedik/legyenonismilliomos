const express = require('express')
const app = express()

app.get("/", (req, res) => 
{
    res.send("Üdvözöllek a szerveren!");
})
    
app.listen(5000, () => 
{
    console.log("Server started on port 5000");
});
