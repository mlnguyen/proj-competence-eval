README.txt
0 - photo ratings
written by MLN, 10 Aug 2018

--------------

In this experiment, 38 subjects rated 53 photographs of white men in business attire. A subset of 20 randomly selected photos were repeated for each subject allowing for measuring test-retest reliability for each subject. The photographs were obtained from the Chicago Face Database and online pictures licensed under Creative Commons for reuse. Subjects rated each face for competence on a 9-point scale (1=extremely incompetent, 9=extremely competent). Data was collected on MTurk. The experiment was run using React.js and hosted on Firebase.

Data was analyzed by Ashley Chen using python. Subjects with test-retest correlation <0 were eliminated from the analysis (9/39 were removed). Mean and std of competent rating from the remaining 29 subjects were used. 

The 12 most competent and incompetent photos were used in subsequent experiments. 

Experiment website: https://photograph-ratings-c.firebaseapp.com/

-------------
CONTENTS
1. code/01_analyzeRatings.ipynb - python notebook for analyzing and plotting results
2. data/ratings.csv - avg/std competent ratings for all photos
3. data/raw_data.json - raw output from firebase
4. photographs/_photo_info.xlsx - source of photographs
5. photographs/XX.jpg - stimuli used in ratings
6. photos.key - summary of results and final photos used

