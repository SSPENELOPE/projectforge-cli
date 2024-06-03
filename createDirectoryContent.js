import * as fs from "fs";
import cliProgress from "cli-progress";
import colors from "colors";

const CURR_DIR = process.cwd();

const createDirectoryContents = (templatePath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(templatePath);

  // Create a new progress bar instance with custom options
  const progressBar = new cliProgress.SingleBar(
    {
      format: "Progress |" +
        colors.cyan("{bar}") +
        "| {percentage}% | {value}/{total} Files | Current File: " +
        colors.yellow("{filename}"),
      barCompleteChar: colors.green('\u2588'),  // solid block character
      barIncompleteChar: colors.red('\u2591'),  // light shade character
      barsize: 20, // Adjust barsize to make it smaller
      hideCursor: true,
    },
    cliProgress.Presets.shades_classic
  );

  // Start the progress bar with a total value (total number of files to create)
  progressBar.start(filesToCreate.length, 0, {
    filename: "",
  });

  filesToCreate.forEach((file) => {
    // Ignore node_modules directory, this allows us to get by without installing removing and installing node_modules
    if (file === "node_modules" || file === ".npmignore") return;

    const origFilePath = `${templatePath}/${file}`;

    // Get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, "utf8");

      // Rename
      if (file === ".npmignore") file = ".gitignore";

      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

      // Recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }

    // Update the progress bar with the current file name
    progressBar.increment({
      filename: file,
    });
  });

  // Stop the progress bar when the process is complete
  progressBar.stop();
};

export default createDirectoryContents;