import { AkkaServerlessCommand, Command, PersistentFlags } from "./command";
import { Result } from "./shell";

export const listCredentialsCommand: AkkaServerlessCommand = {
    command: 'akkasls docker list-credentials -o json',
    options: {
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export const addCredentialsCommand: AkkaServerlessCommand = {
    command: 'akkasls docker add-credentials -o json',
    options: {
        dockerEmail: {
            addFlagName: true,
            name: 'docker-email',
            value: ''
        },
        dockerPassword: {
            addFlagName: true,
            name: 'docker-password',
            value: ''
        },
        dockerServer: {
            addFlagName: true,
            name: 'docker-server',
            value: ''
        },
        dockerUsername: {
            addFlagName: true,
            name: 'docker-username',
            value: ''
        },
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export const deleteCredentialsCommand: AkkaServerlessCommand = {
    command: 'akkasls docker delete-credentials -o json',
    options: {
        credentialID: {
            addFlagName: false,
            name: 'credentialID',
            value: ''
        },
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export function handleDockerCommand(cmd: AkkaServerlessCommand, pf: PersistentFlags): Promise<Result> {
    const command = new Command(cmd, pf);
    return command.run();
}