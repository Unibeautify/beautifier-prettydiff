import beautifier from "../src";

test("should successfully load package.json into pkg property of Beautifier", () => {
    const name: string = "@unibeautify/beautifier-prettydiff";
    expect(beautifier.package).toHaveProperty("name", name);
});
