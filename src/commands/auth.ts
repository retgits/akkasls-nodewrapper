import { Command } from '../shell/command';
import { CommandInput, ShellResult } from '../shell/datatypes';
import { Convert } from '../datatypes/converter';

export async function currentLogin({ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls auth current-login -ojson');

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
        result.response = Convert.toCurrentLogin(result?.stdout);
    }
    return result;
}

export async function listAuthTokens({ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls auth tokens list -o json');

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
        result.response = Convert.toTokens(result?.stdout);
    }
    return result;
}

export async function login({ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls auth login --no-launch-browser');

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

export async function logout({ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls auth logout');

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

export async function revokeAuthToken(tokenID: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command('akkasls auth tokens revoke');
    command.addParameter({name: 'token', value: tokenID, addNameToCommand: false});

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