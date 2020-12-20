import * as shelljs from 'shelljs';
import * as datatypes from './datatypes';
import { Command } from './command';

// Set the execPath specifically to node due to a bug in shelljs
// https://github.com/shelljs/shelljs/issues/704
shelljs.config.execPath = shelljs.which('node').toString();

export interface Shell {
    exec(cmd: Command): Promise<datatypes.ShellResult>;
    existsInPath(tool: string): boolean;
}

export const shell: Shell = {
    exec: exec,
    existsInPath: existsInPath
};

function existsInPath(tool: string): boolean {
    if (shelljs.which(tool)) {
        return true;
    }
    return false;
}

function exec(cmd: Command): Promise<datatypes.ShellResult> {
    // When no working directory is provided the default dir is used
    const wd = (cmd.workingDir) ? cmd.workingDir : '.';

    const shellOpts = {
        env: process.env,
        async: true,
        cwd: wd,
        silent: cmd.isSilent()
    };

    return new Promise<datatypes.ShellResult>((resolve) => {
        shelljs.exec(cmd.toString(), shellOpts, (code, stdout, stderr) => {
            resolve({code : code, stdout : stdout, stderr : stderr});
        });
    });
}