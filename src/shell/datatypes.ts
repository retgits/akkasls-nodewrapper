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

/**
 * An interface for flags of `akkasls services logs`
 * * `cloudstateLogs`: Whether cloudstate sidecar logs should be included
 * * `lifecycleLogs`: Whether lifecycle logs should be included
 * * `proxyLogs`: Whether HTTP proxy logs should be included
 * * `serviceLogs`: Whether service logs should be included
 * * `tail`: The maximum number of lines to fetch
 *
 * @interface LogTypes
 */
export interface LogTypes {
    cloudstateLogs?: boolean;
    lifecycleLogs?: boolean;
    proxyLogs?: boolean;
    serviceLogs?: boolean;
    tail?: number;
}

/**
 * An interface for environment variables in `akkasls service` commands
 *  * `vars`: an optional array of strings representing key value pairs (like MSG=Hello)
 *
 * @interface EnvVars
 */
export interface EnvVars {
    vars?: string[]
}