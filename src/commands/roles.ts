import { Command } from '../shell/command';
import { CommandInput, ShellResult } from '../shell/datatypes';
import { Convert } from '../datatypes/converter';

export async function deleteInvite(projectID: string, emailAddress:string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls roles invitations delete');
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

export async function addInvite(projectID: string, emailAddress:string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls roles invitations invite-user');
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

export async function listInvites(projectID: string,{ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls roles invitations list -o json');
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

export async function listMembers(projectID: string,{ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls roles list-bindings -o json');
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