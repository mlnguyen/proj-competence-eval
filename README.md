## Facial impressions and competence evaluations
This repo contains code associated with a project to investigate the role of facial impressions in evaluation of resumes and 
competence. Substantial research suggests that first impressions based on faces can have significant influence in electability,
judicial sentencing, and other areas of importance. As online recruitment tools such as LinkedIn and personal websites that include
personal photographs play a greater role in hiring decisions, understanding the role of face information in judgements of competence 
and hireability is an important empirical question. 

Two online studies were conducted using react.js and firebase. Data were analyzed in Python and R.

### 0_photoRating
This initial study collected publically available professional images of white men. Subjects were recruited to participate in an online
study where they rated these photographs for competence. A subset of images for presented twice in order to measure participants internal
reliability. These judgements were then used to select photographs of individuals judged "more competent" and "less competent."

### 01_exp
This main study paired either competent or incompetent photographs with resumes that varied of low, medium, and high quality. For each 
resume, online participants were asked to rate each individuals competence, likeliness to hire, and salary they would offer. Competent 
versus incompetent photographs for each resume were counterbalanced across participants. Data was analyzed in python and R with both
repeated measures ANOVAs and mixed-effects linear models. 
