import { AkkaServerlessCommand, Command, PersistentFlags } from "./command";
import { Result } from "./shell";

export const addInviteCommand: AkkaServerlessCommand = {
    command: 'akkasls roles invitations invite-user -o json',
    options: {
        emailAddress: {
            addFlagName: false,
            name: 'emailAddress',
            value: ''
        },
        role: {
            addFlagName: true,
            name: 'role',
            value: ''
        },
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export const deleteInviteCommand: AkkaServerlessCommand = {
    command: 'akkasls roles invitations delete -o json',
    options: {
        emailAddress: {
            addFlagName: false,
            name: 'emailAddress',
            value: ''
        },
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export const listInvitesCommand: AkkaServerlessCommand = {
    command: 'akkasls roles invitations list -o json',
    options: {
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export const listMembersCommand: AkkaServerlessCommand = {
    command: 'akkasls roles list-bindings -o json',
    options: {
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export function handleRolesCommand(cmd: AkkaServerlessCommand, pf: PersistentFlags): Promise<Result> {
    const command = new Command(cmd, pf);
    return command.run();
}