import { execSync, spawn } from "child_process";
import os from "os";
import cliProgress from "cli-progress";

class ProcessHandler {
    static handlePackageInstall(newProjectPath) {
        console.log("Running npm install... \n");

        const npmCommand = os.platform() === "win32" ? "where" : "which";
      
        try {
          const npmPaths = execSync(`${npmCommand} npm`, { encoding: 'utf-8' }).trim().split('\n');
      
          const npmPath = npmPaths.find(path => path.endsWith('npm') || path.endsWith('npm.cmd'));
          if (!npmPath) {
            throw new Error("npm not found in the system PATH");
          }
      
          const progressBar = new cliProgress.SingleBar({
            format: 'Installing [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} files',
            clearOnComplete: true,
          }, cliProgress.Presets.shades_classic);
      
          const totalPackages = 100; // This is an arbitrary total for demonstration purposes
          progressBar.start(totalPackages, 0);
      
          let progress = 0;
      
          const installProcess = spawn(npmPath, ['install'], { cwd: newProjectPath });
      
          installProcess.stdout.on('data', (data) => {
            process.stdout.write(data.toString());
      
            // Increment progress based on the number of lines read
            progress += data.toString().split('\n').length;
            progressBar.update(Math.min(progress, totalPackages));
          });
      
          installProcess.stderr.on('data', (data) => {
            process.stderr.write(data.toString());
      
            // Increment progress based on the number of lines read
            progress += data.toString().split('\n').length;
            progressBar.update(Math.min(progress, totalPackages));
          });
      
          installProcess.on('exit', (code) => {
            progressBar.update(totalPackages);
            progressBar.stop();
            if (code === 0) {
              console.clear();
              console.log("npm install completed.");
            } else {
              console.clear();
              console.error("npm install failed.");
              console.log("Navigate to your app and run 'npm install' for debugging")
            }
            console.log("Enjoy your new app, Happy Hacking");
          });
      
          installProcess.on('error', (err) => {
            progressBar.stop();
            console.error('Failed to start subprocess:', err);
          });
      
        } catch (error) {
          console.error('Error finding npm:', error);
        }
    }
}


export default ProcessHandler;