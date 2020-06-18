
library(lsr)
library(lme4)
library(lmerTest) #provides p values
library(lsmeans) #multiple comparisons
library(lattice) #looks at random effects
library(ggplot2)

# read in data
#datafile = '/Users/Mai/Projects/linkedin/resume_ratings/data/resume_data.csv';
datafile = '/Users/Mai/Projects/linkedin/1_exp1/data/resume_data.csv'
data <- read.csv(file=datafile, header=TRUE, sep=",");

# look at start of data
head(data)

# Get correlations of hire/salary ratings
subids = unique(data$subN) 
r = numeric(length(subids))
p = numeric(length(subids))
sig = numeric(length(subids))
for (i in seq_along(subids)){
  subid = paste('sub', i-1, sep='')
  subdata = data[data$subN==subid,]
  stats = cor.test(subdata$hire, subdata$salary)
  r[i] = stats$estimate
  p[i] = stats$p.value
  if (p[i] < .05){
    sig[i] = 1;
  }
}

sub_corrs = data.frame(subids, r,p,sig)
# reorder by r value
sub_corrs = sub_corrs[order(sub_corrs$r),]

# remove subjects with non sig correlations
nonsig = sub_corrs[sub_corrs$sig==0,]
data_good = data[!(data$subN %in% nonsig$subids),]

# plot subject correlations
lastnonsig = nonsig[nrow(nonsig),]$r
ggplot(sub_corrs, aes(seq_along(subids), r)) + 
  geom_bar(stat = "identity") +
  geom_hline(yintercept=lastnonsig, linetype="dashed", color = "red") +
  labs(title='Hire-salary correlation', x='sub', 'y'='r')


# aggregate data
data.mean = aggregate(list(data_good$hire, data_good$salary, data_good$profileTime, data_good$respTime), 
                             by = list(data_good$subN, data_good$resumeType, data_good$photoType), 
                             FUN = 'mean')
colnames(data.mean) = c('sub', 'resumeType', 'photoType', 'hire', 'salary', 'profileTime', 'respTime')


# plot
data.mean$resumeType = factor(data.mean$resumeType,levels = c('low', 'avg', 'high'))
#hire ratings
ggplot(data.mean, aes(resumeType, hire, fill=photoType)) + 
  geom_violin(scale='area') +
  geom_boxplot(width=.1,position = position_dodge(width = 0.9)) +
  scale_y_continuous(breaks = seq(1,9,by=1), limits=c(0,9)) +
  labs('title'='Hire ratings')

ggplot(data.mean, aes(resumeType, hire, fill=photoType)) + 
    geom_bar(stat='summary', fun.y='mean', position='dodge') +
    stat_summary(fun.y = mean,
                 fun.ymin = function(x) mean(x) - sd(x), 
                 fun.ymax = function(x) mean(x) + sd(x), 
                 geom = "errorbar",
                 position=position_dodge(width=.9),
                 width=.1) +
  scale_y_continuous(breaks = seq(1,10,by=1), limits=c(0,9)) +
  labs('title'='Hire ratings', y = 'Hire ratings')

#salary ratings
ggplot(data.mean, aes(resumeType, salary, fill=photoType)) + 
  geom_violin(scale='area') +
  geom_boxplot(width=.1,position = position_dodge(width = 0.9)) +
  labs('title'='Salary ratings')

ggplot(data.mean, aes(resumeType, salary, fill=photoType)) + 
  geom_bar(stat='summary', fun.y='mean', position='dodge') +
  stat_summary(fun.y = mean,
               fun.ymin = function(x) mean(x) - sd(x), 
               fun.ymax = function(x) mean(x) + sd(x), 
               geom = "errorbar",
               position=position_dodge(width=.9),
               width=.1) +
  scale_y_continuous(breaks = seq(0,120000,by=10000), limits=c(0,120000), labels=seq(0,120, by=10)) +
  labs('title'='Salary ratings', y = 'Salary estimates ($1000s)')  
    
# profile time
ggplot(data.mean, aes(resumeType, profileTime, fill=photoType)) + 
  geom_violin(scale='area') +
  geom_boxplot(width=.1,position = position_dodge(width = 0.9)) +
  labs('title'='Time on profile')

ggplot(data.mean, aes(resumeType, profileTime, fill=photoType)) + 
  geom_violin(scale='area') +
  geom_boxplot(width=.1,position = position_dodge(width = 0.9)) +
  scale_y_continuous(limits=c(0,50))
  labs('title'='Time on profile')
  
### REPEATED-MEASURES ANOVA #####
# Hire results
hire.aov <- with(data.mean, aov(hire ~ resumeType * photoType + Error(sub/resumeType)))
summary(hire.aov)

# Salary results
salary.aov <- with(data.mean, aov(salary ~ resumeType * photoType + Error(sub/resumeType)))
summary(salary.aov)

# profile time
profile.aov <- with(data.mean, aov(log(profileTime) ~ resumeType * photoType + Error(sub/resumeType)))
summary(profile.aov)

#### LINEAR MODEL ##############
model1 = lm(hire ~ photoType*resumeType, data = data_good)
summary(model1)

# only random var = subject
lsm.options(lmer.df = 'satterthwaite')
m2 = lmer(hire ~ photoType*resumeType + (1+resumeType|subN), data = data_good)
summary(m2)
m2.coef = coef(m2)
m2.ranef = ranef(m2)
m2.fixef = ranef(m2)
dotplot(ranef(m2, condVar = T))
dotplot(fixef(m2, condVar = T))

m3.hire = lmer(hire ~ photoType*resumeType + 
            (1+resumeType|subN) +
            (1|profile) + 
            (1|photo), 
            data = data_good)
summary(m3.hire)


m3.salary = lmer(salary/10000 ~ photoType*resumeType + 
                 (1+resumeType|subN) +
                 (1|profile) + 
                 (1|photo), 
                 data = data_good)
summary(m3.salary)


m3.coef = coef(m3)
m3.ranef = ranef(m3)
m3.fixef = fixef(m3)

m4 = lmer(hire ~ photoType*resumeType + 
            (1+resumeType|subN) +
            (1|profile),  
          data = data_good)
summary(m4)





###
model3 = lmer(hire ~ photoType*resumeType + (1+resumeType|subN) + (1|profile) +
       (1|photo), data = data)
summary(model3)
anova(model3)


dotplot(ranef(model3, condVar = T))

means = lsmeans(model3, pairwise~resumeType*photoType)
sumtable = data.frame(summary(means$contrasts, infer=c(T,T), adjust = 'fdr'))
sumtable$p.value = round(sumtable$p.value, 4)

inters = data.frame(summary(contrast(means$contrasts, 'pairwise'), adjust = 'none', infer = c(T,T)))
inters[inters$contrast == 'high,incomp - high,comp - low,incomp - low,comp',]
inters[inters$contrast == 'high,comp - high,incomp - avg,comp - avg,incomp',]
inters[inters$contrast == 'high,comp - high,incomp - low,comp - low,incomp',]
