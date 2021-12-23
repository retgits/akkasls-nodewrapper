import { expect } from 'chai';
import { describe } from 'mocha';
import { addInviteCommand, deleteInviteCommand, handleRolesCommand, listInvitesCommand, listMembersCommand } from '../src/roles';

describe('Roles test', () => {
    it('Should dryrun the add invite command', async () => {
        const cmd = addInviteCommand;
        cmd.options.emailAddress.value = 'demo@example.com';
        cmd.options.role.value = 'admin';
        cmd.options.project.value = 'test';
        const result = await handleRolesCommand(cmd, { dryrun: true });
        expect(result).to.not.be.null;
        expect(result.stdout).to.eql('akkasls roles invitations invite-user -o json demo@example.com --role admin --project test');
    });

    it('Should dryrun the delete invite command', async () => {
        const cmd = deleteInviteCommand;
        cmd.options.emailAddress.value = 'demo@example.com';
        cmd.options.project.value = 'test';
        const result = await handleRolesCommand(cmd, { dryrun: true });
        expect(result).to.not.be.null;
        expect(result.stdout).to.eql('akkasls roles invitations delete -o json demo@example.com --project test');
    });

    it('Should dryrun the list invites command', async () => {
        const cmd = listInvitesCommand;
        cmd.options.project.value = 'test';
        const result = await handleRolesCommand(cmd, { dryrun: true });
        expect(result).to.not.be.null;
        expect(result.stdout).to.eql('akkasls roles invitations list -o json --project test');
    });

    it('Should dryrun the list members command', async () => {
        const cmd = listMembersCommand;
        cmd.options.project.value = 'test';
        const result = await handleRolesCommand(cmd, { dryrun: true });
        expect(result).to.not.be.null;
        expect(result.stdout).to.eql('akkasls roles list-bindings -o json --project test');
    });
});