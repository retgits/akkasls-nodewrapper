import { Command } from '../shell/command';
import { CommandInput, ShellResult } from '../shell/datatypes';

export async function generateNpmJs(outputfile: string, name: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(`akkasls entities generate npm js --output ${outputfile}`);
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

export async function generateMavenJava(outputfile: string, artifactID: string, groupID: string, packageName: string, version: string, { dryrun, silent, configFile, context }: CommandInput): Promise<ShellResult> {
    // Create the command
    const command = new Command(`akkasls entities generate maven java --output ${outputfile}`);
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