import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';

async function getFiles(dir) {
	const files = await fs.readdir(dir, { withFileTypes: true });

	const filePromises = files.map(async (file) => {
		const fullPath = path.join(dir, file.name);

		if (file.isDirectory()) {
			return getFiles(fullPath);
		} else if (file.isFile() && (file.name.endsWith('.7z') || file.name.endsWith('.zip'))) {
			return [fullPath];
		} else {
			return [];
		}
	});

	const nestedFiles = await Promise.all(filePromises);

	return nestedFiles.flat();
}

async function getFileInfo(filePath, baseDir) {
	const stats = await fs.stat(filePath);
	const fileBuffer = await fs.readFile(filePath);
	const hash = createHash('sha256').update(fileBuffer).digest('hex');
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
