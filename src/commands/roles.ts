import { config } from './commands';
import { Command } from '../shell/command';
import { CommandInput, ShellResult } from '../shell/datatypes';
import { Convert } from '../datatypes/converter';

/**
 * The deleteInvite command deletes an invitation from a project
 *
 * @param {string} projectID The ID of the project to delete the invite from
 * @param {string} emailAddress The email address to the delete the invite for
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function deleteInvite(projectID: string, emailAddress:string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.roles.deleteInvite);
    command.addParameter({name: 'emailAddress', value: emailAddress, addNameToCommand: false});
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
 * The addInvite command invites a user to a project
 *
 * @param {string} projectID The ID of the project to invite the user to
 * @param {string} emailAddress The email address of the user to invite
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function addInvite(projectID: string, emailAddress:string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.roles.addInvite);
    command.addParameter({name: 'role', value: 'admin', addNameToCommand: true});
    command.addParameter({name: 'emailAddress', value: emailAddress, addNameToCommand: false});
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
 * The listInvites command lists all invitations to a project
 *
 * @param {string} projectID The ID of the project to list invites for
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function listInvites(projectID: string,{ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.roles.listInvites);
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
        result.response = Convert.toInvites(result?.stdout);
    }
    return result;
}

/**
 * The listMembers command lists all members to a project
 *
 * @param {string} projectID The ID of the project to list members for
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function listMembers(projectID: string,{ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.roles.listMembers);
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
        result.response = Convert.toMembers(result?.stdout);
    }
    return result;
}