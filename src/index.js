import { router, dom } from '@artevelde-uas/canvas-lms-app';

import t from './i18n';

import './index.css';


export default function ({
    pointsPossible,
    gradingType,
    gradingStandardId,
    omitFromFinalGrade,
    submissionType,
    onlineEntryOptions
}) {
    router.onRoute('courses.assignments.new', async () => {
        await dom.onElementReady('#edit_assignment_wrapper');

        // Set points possible if defined
        if (typeof pointsPossible === 'number') {
            const input = document.getElementById('assignment_points_possible');

            input.value = pointsPossible;
        };

        // Select grading type if defined
        if (typeof gradingType === 'string') {
            const select = document.getElementById('assignment_grading_type');
            const gradedAssignmentFields = document.getElementById('graded_assignment_fields');
            const viewGradingLevels = document.getElementById('view-grading-levels');

            select.value = gradingType;

            switch (gradingType) {
                case 'letter_grade':
                case 'gpa_scale':
                    gradedAssignmentFields.style.display = 'block';
                    viewGradingLevels.style.display = 'block';

                    // Set grading standard ID if defined
                    if (typeof gradingStandardId === 'number') {
                        // Find the letter grades form
                        dom.onElementReady('#edit_letter_grades_form').then(async letterGradesForm => {
                            const findGradingStandardLink = letterGradesForm.querySelector('a.find_grading_standard_link');

                            findGradingStandardLink.click();

                            // Find and select the requested grading standard
                            const gradingStandardsBrief = await dom.onElementReady(`#grading_standard_brief_${gradingStandardId}`);
                            const selectGradingStandardLink = gradingStandardsBrief.querySelector('button.select_grading_standard_link');

                            selectGradingStandardLink.click();
                        });
                    }

                    break;

                default:
                    gradedAssignmentFields.style.display = 'block';
                    viewGradingLevels.style.display = 'none';

                    break;

                case 'not_graded':
                    gradedAssignmentFields.style.display = 'none';
                    viewGradingLevels.style.display = 'none';

                    // Stop here if assignment is not graded
                    return;
            }
        };

        // Select submission type if defined
        if (typeof submissionType === 'string') {
            const select = document.getElementById('assignment_submission_type');
            const onlineSubmissionTypes = document.getElementById('assignment_online_submission_types');
            const externalToolSettings = document.getElementById('assignment_external_tool_settings');
            const allowedAttemptsFields = document.getElementById('allowed_attempts_fields');
            const groupCategorySelector = document.getElementById('group_category_selector');
            const peerReviewsFields = document.getElementById('assignment_peer_reviews_fields');

            select.value = submissionType;

            switch (submissionType) {
                case 'none':
                case 'on_paper':
                    onlineSubmissionTypes.style.display = 'none';
                    externalToolSettings.style.display = 'none';
                    allowedAttemptsFields.style.display = 'none';
                    groupCategorySelector.style.display = 'block';
                    peerReviewsFields.style.display = 'block';

                    break;

                case 'online':
                    onlineSubmissionTypes.style.display = 'block';
                    externalToolSettings.style.display = 'none';
                    allowedAttemptsFields.style.display = 'block';
                    groupCategorySelector.style.display = 'block';
                    peerReviewsFields.style.display = 'block';

                    // Set online entry options if defined
                    if (Array.isArray(onlineEntryOptions)) {
                        onlineEntryOptions.forEach(option => {
                            const checkbox = onlineSubmissionTypes.querySelector(`[type="checkbox"][name="online_submission_types[${option}]"]`);

                            // Don't click on checkbox if it is already checked
                            if (checkbox === null || checkbox.checked) return;

                            checkbox.click();
                        });
                    };

                    break;

                case 'external_tool':
                    onlineSubmissionTypes.style.display = 'none';
                    externalToolSettings.style.display = 'block';
                    allowedAttemptsFields.style.display = 'block';
                    groupCategorySelector.style.display = 'none';
                    peerReviewsFields.style.display = 'none';

                    break;
            }
        };

        // Set whether to omit the grade from the final grade
        if (typeof omitFromFinalGrade === 'boolean') {
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
