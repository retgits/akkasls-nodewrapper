import * as datatypes from './datatypes';
import { shell } from './shell';

export class Command {
    public readonly command: string;
    public readonly workingDir?: string;
    private _parameters: datatypes.Parameter[] = [];
    private _silent = false;
    private _configFile = '';
    private _context = '';

    constructor(command: string, workingDir?: string) {
        this.command = command;
        this.workingDir = workingDir;
    }

    addParameter({ name, value, addNameToCommand }: datatypes.IParameter): void {
        this._parameters.push({
            name: name,
            value: value,
            addNameToCommand: addNameToCommand
        });
    }

    setSilent(value: boolean | undefined): void {
        if(value) {
            this._silent = value;
        }
    }

    isSilent(): boolean {
        return this._silent;
    }

    setConfigFile(value: string | undefined): void {
        if(value) {
            this._configFile = value;
        }
    }

    setContext(value: string | undefined): void {
        if(value) {
            this._context = value;
        }
    }

    toString(): string {
        let str = this.command;

        this._parameters.forEach((cmd) => {
            if (cmd.addNameToCommand) {
                str += ` --${cmd.name}`;
            }
            str += ` ${cmd.value}`;
        });

        if(this._configFile.length > 1) {
            str += ` --config ${this._configFile}`;
        }

        if(this._context.length > 1) {
            str += ` --context ${this._context}`;
        }

        return str;
    }

    dryRun(): Promise<datatypes.ShellResult> {
        return new Promise<datatypes.ShellResult>((resolve) => {
            resolve({ code: 0, stdout: this.toString(), stderr: '' });
        });
    }

    run(): Promise<datatypes.ShellResult> {
        return shell.exec(this);
    }
}