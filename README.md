# Canvas LMS Assignment Default Settings Plug-in

Plugin for the [Canvas LMS theme app](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-app) that
lets you change the default options when creating a new assignment.

[![](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-assignment-default-settings-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-assignment-default-settings-plugin)
[![](https://img.shields.io/github/license/artevelde-uas/canvas-lms-assignment-default-settings-plugin.svg)](https://spdx.org/licenses/ISC)
[![](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-assignment-default-settings-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-assignment-default-settings-plugin)

## Features

The following configurable options are available:

- Set the points possible.
- Select the grading type.
- Set the grading standard.
- Whether to omit the grade from the final grade.
- Select the sumission type.
- Set the online entry options

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-assignment-default-settings-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-assignment-default-settings-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';
import assignmentDefaultSettingsPlugin from '@artevelde-uas/canvas-lms-assignment-default-settings-plugin';

addPlugin(assignmentDefaultSettingsPlugin, {
    pointsPossible: 20,
    gradingType: 'letter_grade',
    gradingStandardId: 123,
    omitFromFinalGrade: true,
    submissionType: 'online',
    onlineEntryOptions: ['online_upload']
});

run();
```

### Options

|        Name            |    Type      | Description                                          |
| :--------------------: | :----------: | :--------------------------------------------------- |
| **pointsPossible**     | `{Number}`   | Sets the points possible.                            |
| **gradingType**        | `{Enum}`     | Selects the grading type.                            |
| **gradingStandardId**  | `{Number}`   | Set the grading standard.                            |
| **omitFromFinalGrade** | `{Boolean}`  | Sets whether to omit the grade from the final grade. |
| **submissionType**     | `{Enum}`     | Selects the sumission type.                          |
| **onlineEntryOptions** | `{String[]}` | Sets the online entry options.                       |
