README.txt
1 - Experiment 1
written by MLN, 10 Aug 2018

--------------

In this experiment, 128 were asked to act as a recruiter hiring a senior level marketing manager for a firm in the midwest. Subjects viewed 24 resumes (8 each high/med/low quality). Each resume was paired with either a competent or incompetent face as prerated in 0_photoRating experiment. Following each resume, subjects rated how likely they were to hire the job candidate (1-9, 1=extremely unlikely, 9=extremely likely) and what salary they would offer ($50k-$120k). Subjects were told the average salary for this position in this city was $85k and most people earn between $60k-$110k. 

Experiment: https://fir-9fbc6.firebaseapp.com/

------------

Stimuli
Stimuli were created by Ashley Chang. 

Resumes - The 24 resumes were created based on examples of marketing resumes online. All resumes included basic information (name, title, company), education, experience, skills and awards. These sections were based on sections in LinkedIn. High quality resumes had better education (typically BA/MBA from good schools with high GPA), 2-3 highly relevant positions with the second position managerial, strong skills, and 1-2 awards. Average quality resumes had BAs in relevant field from good schools, 2-3 work positions with some relevant experience, good skills, and 0-1 awards. Low quality resumes had mediocre resumes from unknown schools, mostly irrelevant experience, weak skills, and no awards. 

Photos - 12 competent, 12 incompetent photos are pre-rated by 0-photoRating. Each resume was always presented with the same photos.

----------
Analysis
Sample size was determined using G*Power for detecting a between-groups effect in repeated measures ANOVA. Estimated moderate effect size.

Results analyzed in R using repeated measures ANOVA. Subjects with non-significant correlations of hire rating/salary were removed from sample, leaving 110 subjects. Results same with or without these subjects.

Additionally analyzed using linear mixed effects models. Same results

-------------
CONTENTS
1. code/analyze_resumeData.ipynb - reading in data, converting to long form, and basic plotting
2. code/convert_longform.ipynb - example code for converting to longform
3. code/resume_analysis.R - code for repeated measures anova, mixed effects models, plotting
4. data/groupXX.json - raw data from firebase
5. data/resume_data.csv - longform data
6. exp1_counterbalance.xlsx - counterbalancing scheme for running analyses
7. exp1_results.key - summary of stimuli, analysis, and results
8. power_analysis.key - results of power analysis with G*Power

