import { expect } from 'chai';
import { describe } from 'mocha';
import { currentLogin, listAuthTokens, login, logout } from '../src/commands/auth';
import { addDockerCredentials, deleteDockerCredentials, listDockerCredentials } from '../src/commands/docker';
import { listProjects, newProject } from '../src/commands/project';
import { addInvite, deleteInvite, listInvites, listMembers } from '../src/commands/roles';
import { deployService, exposeService, listServices, undeployService, unexposeService } from '../src/commands/service';

describe('Commands test', () => {
    describe('Generic', () => {
        it('Should return currentLogin command with configFile', async () => {
            const res = await currentLogin({dryrun: true, configFile: 'helloworld.txt'});
            expect(res.stdout).to.be.eql('akkasls auth current-login -ojson --config helloworld.txt');
        });

        it('Should return currentLogin command with context', async () => {
            const res = await currentLogin({dryrun: true, context: 'dev'});
            expect(res.stdout).to.be.eql('akkasls auth current-login -ojson --context dev');
        });
    });

    describe('Auth', () => {
        it('Should return currentLogin command', async () => {
            const res = await currentLogin({dryrun: true});
            expect(res.stdout).to.be.eql('akkasls auth current-login -ojson');
        });

        it('Should return listAuthTokens command', async () => {
            const res = await listAuthTokens({dryrun: true});
            expect(res.stdout).to.be.eql('akkasls auth tokens list -o json');
        });

        it('Should return login command', async () => {
            const res = await login({dryrun: true});
            expect(res.stdout).to.be.eql('akkasls auth login --no-launch-browser');
        });

        it('Should return logout command', async () => {
            const res = await logout({dryrun: true});
            expect(res.stdout).to.be.eql('akkasls auth logout');
        });
    });

    describe('Docker', () => {
        it('Should return addDockerCredentials command', async () => {
            const res = await addDockerCredentials('myProject', 'myCreds',{dryrun: true});
            expect(res.stdout).to.be.eql('akkasls docker add-credentials myCreds --project myProject');
        });

        it('Should return deleteDockerCredentials command', async () => {
            const res = await deleteDockerCredentials('myProject', 'myCreds',{dryrun: true});
            expect(res.stdout).to.be.eql('akkasls docker delete-credentials myCreds --project myProject');
        });

        it('Should return listDockerCredentials command', async () => {
            const res = await listDockerCredentials('myProject', {dryrun: true});
            expect(res.stdout).to.be.eql('akkasls docker list-credentials -o json --project myProject');
        });
    });

    describe('Project', () => {
        it('Should return listProjects command', async () => {
            const res = await listProjects({dryrun: true});
            expect(res.stdout).to.be.eql('akkasls projects list -o json');
        });

        it('Should return newProject command', async () => {
            const res = await newProject('myNewProject', 'is awesome',{dryrun: true});
            expect(res.stdout).to.be.eql('akkasls projects new myNewProject "is awesome"');
        });
    });

    describe('Roles', () => {
        it('Should return deleteInvite command', async () => {
            const res = await deleteInvite('myProject', 'my@example.com', {dryrun: true});
            expect(res.stdout).to.be.eql('akkasls roles invitations delete my@example.com --project myProject');
        });

        it('Should return addInvite command', async () => {
            const res = await addInvite('myProject', 'my@example.com', {dryrun: true});
            expect(res.stdout).to.be.eql('akkasls roles invitations invite-user --role admin my@example.com --project myProject');
        });

        it('Should return listInvites command', async () => {
            const res = await listInvites('myProject', {dryrun: true});
            expect(res.stdout).to.be.eql('akkasls roles invitations list -o json --project myProject');
        });

        it('Should return listMembers command', async () => {
            const res = await listMembers('myProject', {dryrun: true});
            expect(res.stdout).to.be.eql('akkasls roles list-bindings -o json --project myProject');
        });
    });

    describe('Service', () => {
        it('Should return deployService command', async () => {
            const res = await deployService('myService', 'docker.io/retgits/helloworld:1.0.0', 'myProject', {dryrun: true});
            expect(res.stdout).to.be.eql('akkasls services deploy myService docker.io/retgits/helloworld:1.0.0 --project myProject');
        });

        it('Should return exposeService command', async () => {
            const res = await exposeService('myService', '--cors-enabled', 'myProject', {dryrun: true});
            expect(res.stdout).to.be.eql('akkasls services expose myService --project myProject --cors-enabled');
        });

        it('Should return listServices command', async () => {
            const res = await listServices('myProject', {dryrun: true});
            expect(res.stdout).to.be.eql('akkasls services list -o json --project myProject');
        });

        it('Should return undeployService command', async () => {
            const res = await undeployService('myService', 'myProject', {dryrun: true});
            expect(res.stdout).to.be.eql('akkasls services undeploy myService --project myProject');
        });

        it('Should return unexposeService command', async () => {
            const res = await unexposeService('myService', 'hostname','myProject', {dryrun: true});
            expect(res.stdout).to.be.eql('akkasls services unexpose myService hostname --project myProject');
        });
    });
});