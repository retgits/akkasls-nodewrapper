import { expect } from 'chai';
import { describe } from 'mocha';
import { shell } from '../src/shell/shell';
import { Command } from '../src/shell/command';

describe('Shell test', () => {
    it('Should return that echo exists in PATH', () => {
        expect(shell.existsInPath('echo')).to.be.true;
    });

    it('Should return that foobar not exists in PATH', () => {
        expect(shell.existsInPath('foobar')).to.be.false;
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
        const cmd = new Command('ls -alh', __dirname);
        cmd.setSilent(true);
        const result = await shell.exec(cmd);
        expect(result.code).to.eql(0);
        expect(result.stdout).to.contain('shell.test.ts');
    });
});