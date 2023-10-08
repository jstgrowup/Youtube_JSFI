const fs = require("node:fs/promises");
const res = async () => {
  try {
    const fileHandle = await fs.open("test.txt","w");
    for (let i = 0; i < 100000; i++) {
      await fileHandle.write(` ${i} `);
    }
  } catch (error) {
    console.log("error:", error);
  }
};
res()