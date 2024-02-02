module.exports = (req, res) => {
    const cantidadUrls = parseInt(req.query.cantidadUrls);
    const urls = [];

    for (let i = 0; i < cantidadUrls; i++) {
        urls.push(`https://tu-sitio.com/url-${i + 1}`);
    }

    res.status(200).json({ urls });
};
