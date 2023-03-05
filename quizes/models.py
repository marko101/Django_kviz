from django.db import models
import random

# Create your models here.

DIFF_CHOICES = (
    ('lako', 'lako'),
    ('srednje', 'srednje'),
    ('tesko', 'tesko'),
)

class Quiz(models.Model):
    name = models.CharField(max_length=120)
    topic = models.CharField(max_length=120)
    number_of_questions = models.IntegerField()
    time = models.IntegerField(help_text="Trajanje kviza u minutima")
    required_score_to_pass = models.IntegerField(help_text="potrebni bodovi u %")
    difficulty = models.CharField(max_length=7, choices=DIFF_CHOICES)

    def __str__(self):
        return f"{self.name}-{self.topic}" 
    
    def get_questions(self):
        questions = list(self.question_set.all())
        random.shuffle(questions) #ova dva reda su ako hoću da se pitanja nasumično ređaju
        #return self.question_set.all()[:self.number_of_questions]
        return questions[:self.number_of_questions]
    
    class Meta:
        verbose_name_plural = 'Quizes'