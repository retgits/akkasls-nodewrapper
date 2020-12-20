import { Command } from '../shell/command';
import { CommandInput, ShellResult } from '../shell/datatypes';
import { Convert } from '../datatypes/converter';

export async function addDockerCredentials(projectID: string, credentials: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls docker add-credentials');
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

export async function deleteDockerCredentials(projectID: string, credentialID: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls docker delete-credentials');
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