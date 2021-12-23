import { AkkaServerlessCommand, Command, PersistentFlags } from "./command";
import { Result } from "./shell";

export const loginCommand: AkkaServerlessCommand = {
    command: 'akkasls auth login',
    options: {}
};

export const logoutCommand: AkkaServerlessCommand = {
    command: 'akkasls auth logout',
    options: {}
};

export const signupCommand: AkkaServerlessCommand = {
    command: 'akkasls auth signup',
    options: {}
};

export const currentLoginCommand: AkkaServerlessCommand = {
    command: 'akkasls auth current-login -o json',
    options: {}
};

export const createAuthTokenCommand: AkkaServerlessCommand = {
    command: 'akkasls auth tokens create -o json',
    options: {
        type: {
            addFlagName: true,
            name: 'type',
            value: ''
        },
        scopes: {
            addFlagName: true,
            name: 'scopes',
            value: ''
        },
        description: {
            addFlagName: true,
            name: 'description',
            value: ''
        }
    }
};

export const revokeAuthTokenCommand: AkkaServerlessCommand = {
    command: 'akkasls auth tokens revoke -o json',
    options: {
        token: {
            addFlagName: false,
            name: 'token',
            value: ''
        }
    }
};

export const listAuthTokensCommand: AkkaServerlessCommand = {
    command: 'akkasls auth tokens list -o json',
    options: {}
};

export function handleAuthCommand(cmd: AkkaServerlessCommand, pf: PersistentFlags): Promise<Result> {
    const command = new Command(cmd, pf);
    return command.run();
}