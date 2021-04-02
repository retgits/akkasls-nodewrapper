import { config } from './commands';
import { Command } from '../shell/command';
import { CommandInput, ShellResult } from '../shell/datatypes';
import { Convert } from '../datatypes/converter';

/**
 * The addDockerCredentials command adds a set of docker credentials to the project.
 *
 * @param {string} projectID The ID of the project to use
 * @param {string} credentials The string containing credentials and server URL
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function addDockerCredentials(projectID: string, credentials: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.docker.addDockerCredentials);
    command.addParameter({name: 'credentials', value: credentials, addNameToCommand: false});
    command.addParameter({name: 'project', value: projectID, addNameToCommand: true});

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

/**
 * The deleteDockerCredentials command removes a set of Docker credentials from the project.
 *
 * @param {string} projectID The ID of the project to use
 * @param {string} credentialID The ID of the credential to remove
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function deleteDockerCredentials(projectID: string, credentialID: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.docker.deleteDockerCredentials);
    command.addParameter({name: 'credentialID', value: credentialID, addNameToCommand: false});
    command.addParameter({name: 'project', value: projectID, addNameToCommand: true});

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

/**
 * The listDockerCredentials command lists all the Docker credentials set for the project. (passwords are not displayed)
 *
 * @param {string} projectID The ID of the project to use
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function listDockerCredentials(projectID: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls docker list-credentials -o json');
    command.addParameter({name: 'project', value: projectID, addNameToCommand: true});

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
        result.response = Convert.toCredentials(result?.stdout);
    }
    return result;
}