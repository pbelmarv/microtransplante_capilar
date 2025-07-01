const fs = require('fs');
const path = require('path');
const favicons = require('favicons');

// Configuración de favicons
themesConfig = {
    path: '/assets/icons/',
    appName: 'Dr. Felipe Costa',
    appDescription: 'Microtransplante Capilar',
    developerName: 'Dr. Felipe Costa',
    developerURL: null, // no URL
    background: '#ffffff',
    theme_color: '#4A5F74',
    icons: {
        android: true,
        appleIcon: true,
        favicons: true,
        windows: true,
        yandex: false,
        coast: false,
        firefox: false
    }
};

const source = path.resolve(__dirname, '../build/assets/images/iso.svg');
const outputDir = path.resolve(__dirname, '../build/assets/icons');

favicons(source, themesConfig, (error, response) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    // Crear directorio de salida
    fs.mkdirSync(outputDir, { recursive: true });
    // Escribir imágenes y archivos
    response.images.forEach(image => {
        fs.writeFileSync(path.join(outputDir, image.name), image.contents);
    });
    response.files.forEach(file => {
        fs.writeFileSync(path.join(outputDir, file.name), file.contents);
    });
    // Escribir HTML snippet
    const htmlSnippet = response.html.join('\n');
    fs.writeFileSync(path.join(outputDir, 'favicon.html'), htmlSnippet);
    console.log('Favicons generados en build/assets/icons');
    console.log('HTML snippet disponible en build/assets/icons/favicon.html');
});
