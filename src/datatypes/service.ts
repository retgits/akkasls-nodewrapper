/* eslint-disable @typescript-eslint/naming-convention */
export interface Condition {
    type?: string;
    status?: string;
    lastTransitionTime?: Date;
    reason?: string;
    message?: string;
}

export interface Container {
    name?: string;
    image?: string;
}

export interface Metadata {
    name: string;
    namespace?: string;
    selfLink?: string;
    uid: string;
    resourceVersion?: string;
    generation?: number;
    creationTimestamp?: Date;
}

export interface Service {
    kind?: string;
    apiVersion?: string;
    metadata: Metadata;
    spec?: Spec;
    status?: Status;
}

export interface Spec {
    containers?: Container[];
    replicas?: number;
    storeConfig?: StoreConfig;
}

export interface StatefulStore {
    name?: string;
}

export interface Status {
    summary?: string;
    replicas?: number;
    selector?: string;
    conditions?: Condition[];
}

export interface StoreConfig {
    statefulStore?: StatefulStore;
}