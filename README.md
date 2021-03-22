# cql-demo

## Setup

* `cd ~/`
* `mkdir cql_home`
* `cd cql_home`
* `git clone git@github.com:github/codeql.git codeql-repo`
* Download cql-cli: https://github.com/github/codeql-cli-binaries/releases
* Unzip
* `mv codeql ~/cql_home`
* add `export PATH="$HOME/cql_home/codeql:$PATH"`to you path
* validate via
  * which codeql, should return `$HOME/cql_home/codeql/codeql`
  * `codeql resolve languages`
* Prepare VS-Code
  * Install: https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-codeql
  * set codeql path in VS-Code: `CodeQL CLI:Executable Path`
    * `$HOME/cql_home/codeql/codeql` ($HOME needs to be resolved to absolute here)

## Generate CodeQL DB

* within our repo (`cql-demo`)
  * `codeql database create .cql --language=javascript`
* In VS-Codes CodeQL view: `select db from folder`
  * select your `.cql` folder we created
* Run: `ql-queries/fn_call.ql`

* NOTE: When `@kind` is not specified in the ql file header, VS-Code QL Extention throws an Error which is not really on error.
  * Further reading: https://github.com/github/codeql/issues/2486