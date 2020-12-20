import { Command } from '../shell/command';
import { CommandInput, ShellResult } from '../shell/datatypes';
import { Convert } from '../datatypes/converter';

export async function deployService(service: string, image: string, projectID: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls services deploy');
    command.addParameter({name: 'service', value: service, addNameToCommand: false});
    command.addParameter({name: 'image', value: image, addNameToCommand: false});
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

export async function exposeService(service: string, flags: string, projectID: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls services expose',);
    command.addParameter({name: 'service', value: service, addNameToCommand: false});
    command.addParameter({name: 'project', value: projectID, addNameToCommand: true});
    command.addParameter({name: 'flags', value: flags, addNameToCommand: false});

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

export async function listServices(projectID: string,{ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls services list -o json');
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
        result.response = Convert.toServices(result?.stdout);
    }
    return result;
}

export async function undeployService(service: string, projectID: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls services undeploy');
    command.addParameter({name: 'service', value: service, addNameToCommand: false});
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

export async function unexposeService(service: string, hostname: string, projectID: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls services unexpose');
    command.addParameter({name: 'service', value: service, addNameToCommand: false});
    command.addParameter({name: 'hostname', value: hostname, addNameToCommand: false});
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