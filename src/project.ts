import { AkkaServerlessCommand, Command, PersistentFlags } from "./command";
import { Result } from "./shell";

export const listProjectsCommand: AkkaServerlessCommand = {
    command: 'akkasls projects list -o json',
    options: {}
};

export const getProjectCommand: AkkaServerlessCommand = {
    command: 'akkasls projects get -o json',
    options: {
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export const newProjectCommand: AkkaServerlessCommand = {
    command: 'akkasls projects new -o json',
    options: {
        name: {
            addFlagName: false,
            name: 'name',
            value: ''
        },
        description: {
            addFlagName: false,
            name: 'description',
            value: ''
        },
        region: {
            addFlagName: true,
            name: 'region',
            value: ''
        }
    }
};

/**
 * Command to delete a project
 * 
 * Required options:
 * * project
 * 
 * Optional options:
 * * none
 */
export const deleteProjectCommand: AkkaServerlessCommand = {
    command: 'akkasls projects delete -o json',
    options: {
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export function handleProjectCommand(cmd: AkkaServerlessCommand, pf: PersistentFlags): Promise<Result> {
    const command = new Command(cmd, pf);
    return command.run();
}