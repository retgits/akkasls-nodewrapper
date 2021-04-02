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

/**
 * An interface for global flags of `akkasls`
 *  * `dryrun`: print the command but do not execute it
 *  * `silent`: do not print any intermediate output and only return the result
 *  * `configFile`: the config file to use (default "~/.akkaserverless/config.yaml")
 *  * `context`: the configutation context to use
 *
 * @interface CommandInput
 */
export interface CommandInput {
    dryrun?: boolean;
    silent?: boolean;
    configFile?: string;
    context?: string;
}

export interface EnvVars {
    vars?: string[]
}