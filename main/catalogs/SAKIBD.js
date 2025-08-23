const crypto = require('crypto');
const os = require("os");
const axios = require("axios");
const FormData = require('form-data');
const { resolve, basename } = require('path');
const { writeFileSync, createReadStream, unlinkSync } = require('fs');
const aes = require("aes-js");

// Throw error in bot thread
module.exports.throwError = function(command, threadID, messageID) {
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const prefix = threadSetting.PREFIX || global.config.PREFIX;
    return global.client.api.sendMessage(global.getText("utils", "throwError", prefix, command), threadID, messageID);
};

// Generate GUID
module.exports.getGUID = function() {
    let sectionLength = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        let r = Math.floor((sectionLength + Math.random() * 16) % 16);
        sectionLength = Math.floor(sectionLength / 16);
        return (c === "x" ? r : (r & 7) | 8).toString(16);
    });
};

// AES-js encrypt
module.exports.encryptState = async function(data, key) {
    const hashKey = crypto.createHash("sha256").update(key).digest();
    const bytes = aes.utils.utf8.toBytes(data);
    const aesCtr = new aes.ModeOfOperation.ctr(hashKey);
    const encryptedData = aesCtr.encrypt(bytes);
    return aes.utils.hex.fromBytes(encryptedData);
};

// AES-js decrypt
module.exports.decryptState = function(data, key) {
    const hashKey = crypto.createHash("sha256").update(key).digest();
    const encryptedBytes = aes.utils.hex.toBytes(data);
    const aesCtr = new aes.ModeOfOperation.ctr(hashKey);
    const decryptedData = aesCtr.decrypt(encryptedBytes);
    return aes.utils.utf8.fromBytes(decryptedData);
};

// Convert seconds to HH:MM:SS
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = sec % 60;
    if (hours < 10) hours = "0"+hours;
    if (minutes < 10) minutes = "0"+minutes;
    if (seconds < 10) seconds = "0"+seconds;
    return (hours !== '00' ? hours + ':' : '') + minutes + ':' + seconds;
};

// Remove non-ASCII chars
module.exports.removeSpecialChar = async(str) => {
    if (!str) return false;
    return str.toString().replace(/[^\x20-\x7E]/g, '');
};

// Clean HTML for Anilist
module.exports.cleanAnilistHTML = function(text) {
    return text
        .replace('<br>', '\n')
        .replace(/<\/?(i|em)>/g, '*')
        .replace(/<\/?b>/g, '**')
        .replace(/~!|!~/g, '||')
        .replace("&amp;", "&")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&quot;", '"')
        .replace("&#039;", "'");
};

// Download file
module.exports.downloadFile = async function(url, path) {
    const response = await axios({ method: 'GET', url, responseType: 'stream' });
    const writer = createReadStream(path);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
};

// Fetch content from URL
module.exports.getContent = async function(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch(e) {
        console.log(e);
        return null;
    }
};

// Random string
module.exports.randomString = function(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

// AES-256-CBC encryption/decryption
module.exports.AES = {
    encrypt(cryptKey, cryptIv, plainData) {
        const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(cryptKey), Buffer.from(cryptIv));
        let encrypted = cipher.update(plainData);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return encrypted.toString('hex');
    },
    decrypt(cryptKey, cryptIv, encrypted) {
        const encryptedBuffer = Buffer.from(encrypted, 'hex');
        const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(cryptKey), Buffer.from(cryptIv, 'binary'));
        let decrypted = decipher.update(encryptedBuffer);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return String(decrypted);
    },
    makeIv() {
        return Buffer.from(crypto.randomBytes(16)).toString('hex').slice(0,16);
    }
};

// Home directory
module.exports.homeDir = function() {
    let returnHome, typeSystem;
    const home = process.env.HOME;
    const user = process.env.LOGNAME || process.env.USER || process.env.LNAME || process.env.USERNAME;

    switch(process.platform) {
        case "win32":
            returnHome = process.env.USERPROFILE || process.env.HOMEDRIVE + process.env.HOMEPATH || home || null;
            typeSystem = "win32";
            break;
        case "darwin":
            returnHome = home || (user ? '/Users/'+user : null);
            typeSystem = "darwin";
            break;
        case "linux":
            returnHome = home || (process.getuid() === 0 ? '/root' : (user ? '/home/'+user : null));
            typeSystem = "linux";
            break;
        default:
            returnHome = home || null;
            typeSystem = "unknown";
            break;
    }

    return [typeof os.homedir === 'function' ? os.homedir() : returnHome, typeSystem];
};

// Remove background using remove.bg API
module.exports.removeBackground = async(image) => {
    if (!image) throw new Error('RemoveBG: missing input');
    const pathOriginal = resolve(__dirname, '../../script/commands/cache', `${Date.now()}.jpg`);
    const pathNew = resolve(__dirname, '../../script/commands/cache', `${Date.now()+1000}.jpg`);

    await this.downloadFile(image, pathOriginal);

    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', createReadStream(pathOriginal), basename(pathOriginal));

    const keys = ['a58an6Ka7ZB1fwHtJ4kKaieb', 'kzqQMXdxTqVDuS1S91KG54Sj', 'SAdj4BtGWK2nPU8QiYDXrJRT', 'MxoPFvx7QemG7JcDVB7azogp', 'adyJwSQHJ3qWK2iwzj1LEQEQ', '7b6boYMmPiCg5t2SabBFHWdF'];

    try {
        const response = await axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: { ...formData.getHeaders(), 'X-Api-Key': keys[Math.floor(Math.random()*keys.length)] },
            encoding: null
        });

        if (response.status !== 200) throw new Error('RemoveBG failed');

        writeFileSync(pathNew, response.data);
        unlinkSync(pathOriginal);

        return pathNew;
    } catch (err) {
        throw err;
    }
};
