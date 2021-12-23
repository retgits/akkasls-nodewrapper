import { shell, Result } from "./shell";

/**
 * PersistentFlags are the flags that are common to all commands
 * * `configFile`: location of config file (default "~/.akkaserverless/config.yaml")
 * * `context`: configuration context to use
 * * `disablePrompt`: disable all interactive prompts when running akkasls commands. If input is required, defaults will be used, or an error will be raised.
 * * `dryrun`: print the commands that would be executed rather than executing them
 * * `silent`: set quiet output (helpful when used as part of a script)
 *
 * @interface PersistentFlags
 */
export interface PersistentFlags {
    configFile?: string;
    context?: string;
    disablePrompt?: boolean;
    dryrun?: boolean;
    silent?: boolean;
}

/**
 * Parameter is an input for a command
 * * name: name of the parameter
 * * value: value of the parameter
 * * addFlagName: adds the name of the parameter as a flag
 * 
 * To get `--project bla` the values should be name = project, value = bla, addFlagName = true 
 *
 * @interface Parameter
 */
interface Parameter {
    name: string;
    value: string;
    addFlagName: boolean;
}

/**
 * Variables are the secrets and environment variables that are needed when deploying services or creating secrets. They're created as key/value pairs.
 *
 * @interface Variables
 */
export interface Variables {
    [key: string]: string
}

/**
 * AkkaServerlessCommand is an interface that serves as an abstract for all commands
 *
 * @export
 * @interface AkkaServerlessCommand
 */
export interface AkkaServerlessCommand {
    command: string;
    options: {
        [key: string]: Parameter
    }
}

/**
 * Command wraps an akkasls command, executes it, and returns the result
 *
 * @export
 * @class Command
 */
export class Command {
    private _parameters: Parameter[] = [];
    public readonly persistentFlags: PersistentFlags;
    public readonly command: string;
    public readonly workingDir?: string;

    /**
     * Creates an instance of Command.
     * 
     * @param {string} command the command to execute
     * @param {PersistentFlags} persistentFlags the persistent flags for this command
     * @param {ParameterObject} params the parameters to add to the command
     * @param {string} [workingDir] the working directory for this command (will default to current directory if not provided)
     * @memberof Command
     */
    constructor(command: AkkaServerlessCommand, persistentFlags: PersistentFlags, workingDir?: string) {
        this.command = command.command;
        this.workingDir = (workingDir) ? workingDir : '.';
        this.persistentFlags = persistentFlags;
        this.addParameters(command);
    }

    /**
     * Add a parameter to the command
     *
     * @param {Parameter} p parameter to add
     * @memberof Command
     */
    private _addParameter(p: Parameter): void {
        // wrap parameters with spaces in double quotes
        if(p.value.includes(' ')) {
            p.value = `"${p.value}"`;
        }

        this._parameters.push({
            name: p.name,
            value: p.value,
            addFlagName: p.addFlagName
        });
    }

    /**
     * Adds a parameter object, which is deconstructed into separate parameters
     * 
     * @param {AkkaServerlessCommand} p parameter object to add
     * @memberof Command
     */
    addParameters(p: AkkaServerlessCommand): void {
        if (Object.keys(p.options).length > 0) {
            const params = Object.entries(p.options);
            for (let index = 0; index < params.length; index++) {
                const param = params[index][1];
                if(param.addFlagName || param.value.length > 0) {
                    this._addParameter(params[index][1]);
                }
            }
        }
    }

    /**
     * Returns a string representation of the command
     *
     * @return {*}  {string}
     * @memberof Command
     */
    toString(): string {
        let str = this.command;

        this._parameters.forEach((cmd) => {
            if (cmd.addFlagName) {
                str += ` --${cmd.name}`;
            }
            str += ` ${cmd.value}`;
        });

        if (this.persistentFlags.configFile) {
            str += ` --config ${this.persistentFlags.configFile}`;
        }

        if (this.persistentFlags.context) {
            str += ` --context ${this.persistentFlags.context}`;
        }

        if (this.persistentFlags.disablePrompt) {
            str += ` --disable-prompt`;
        }

        return str;
    }

    private _getShellOpts(): any {
        return {
            env: process.env,
            async: true,
            cwd: this.workingDir,
            silent: this.persistentFlags.silent,
            stdio: null
        };
    }

    /**
     * Executes the command
     *
     * @return {*}  {Promise<Result>} the result of the command
     * @memberof Command
     */
    run(): Promise<Result> {
        if (this.persistentFlags.dryrun) {
            return new Promise<Result>((resolve) => {
                resolve({ code: undefined, stdout: this.toString(), stderr: '' });
            });
        }
        return shell.exec(this.toString(), this._getShellOpts());
    }
}
