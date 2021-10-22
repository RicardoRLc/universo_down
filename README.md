# universo_down

Projeto Universo Down - Web Service

## Rename Branch

1. git branch -m main master
2. git fetch origin
3. git branch -u origin/master master
4. git remote set-head origin -a

## Padronização de publicações e alterações de código

Semantic Commit Messages
See how a minor change to your commit message style can make you a better programmer.

Format: <type>(<scope>): <subject>

<scope> is optional

Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

* feat: (new feature for the user, not a new feature for build script)
* fix: (bug fix for the user, not a fix to a build script)
* docs: (changes to the documentation)
* style: (formatting, missing semi colons, etc; no production code change)
* refactor: (refactoring production code, eg. renaming a variable)
* test: (adding missing tests, refactoring tests; no production code change)
* chore: (updating grunt tasks etc; no production code change)

### References:

* https://www.conventionalcommits.org/ 
* https://seesparkbox.com/foundry/semantic_commit_messages
* http://karma-runner.github.io/1.0/dev/git-commit-msg.html