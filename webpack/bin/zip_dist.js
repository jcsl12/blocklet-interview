const path = require('path');
const fs = require('fs');
const archiver = require("archiver");

// 项目根目录
const ROOT = path.resolve(__dirname, "../../");
const SRC_DIST = path.resolve(ROOT, 'dist');
const OUTPUT_DIR = path.resolve(ROOT, "outputs");

function doit(){

    // dist不存在返回
    if(!fs.existsSync(SRC_DIST)){
        return ;
    }
    // outputs目录不存在要创建
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR);
    }
    const SavePath = path.resolve(OUTPUT_DIR, 'dist.zip')

    const strem = fs.createWriteStream(SavePath);

    const archive = archiver('zip');
    archive.on('error', function (err) {
        throw err;
    });
    archive.on("end", function () {
        console.log(`『dist目录』 打包结束  √ -`)
    })
    archive.pipe(strem);
    // 文件夹压缩
    archive.directory(SRC_DIST, false);
    // 文件压缩
    // archive.file('test.js');
    archive.finalize();
}

doit()