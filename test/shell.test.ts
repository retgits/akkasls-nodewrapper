import { expect } from 'chai';
import { describe } from 'mocha';
import { join } from 'path';
import { shell } from '../src/shell/shell';
import { Command } from '../src/shell/command';

describe('Shell test', () => {
    it('Should return that echo exists in PATH', () => {
        expect(shell.existsInPath('echo')).to.be.true;
    });

    it('Should work for echo', async () => {
        const cmd = new Command('echo helloworld');
        cmd.setSilent(true);
        const result = await shell.exec(cmd);
        expect(result.code).to.eql(0);
        expect(result.stdout).to.eql('helloworld\n');
    });

    it('Should not work for foobar', async () => {
        const cmd = new Command('foobar');
        cmd.setSilent(true);
        const result = await shell.exec(cmd);
        expect(result.code).to.eql(127);
        expect(result.stderr).to.contain('foobar: not found');
    });

    it('Should work for ls with a working dir', async () => {
        const cmd = new Command('ls -alh', join(__dirname, 'shellresponses'));
        cmd.setSilent(true);
        const result = await shell.exec(cmd);
        expect(result.code).to.eql(0);
        expect(result.stdout).to.contain('auth.login.txt');
    });
});