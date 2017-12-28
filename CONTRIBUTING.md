
_TL;DR Every commit gets a PR, PR and commit reference issue. Issue get closed with commit hash_

## Use GitFlow
* When working on an issue, create a new branch from master named for issue number.
  * Name the branch `feature/<issue-number>`. For example `feature/22` for fixing issue #22
* When that branch is ready, submit a pull request to merge that branch to master
  * Name the PR for what it does. For example `Makes checkboxes smaller`
* In the PR description tag the issue.
  * For example, in the description for a PR to resolve issue #22 type `fixes #22`
* When merging PR, put issue number in commit.
  * For example, in the commit message merging a fix for #22 include `fixes #22`

## Commit Messages
* Include a short explanation of what's changed
* Include an issue number.

Example `Fixed callback function for init hook #27`

## Closing Issues
* When closing issue reference the hash of the commit that closed the PR.

For example, if issue #22 is closed by a PR with commit hash of `ac7e115` when closing #22 leave the comment `Close via ac7e115`
