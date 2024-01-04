const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Adds a note",
  handler: function () {
    console.log("Adding note");
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing note");
  },
});

yargs.command({
  command: "list",
  describe: "Remove a note",
  handler: function () {
    console.log("Listing note");
  },
});

yargs.command({
  command: "read",
  describe: "Remove a note",
  handler: function () {
    console.log("Reading note");
  },
});

console.log(yargs.argv);
