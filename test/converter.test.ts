import { expect } from 'chai';
import { describe } from 'mocha';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Convert } from '../src/datatypes/converter';

describe('Converter test', () => {
    it('Should return currentLogin', () => {
        const txtTemplate = readFileSync(join(__dirname, 'convertertests','currentLogin.txt')).toString();
        const res = Convert.toCurrentLogin(txtTemplate);
        expect(res).to.be.not.null;
        expect(res.user.email_verified).to.be.true;
    });

    it('Should return credentials', () => {
        const txtTemplate = readFileSync(join(__dirname, 'convertertests','credentials.txt')).toString();
        const res = Convert.toCredentials(txtTemplate);
        expect(res).to.be.not.null;
        expect(res.length).to.eql(1);
        expect(res[0].username).to.eql('helloworld');
    });

    it('Should return invites', () => {
        const txtTemplate = readFileSync(join(__dirname, 'convertertests','invites.txt')).toString();
        const res = Convert.toInvites(txtTemplate);
        expect(res).to.be.not.null;
        expect(res.length).to.eql(1);
        expect(res[0].email).to.eql('email@example.com');
    });

    it('Should return members', () => {
        const txtTemplate = readFileSync(join(__dirname, 'convertertests','members.txt')).toString();
        const res = Convert.toMembers(txtTemplate);
        expect(res).to.be.not.null;
        expect(res.length).to.eql(1);
        expect(res[0].user_email).to.eql('email@example.com');
    });

    it('Should return projects', () => {
        const txtTemplate = readFileSync(join(__dirname, 'convertertests','projects.txt')).toString();
        const res = Convert.toProjects(txtTemplate);
        expect(res).to.be.not.null;
        expect(res.length).to.eql(1);
        expect(res[0].friendly_name).to.eql('acme-sunglasses');
    });

    it('Should return services', () => {
        const txtTemplate = readFileSync(join(__dirname, 'convertertests','services.txt')).toString();
        const res = Convert.toServices(txtTemplate);
        expect(res).to.be.not.null;
        expect(res.length).to.eql(1);
        expect(res[0].metadata.name).to.eql('servicename');
    });

    it('Should return tokens', () => {
        const txtTemplate = readFileSync(join(__dirname, 'convertertests','tokens.txt')).toString();
        const res = Convert.toTokens(txtTemplate);
        expect(res).to.be.not.null;
        expect(res.length).to.eql(2);
        expect(res[0].name).to.eql('users/userid/tokens/refresh/tokenid');
    });
});