export const config = {
    auth: {
        currentLogin: 'akkasls auth current-login -o json',
        listAuthTokens: 'akkasls auth tokens list -o json',
        login: 'akkasls auth login --no-launch-browser',
        logout: 'akkasls auth logout',
        revokeAuthToken: 'akkasls auth tokens revoke',
        createAuthToken: 'akkasls auth tokens create'
    },
    docker: {
        addDockerCredentials: 'akkasls docker add-credentials',
        deleteDockerCredentials: 'akkasls docker delete-credentials',
        listDockerCredentials: 'akkasls docker list-credentials -o json'
    },
    entities: {
        generateNpmJs: 'akkasls entities generate npm js',
        generateNpxJs: 'npx @lightbend/create-akkasls-entity',
        generateMavenJava: 'akkasls entities generate maven java'
    },
    projects: {
        newProject: 'akkasls projects new',
        listProjects: 'akkasls projects list -o json'
    },
    roles: {
        deleteInvite: 'akkasls roles invitations delete',
        addInvite: 'akkasls roles invitations invite-user',
        listInvites: 'akkasls roles invitations list -o json',
        listMembers: 'akkasls roles list-bindings -o json'
    }
};