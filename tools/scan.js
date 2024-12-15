import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';

async function getFiles(dir) {
	let files = await fs.readdir(dir, { withFileTypes: true });
	let allFiles = [];

	for (let file of files) {
		let fullPath = path.join(dir, file.name);
		if (file.isDirectory()) {
			allFiles = allFiles.concat(await getFiles(fullPath));
		} else if (file.isFile() && (file.name.endsWith('.7z') || file.name.endsWith('.zip'))) {
			allFiles.push(fullPath);
		}
	}

	return allFiles;
}

async function getFileInfo(filePath, baseDir) {
	const stats = await fs.stat(filePath);
	const fileBuffer = await fs.readFile(filePath);
	const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
	const relativePath = path.relative(baseDir, path.dirname(filePath));

	return {
		name: path.basename(filePath),
		relativePath: relativePath,
		modifiedDate: stats.mtime,
		size: stats.size,
		sha256: hash
	};
}

async function scanDirectory(directory) {
	const files = await getFiles(directory);
	const fileInfoPromises = files.map((file) => getFileInfo(file, directory));

	return Promise.all(fileInfoPromises);
}

// Get the input directory from command-line arguments
const inputDir = process.argv[2];
if (!inputDir) {
	console.error('Please provide an input directory.');
	process.exit(1);
}

// Resolve the input directory to an absolute path
const directoryPath = path.resolve(inputDir);

scanDirectory(directoryPath)
	.then((filesInfo) => console.log(JSON.stringify(filesInfo)))
	.catch((err) => console.error(err));
