import { AkkaServerlessCommand, Command, PersistentFlags } from "./command";
import { Result } from "./shell";

export const createAsymmetricSecretCommand: AkkaServerlessCommand = {
    command: 'akkasls routes delete -o json',
    options: {
        name: {
            addFlagName: false,
            name: 'name',
            value: ''
        },
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export function handleSecretsCommand(cmd: AkkaServerlessCommand, pf: PersistentFlags): Promise<Result> {
    const command = new Command(cmd, pf);
    return command.run();
}