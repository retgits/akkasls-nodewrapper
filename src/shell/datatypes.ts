import { CurrentLogin, Token } from '../datatypes/auth';
import { Credential } from '../datatypes/docker';
import { Project } from '../datatypes/project';
import { Invite, Member } from '../datatypes/roles';
import { Service } from '../datatypes/service';


export interface ShellResult {
    readonly code: number;
    readonly stdout: string;
    readonly stderr: string;
    response?: CurrentLogin | Token[] | Credential[] | Project[] | Invite[] | Member[] | Service[];
}

export type Parameter = {
    name: string
    value: string
    addNameToCommand: boolean
};

export interface IParameter {
    name: string
    value: string
    addNameToCommand: boolean
}

export interface CommandInput {
    dryrun?: boolean;
    silent?: boolean;
    configFile?: string;
    context?: string;
}