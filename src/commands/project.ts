import { config } from './commands';
import { Command } from '../shell/command';
import { CommandInput, ShellResult } from '../shell/datatypes';
import { Convert } from '../datatypes/converter';

/**
 * The listProjects command will list a one-line summary of all projects that your Akka Serverless account has access to.
 *
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function listProjects({ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.projects.listProjects);

    // Set parameters
    command.setSilent(silent);
    command.setConfigFile(configFile);
    command.setContext(context);

    // Run the command
    if(dryrun) {
        return command.dryRun();
    }

    const result = await command.run();
    if (result.code === 0 ) {
        result.response = Convert.toProjects(result?.stdout);
    }
    return result;
}

/**
 * The newProject command will create a new project in your Akka Serverless account.
 *
 * @param {string} name The name for your new project
 * @param {string} description The description for your new project
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function newProject(name: string, description: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls projects new');
    command.addParameter({name: 'name', value: name, addNameToCommand: false});
    command.addParameter({name: 'description', value: `"${description}"`, addNameToCommand: false});

    // Set parameters
    command.setSilent(silent);
    command.setConfigFile(configFile);
    command.setContext(context);

    // Run the command
    if(dryrun) {
        return command.dryRun();
    }

    return await command.run();
}