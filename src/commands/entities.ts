import { config } from './commands';
import { Command } from '../shell/command';
import { CommandInput, ShellResult } from '../shell/datatypes';

/**
 * The generateNpmJs command generates an initial Akka Serverless Javascript codebase using NPM
 *
 * @param {string} outputFile The name of the zipfile to create
 * @param {string} name The name of the new project
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function generateNpmJs(outputFile: string, name: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.entities.generateNpmJs);
    command.addParameter({ name: 'output', value: outputFile, addNameToCommand: true });
    command.addParameter({ name: 'name', value: name, addNameToCommand: true });

    // Set parameters
    command.setSilent(silent);
    command.setConfigFile(configFile);
    command.setContext(context);

    // Run the command
    if (dryrun) {
        return command.dryRun();
    }

    return await command.run();
}

/**
 * The generateNpxJs command generate an initial Akka Serverless Javascript codebase using npx in the current folder
 *
 * @param {string} outputFile The name of the zipfile to create
 * @param {string} name The name of the new project
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function generateNpxJs(name: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.entities.generateNpxJs);
    command.addParameter({ name: 'name', value: name, addNameToCommand: false });

    // Set parameters
    command.setSilent(silent);
    command.setConfigFile(configFile);
    command.setContext(context);

    // Run the command
    if (dryrun) {
        return command.dryRun();
    }

    return await command.run();
}

/**
 * The command generateMavenJava generates an initial Akka Serverless Java codebase using Maven
 *
 * @param {string} outputFile The name of the zipfile to create
 * @param {string} artifactID The artifactId to use for the new project
 * @param {string} groupID The groupId to use for the new project
 * @param {string} packageName The Java package to use for the new project
 * @param {string} version The initial version to use for the new project
 * @param {CommandInput} { dryrun, silent, configFile, context }
 * @return {*}  {Promise<ShellResult>}
 */
export async function generateMavenJava(outputFile: string, artifactID: string, groupID: string, packageName: string, version: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(config.entities.generateMavenJava);
    command.addParameter({ name: 'output', value: outputFile, addNameToCommand: true });
    command.addParameter({ name: 'artifact-id', value: artifactID, addNameToCommand: true });
    command.addParameter({ name: 'group-id', value: groupID, addNameToCommand: true });
    command.addParameter({ name: 'package', value: packageName, addNameToCommand: true });
    command.addParameter({ name: 'version', value: version, addNameToCommand: true });

    // Set parameters
    command.setSilent(silent);
    command.setConfigFile(configFile);
    command.setContext(context);

    // Run the command
    if (dryrun) {
        return command.dryRun();
    }

    return await command.run();
}