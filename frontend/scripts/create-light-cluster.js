// Script used to create a light version of cluster.json without the extra metadata


import fs from 'fs/promises';
import path from 'path';

async function createClusterLight() {
  try {
    const inputPath = path.join('./src/pages/svg_icons', 'cluster.json');
    const outputPath = path.join('./src/pages/svg_icons', 'cluster-light.json');

    console.time('Read cluster.json');
    const fileContent = await fs.readFile(inputPath, 'utf-8');
    console.timeEnd('Read cluster.json');

    console.time('Parse cluster.json');
    const clusterData = JSON.parse(fileContent);
    console.timeEnd('Parse cluster.json');

    console.time('Create light cluster');
    const lightCluster = { clusters: {} };

    for (const [key, cluster] of Object.entries(clusterData.clusters)) {
      lightCluster.clusters[key] = {
        name: cluster.name,
        fileNames: cluster.fileNames.map(f => ({ fileName: f.fileName }))
      };
    }
    console.timeEnd('Create light cluster');

    console.time('Write cluster-light.json');
    await fs.writeFile(outputPath, JSON.stringify(lightCluster), 'utf-8');
    console.timeEnd('Write cluster-light.json');

    console.log('✅ cluster-light.json created successfully!');
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

createClusterLight();
