module.export = function newRandomMessage(targetFile) {
    return targetFile[getRandomInt(targetFile.length - 1)];
}