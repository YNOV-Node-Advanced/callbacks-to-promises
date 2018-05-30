function resizeImages(source, dest, width, height, callback) {
    fs.readdir(source, (err, files) => {
        if (err) {
            callback(err);
        } else {
            files.forEach((filename, fileIndex) => {
                gm(source + filename)
                    .resize(width, height)
                    .write(
                        dest + "w" + width + "_" + filename,
                        (err, values) => {
                            if (err) {
                                callback(err);
                            } else if (fileIndex == files.length - 1) {
                                callback();
                            }
                        }
                    );
            });
        }
    });
}
