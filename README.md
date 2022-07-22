# cql-demo

This demo repo shows how to setup CodeQL for a local repository and run queries againt that.
## Setup

```bash
cd ~/
mkdir cql_home
cd cql_home
git clone git@github.com:github/codeql.git codeql-repo

# Download cql-cli
# https://github.com/github/codeql-cli-binaries/releases
curl https://github.com/github/codeql-cli-binaries/releases/download/v2.4.6/codeql-{ osx64, linux64, win64 }.zip
unzip codeql-{ osx64, linux64, win64 }.zip
mv codeql ~/cql_home

# add to PATH
export PATH="$HOME/cql_home/codeql:$PATH"

# validate via
which codeql # -> $HOME/cql_home/codeql/codeql
codeql resolve languages
```

* Prepare VS-Code
  * Install: https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-codeql
  * set codeql path in VS-Code: `CodeQL CLI:Executable Path`
    * `$HOME/cql_home/codeql/codeql` ($HOME needs to be resolved to absolute here)

## Generate CodeQL DB

* within our repo (`cql-demo`)
  * `codeql database create .cql --language=javascript`
* In VS-Codes CodeQL view: `select db from folder`
  * select your `.cql` folder we created

## Queries
* Run: `ql-queries/fn_call.ql`
* Create new `.ql / .qll` files via reading the doc or looking at the examples:
  * https://codeql.github.com/docs/ql-language-reference/
  * https://github.com/github/codeql/tree/main/javascript/ql/examples/snippets (JS)
  * https://github.com/github/codeql/tree/main/javascript/ql/src/LanguageFeatures

* NOTE: When `@kind` is not specified in the ql file header, VS-Code QL Extention throws an Error which is not really on error.
  * Further reading: https://github.com/github/codeql/issues/2486

## CLI

```bash
# single query & decode
codeql query run --database ./.cql --output ./ql-results.bqrs ./ql-queries/fn_call.ql
codeql bqrs decode --format csv --output ./ql-results.csv ./ql-results.bqrs

# multiple queries (create a .bqrs file for each query)
codeql database run-queries ./.cql ./ql-queries
# decode as needed like above
```
