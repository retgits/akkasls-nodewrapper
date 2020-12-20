# Akka Serverless CLI - Node Wrapper

> A NodeJS wrapper for the [Akka Serverless](https://docs.cloudstate.com) CLI

![image](image.png)

*[Illustration by Freepik Stories](https://stories.freepik.com/technology)*

## Getting started

### Prerequisites

The Akka Serverless CLI - Node Wrapper requires the `akkasls` command line tool.

### Install

```bash
npm install --save @retgits/akkasls-nodewrapper
```

### Usage examples

```ts
// List all projects
import { listProjects } from '@retgits/akkasls-nodewrapper';

(async () => {
    const res = await listProjects({dryrun: false, silent: true});
    console.log(res.stdout);
})();
```

### Returns

Each command returns a promise of a `ShellResult` object that contains:

* `code`: The result code from the command (usually 0 when a command completes successfully);
* `stdout`: The result from the command that was printed to the standard output;
* `stderr`: The result from the command that was printed to the standard error;
* `response`: An optional element that contains the parsed result object (`CurrentLogin | Token[] | Credential[] | Project[] | Invite[] | Member[] | Service[]`)

### CommandInput

Each command accepts a `CommandInput` object as parameter together with the inputs needed to perform the command. The `CommandInput` object gives you the ability to specify additional configuration:

* `dryrun`: boolean, returns the command to be executed as `stdout` if set to true (default is `false`)
* `silent`: boolean, prints no command output to stdout or stderr if set to false (default is `false`)
* `context`: string, configuration context to use (default is no value)
* `configFile`: string, location of config file

### Available commands

* `currentLogin`: Get details for the current logged in user
* `listAuthTokens`: List all server managed Akka Serverless tokens
* `login`: Login to Akka Serverless
* `logout`: Logout the current user
* `revokeAuthToken`: Revoke an Akka Serverless token
* `addDockerCredentials`: Add docker credentials to a project
* `deleteDockerCredentials`: Delete docker credentials for given ID
* `listDockerCredentials`: List all docker credentials
* `listProjects`: List all projects
* `newProject`: Create a new project
* `deleteInvite`: Delete an invitation from a project
* `addInvite`: Invite a user to a project
* `listInvites`: List invitations to a project
* `listMembers`: List all project members
* `deployService`: Deploy a service
* `exposeService`: Expose a service
* `getService`: Describe a specific service.
* `listService`: List all services.
* `undeployService`: Undeploy a service
* `unexposeService`: Unexpose a service

## Release notes

See the [changelog](./CHANGELOG.md)

## License

See the [LICENSE](./LICENSE)