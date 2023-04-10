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

        // Set points possible if defined
        if (pointsPossible !== undefined) {
            const input = document.getElementById('assignment_points_possible');

            input.value = pointsPossible;
        };

        // Select grading type if defined
        if (gradingType !== undefined) {
            const select = document.getElementById('assignment_grading_type');

            select.value = gradingType;

            // Set grading standard ID if defined
            if (gradingStandardId !== undefined) {
                const input = document.getElementsByName('grading_standard_id')[0];

                input.value = gradingStandardId;
            };
        };

        // Select submission type if defined
        if (submissionType !== undefined) {
            const select = document.getElementById('assignment_submission_type');
            const onlineSubmissionTypes = document.getElementById('assignment_online_submission_types');
            const externalToolSettings = document.getElementById('assignment_external_tool_settings');

            select.value = submissionType;
            onlineSubmissionTypes.style.display = (submissionType === 'online') ? 'block' : 'none';
            externalToolSettings.style.display = (submissionType === 'external_tool') ? 'block' : 'none';
        };

        // Set whether to omit the grade from the final grade
        if (omitFromFinalGrade !== undefined) {
            const checkbox = document.getElementById('assignment_omit_from_final_grade');

            checkbox.checked = omitFromFinalGrade;
        };

    });

    return {
        ...require('../package.json'),
        title: t('package.title'),
        description: t('package.description')
    };
}
