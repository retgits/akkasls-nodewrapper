import { AkkaServerlessCommand, Command, PersistentFlags } from "./command";
import { Result } from "./shell";

export const createRouteCommand: AkkaServerlessCommand = {
    command: 'akkasls routes create -o json',
    options: {
        name: {
            addFlagName: false,
            name: 'name',
            value: ''
        },
        clientCaSecret: {
            addFlagName: true,
            name: 'client-ca-secret',
            value: ''
        },
        corsMethod: {
            addFlagName: true,
            name: 'cors-method',
            value: ''
        },
        corsOrigin: {
            addFlagName: true,
            name: 'cors-origin',
            value: ''
        },
        filename: {
            addFlagName: true,
            name: 'filename',
            value: ''
        },
        hostname: {
            addFlagName: true,
            name: 'hostname',
            value: ''
        },
        path: {
            addFlagName: true,
            name: 'path',
            value: ''
        },
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export const deleteRouteCommand: AkkaServerlessCommand = {
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

export const exportRouteCommand: AkkaServerlessCommand = {
    command: 'akkasls routes export -o json',
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

export const getRouteCommand: AkkaServerlessCommand = {
    command: 'akkasls routes get -o json',
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

export const listRoutesCommand: AkkaServerlessCommand = {
    command: 'akkasls routes list -o json',
    options: {
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        }
    }
};

export const updateRouteCommand: AkkaServerlessCommand = {
    command: 'akkasls routes update -o json',
    options: {
        name: {
            addFlagName: false,
            name: 'name',
            value: ''
        },
        clientCaSecret: {
            addFlagName: true,
            name: 'client-ca-secret',
            value: ''
        },
        corsMethod: {
            addFlagName: true,
            name: 'cors-method',
            value: ''
        },
        corsOrigin: {
            addFlagName: true,
            name: 'cors-origin',
            value: ''
        },
        filename: {
            addFlagName: true,
            name: 'filename',
            value: ''
        },
        hostname: {
            addFlagName: true,
            name: 'hostname',
            value: ''
        },
        path: {
            addFlagName: true,
            name: 'path',
            value: ''
        },
        project: {
            addFlagName: true,
            name: 'project',
            value: ''
        },
        removeClientCaSecret: {
            addFlagName: true,
            name: 'remove-client-ca-secret',
            value: ''
        },
        removeCorsMethod: {
            addFlagName: true,
            name: 'remove-cors-method',
            value: ''
        },
        removeCorsOrigin: {
            addFlagName: true,
            name: 'remove-cors-origin',
            value: ''
        },
        removePath: {
            addFlagName: true,
            name: 'remove-path',
            value: ''
        }
    }
};

export function handleRoutesCommand(cmd: AkkaServerlessCommand, pf: PersistentFlags): Promise<Result> {
    const command = new Command(cmd, pf);
    return command.run();
}