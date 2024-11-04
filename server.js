const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/download', async (req, res) => {
    const videoUrl = req.body.videoUrl;
    try {
        // Misalnya, API pihak ketiga yang mendukung unduhan video
        const response = await axios.get(`https://api.zannmods.site/api/tiktok?url=${videoUrl}`);
        res.json({ downloadUrl: response.data.downloadUrl });
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengunduh video.' });
    }
});

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
