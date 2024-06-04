import { execSync, spawn } from "child_process";
import os from "os";
import fs from "fs";
import path from "path";
import cliProgress from "cli-progress";

class ProcessHandler {
  static handlePackageInstall(newProjectPath) {
    console.log("Running npm install... \n");

    const npmCommand = os.platform() === "win32" ? "where" : "which";
    const packageJsonPath = path.join(newProjectPath, "package.json");
    try {
      // Read package.json file
      const packageJsonData = fs.readFileSync(packageJsonPath, "utf-8");
      const packageJson = JSON.parse(packageJsonData);

      // Count the number of dependencies and devDependencies
      const dependencies = packageJson.dependencies || {};
      const devDependencies = packageJson.devDependencies || {};
      const totalPackages =
        Object.keys(dependencies).length + Object.keys(devDependencies).length;

      const npmPaths = execSync(`${npmCommand} npm`, { encoding: "utf-8" })
        .trim()
        .split("\n");

      const npmPath = npmPaths.find(
        (path) => path.endsWith("npm") || path.endsWith("npm.cmd")
      );
      if (!npmPath) {
        throw new Error("npm not found in the system PATH");
      }

      const progressBar = new cliProgress.SingleBar(
        {
          format:
            "Installing [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} files",
          clearOnComplete: true,
        },
        cliProgress.Presets.shades_classic
      );

      let progress = 0;

      const installProcess = spawn(npmPath, ["install"], {
        cwd: newProjectPath,
      });

      progressBar.start(totalPackages, 0);

      installProcess.stdout.on("data", (data) => {
        process.stdout.write(data.toString());

        // Increment progress based on the number of lines read
        progress += data.toString().split("\n").length;
        progressBar.update(Math.min(progress, totalPackages));
      });

      installProcess.stderr.on("data", (data) => {
        process.stderr.write(data.toString());

        // Increment progress based on the number of lines read
        progress += data.toString().split("\n").length;
        progressBar.update(Math.min(progress, totalPackages));
      });

      installProcess.on("exit", (code) => {
        progressBar.update(totalPackages);
        progressBar.stop();
        if (code === 0) {
          console.clear();
          console.log("npm install completed.");
        } else {
          console.clear();
          console.error("npm install failed.");
          console.log(
            "Navigate to your app and run 'npm install' for debugging"
          );
        }
        console.log("Enjoy your new app, Happy Hacking");
      });

      installProcess.on("error", (err) => {
        progressBar.stop();
        console.error("Failed to start subprocess:", err);
      });
    } catch (error) {
      console.error("Error finding npm:", error);
    }
  }
}

export default ProcessHandler;