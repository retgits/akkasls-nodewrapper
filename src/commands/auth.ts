import { config } from './commands';
import { Command } from '../shell/command';
import { CommandInput, ShellResult } from '../shell/datatypes';
import { Convert } from '../datatypes/converter';

/**
 * The currentLogin command shows details for the currently logged in user. This includes name, email, and whether the user has been verified.
 *
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function currentLogin({ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.auth.currentLogin);

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

/**
 * The listAuthTokens command will display all currently authorized tokens for your account.
 *
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function listAuthTokens({ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.auth.listAuthTokens);

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

/**
 * The login command will run the login procedure. This command uses `--no-launch-browser` to display the URL rather than try to launch the browser itself.
 *
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function login({ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.auth.login);

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
 * The logout command removes your Akka Serverless authorization token. Your Akka Serverless context is deleted and reset to 'default'.
 *
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function logout({ dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.auth.logout);

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
 * The revokeAuthToken command allows you to invalidate a specific authorization token.
 *
 * @param {string} tokenID the ID of the token to invalidate
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function revokeAuthToken(tokenID: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.auth.revokeAuthToken);
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

/**
 * The createAuthToken command allows you to create a refresh token that can be used to authenticate another akkasls command instance on another machine.
 *
 * @param {string} type The type of token. Valid types are refresh and access.
 * @param {string} scopes The scopes for the token. The only valid scope is execution
 * @param {string} description A description of the token. This will be stored with the token for reference.
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function createAuthToken(type: string, scopes: string, description: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.auth.revokeAuthToken);
    command.addParameter({name: 'type', value: type, addNameToCommand: true});
    command.addParameter({name: 'scopes', value: scopes, addNameToCommand: true});
    command.addParameter({name: 'description', value: description, addNameToCommand: true});

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