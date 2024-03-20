import fs from "fs";

const fsPromise = fs.promises;
async function log(logData) {
    try {
        const uplogData = `${new Date().toString()}.Log Data:${logData}\n`;
        await fsPromise.appendFile("log.txt", uplogData);
    } catch (err) {
        console.log(err);
    }
}

const loggerMiddleware = async(req, res, next) => {
    if (!req.url.includes("signin")) {
        const data = `${req.url}-${JSON.stringify(req.body)}`;
        await log(data);
    }
    next();
};

export default loggerMiddleware;