import { CurrentLogin, Token } from './auth';
import { Credential } from './docker';
import { Project } from './project';
import { Invite, Member } from './roles';
import { Service } from './service';

/**
 * Convert is a utility class that converts JSON strings to objects
 */
export class Convert {
    /**
     * Converts a JSON string to a current login
     * @param json the json string
     */
    public static toCurrentLogin(json: string): CurrentLogin {
        return JSON.parse(json);
    }

    /**
     * Converts a JSON string to an array of tokens
     * @param json the json string
     */
    public static toTokens(json: string): Token[] {
        return JSON.parse(json);
    }

    /**
     * Converts a JSON string to an array of Docker credentials
     * @param json the json string
     */
    public static toCredentials(json: string): Credential[] {
        return JSON.parse(json);
    }

    /**
     * Converts a JSON string to an array of projects
     * @param json the json string
     */
    public static toProjects(json: string): Project[] {
        return JSON.parse(json);
    }

    /**
     * Converts a JSON string to an array of invites
     * @param json the json string
     */
    public static toInvites(json: string): Invite[] {
        return JSON.parse(json);
    }

    /**
     * Converts a JSON string to an array of members
     * @param json the json string
     */
    public static toMembers(json: string): Member[] {
        return JSON.parse(json);
    }

    /**
     * Converts a JSON string to an array of services
     * @param json the json string
     */
    public static toServices(json: string): Service[] {
        return JSON.parse(json);
    }
}