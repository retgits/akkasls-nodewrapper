/* eslint-disable @typescript-eslint/naming-convention */
export interface Created {
    seconds: number;
}

export interface Invite {
    name:    string;
    role_id: string;
    email:   string;
    created: Created;
}

export interface Member {
    name:               string;
    user_name:          string;
    user_email:         string;
    user_full_name:     string;
    user_friendly_name: string;
}