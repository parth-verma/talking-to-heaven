from django.db import models


# Create your models here.

class Reading(models.Model):
    name = models.CharField(max_length=256)
    price = models.FloatField()
    image = models.ImageField(upload_to='readings')
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'reading'

    def __str__(self):
        return self.name.upper()
