import { readFile ,writeFile , appendFile } from "fs/promises";
import { join } from "path";

const filePath = join(process.cwd(),' URL.txt')
// console.log(filePath)

async function writeToFile() {
    try {
        await writeFile(filePath , 'Hello , myself sanjoy deb' , "utf-8")
        console.log('file written successfully');
    } catch (error) {
        console.error('error' , error)
    }
}

// writeToFile()

async function readTheFile() {
    try {
        const data = await readFile(filePath , 'utf-8')
        console.log('readed successfully' , data);
    } catch (error) {
        console.error('error' , error);
    }
}

// readTheFile()

async function appendFileS() {
    try {
        await appendFile(filePath ,'This line was appended.\n', 'utf-8')
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

appendFileS()