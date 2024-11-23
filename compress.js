// Importations avec la syntaxe ES Modules
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { glob } from 'glob';

const inputDir = 'public/images/high'; // Dossier des images haute résolution
const outputDir = 'public/images/middle'; // Dossier pour les images basse résolution

// Fonction asynchrone pour exécuter le script
async function generateLowResImages() {
  try {
    // Utiliser glob avec les promesses
    const files = await glob(`${inputDir}/**/*.{jpg,jpeg,png,webp}`);

	console.log(files);

    for (const file of files) {
      const relativePath = path.relative(inputDir, file);
      const outputFile = path.join(outputDir, relativePath);

      // Créer le dossier de sortie s'il n'existe pas
      const outputDirName = path.dirname(outputFile);
      if (!fs.existsSync(outputDirName)) {
        fs.mkdirSync(outputDirName, { recursive: true });
      }

      // Traiter l'image avec Sharp
      try {
        await sharp(file)
          .resize({ width: 1000 }) // Ajustez la taille selon vos besoins
          .toFormat('webp', { quality: 90 }) // Ajustez le format et la qualité selon vos besoins
          .toFile(outputFile);

        console.log(`Image basse résolution générée : ${outputFile}`);
      } catch (err) {
        console.error(`Erreur lors du traitement de ${file} :`, err);
      }
    }
  } catch (err) {
    console.error('Erreur lors de la recherche des fichiers :', err);
  }
}

// Exécuter la fonction
generateLowResImages();