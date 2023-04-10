import { router, dom } from '@artevelde-uas/canvas-lms-app';

import t from './i18n';


export default function ({
    pointsPossible,
    gradingType,
    gradingStandardId,
    submissionType,
    omitFromFinalGrade
}) {
    router.onRoute('courses.assignments.new', () => {

    });

    return {
        ...require('../package.json'),
        title: t('package.title'),
        description: t('package.description')
    };
}
