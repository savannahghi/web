## Project setup

### Project prerequisites

1. The **Savannah Global Health Institute** web-app runs on React and Next.js version v10.0.8, and react version v17.0.1, To check the Next.js version installed in your machine run `npx next --version`, or run `npm view react version` to check the react version installed on your machine.

2. You’ll need Node.js version 10.13 or later.

3. To check the details of the other dependencies in this project, check the `package.json` file in the root of the project.

Looks like we are done with the prerequisites :-)

### How to setup and run SGHI-Web

1. Use `git clone git@gitlab.slade360emr.com:optimalhealth/sil-web/sghi-web.git` to clone this project.

2. Navigate into the root project directory.

3. Run `npm install` to install all packages in the `package.json` file

4. Finally run `npm run dev` on your terminal to start the development server.

5. Open your favourite browser at http://localhost:3000 to view your project

## How to setup and run unit, widget and integration tests locally

1. Ensure all test dependencies are installed from the above process

## Project structure

```javascript
.next/
components/
    |- head.js
    |- navbar.js
docs/
node_modules/
pages/
    |- api/
        |- hello.js
    |- _app.js
    |- index.js
public/
    |- favicons
    |- site.webmanifest
styles/
    |- modules/
        |- navbar.module.css/
    |- global.css
    |- Home.module.css
tests/
    |- index.test.js
.babelrc
.eslintrc.js
eslintrc.json
.gitignore
.gitlab-ci.yml
.prettierignore
.prettierrc
package-lock.json
package.json
README.md
setupTests.js
```

## Pull request commit messages convention

Our convention for a good commit message consists of a **header**, a **body** and a **footer**.

### Message header

The message header is a single line that contains short and clear description of the change.

The following are **message header** examples that describe the kind of change that a commit is providing.

-   **feat** (feature)
-   **fix** (bug fix)
-   **docs** (documentation)
-   **style** (formatting, missing semi colons, …)
-   **refactor**
-   **test** (when adding missing tests)
-   **chore** (maintain)

#### Header subject

This is a very short description of the change.

-   use imperative, present tense: “change” not “changed” nor “changes”
-   don't capitalize first letter
-   no dot (.) at the end

#### Example of a good commit header

```javascript
docs: healthcloud commit message convention
```

### Message body

Separated with the **Message Header** by a line break, the message body contains paragraphs of changes. Follow below conventions.

-   use imperative, present tense: “change” not “changed” nor “changes”
-   includes motivation for the change and contrasts with previous behavior
-   don't capitalize first letter
-   no dot (.) at the end

### Message footer

The footer should contain any information about Breaking Changes which should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then the description of the change, justification and migration notes. It is also the place to reference GitLab issues that this commit Closes.

#### Example of a good commit footer

```javascript
BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option for the directive controller injection was removed.

Closes #392
```

#### Example of a good commit message

```javascript
docs: add healthcloud convention to readme

Couple of typos fixed:
- indentation
- syntax highlighting
- start periodic checking
- missing brace

Closes #03
```

### NOTE

1. The **commit message header** can be used in solitary with a clear subject on issues with elementary changes.
2. To close an issue automatically include the footer with a reference to the GitLab issue as demonstrated above.

## Packages import

Packages imported in every javascript file follow this order;

```javascript
1 . Next.js imports
2 . Third-party package imports
2 . Lib imports ('lib/*')
3 . Pages imports ('pages/*')
4 . Component imports ('components/*')
5 . Constants imports ('components/constants/*')
6 . Global Style imports ('styles/*')
7 . Styled Modules imports ('styles/modules/*')
8 . Relative files ('../../')
```

All the imports MUST follow the paths defined at the `./jsconfig.json` file to enhance readability and eliminate long chains of relative imports and their associated changes. Here are a few examples

```javascript
// Next.js imports imports
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Third party package imports
import GhostContentAPI from '@tryghost/content-api';

// lib imports
import { getPosts } from 'lib/posts';

// pages imports
import Team from 'pages/team';
```
