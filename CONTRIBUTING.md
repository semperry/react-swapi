# Contributing to react-swapi

Thank you for considering contributing to `react-swapi`! Here's how you can help.

## Setting Up Your Environment

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Run `npm install` to install all the dependencies.
4. The package is served out of the bundled '/dist' directory. Run `npm run build` to create a minified build.
5. Run `npm pack` in your project directory to create a .tgz version of the library.
6. Create a new React project to use as a testing platform for your feature.
7. Use `npm link <path-to-tgz>` in a the new React project.
8. Branch out and make your changes!

## Contribution Guidelines

- **Issues**: Before submitting a new issue, please check if a similar issue already exists. Duplicate issues will be closed. For bugs, please provide as much context as you can, including what you expected to happen and what actually happened.
- **Pull Requests**: Ensure that your PR is not addressing more than one concern or feature. Keep the PR focused. Make sure you describe what the PR does, and explain any issues it fixes or features it introduces.
- **Code Style**: Follow the existing coding style. Make sure your changes do not introduce any linting errors.
- **Testing**: Ensure that you update or introduce tests corresponding to any code changes.

## Commit Messages

Please write clear and descriptive commit messages. It helps with reviewing and understanding the history.

## Squashing Commits

Before submitting your PR, please squash your commits into a single commit. This keeps the project's history cleaner and easier to navigate. If you're not familiar with squashing commits, here's how you can do it:

1. Navigate to your branch: `git checkout your-branch-name`
2. Rebase your commits onto the base branch (e.g., `main`): `git rebase -i main`
3. Your text editor will open with a list of your commits. Change `pick` to `squash` (or just `s`) for all commits you want to squash.
4. Save and exit the editor.
5. If you've already pushed commits to GitHub, you'll need to force push these changes: `git push origin your-branch-name --force`

## Adding Yourself as a Contributor

After you've added your updates, please add yourself to the `CONTRIBUTORS.md` file. This is a way for us to acknowledge and appreciate your hard work! If your PR is merged, you'll see your name on this page.

- Add your name in alphabetical order.
- Mention the main contributions you've made. E.g., "Added X feature", "Fixed bug in Y", etc.
- (Optional) Add any contact or social media links you'd like to share.

## Getting Feedback

After submitting a PR, core contributors will review your code. Please be patient. Make sure to address any feedback or changes requested, and once everything is fine, your PR will be merged!

Thank you for helping improve `react-swapi`!
