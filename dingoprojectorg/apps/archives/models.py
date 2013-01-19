from django.db import models
import datetime

class Archive(models.Model):
    major = models.IntegerField(help_text="Major version of Dingo")
    minor = models.IntegerField(help_text="Minor version of Dingo")
    micro = models.IntegerField(help_text="Micro version of Dingo")
    release_date = models.DateTimeField(default=datetime.datetime.now, unique=True, help_text="Release date of the version")
    capture = models.TextField(help_text="Short summary for this release")
    new_features = models.TextField(help_text="List of new features", blank=True)
    other_enhancements = models.TextField(help_text="List of other enhancements", blank=True)
    notable_bug_fixes = models.TextField(help_text="List of notable bug fixes along with links (if available), separated by newline")
    total_bug_fixes = models.IntegerField(help_text="Total number of bug fixes since the last release")
    dependencies = models.TextField(help_text="List of dependencies, separated by newline")
    developers = models.TextField(help_text="List of contributors, separated by comma", blank=True)
    translators = models.TextField(help_text="List of translators, separated by comma", blank=True)
    designers = models.TextField(help_text="List of designers, separated by comma", blank=True)
    
    class Meta:
        ordering = ['-major', '-minor', '-micro']
        verbose_name_plural = "Archives"
    
    def __unicode__(self):
        return "Dingo %(major)d.%(minor)d.%(micro)d" % { "major": self.major, "minor": self.minor, "micro": self.micro }
    
    def get_absolute_url(self):
        return "/archives/%(major)d.%(minor)d.%(micro)d/" % { "major": self.major, "minor": self.minor, "micro": self.micro }
    
    def get_prev_contributors(self):
        developers_list = ', '.join(Archive.objects.filter((models.Q(major__exact=self.major) & models.Q(minor__exact=self.minor) & models.Q(micro__lt=self.micro)) | (models.Q(major__exact=self.major) & models.Q(minor__lt=self.minor)) | models.Q(major__lt=self.major)).values_list('developers', flat=True)).replace('<p class=\"text-content\">', '').replace('</p>', ', ')[:-2].split(', ')
        
        translators_list = ', '.join(Archive.objects.filter((models.Q(major__exact=self.major) & models.Q(minor__exact=self.minor) & models.Q(micro__lt=self.micro)) | (models.Q(major__exact=self.major) & models.Q(minor__lt=self.minor)) | models.Q(major__lt=self.major)).values_list('translators', flat=True)).replace('<p class=\"text-content\">', '').replace('</p>', ', ')[:-2].split(', ')
        
        designers_list = ', '.join(Archive.objects.filter((models.Q(major__exact=self.major) & models.Q(minor__exact=self.minor) & models.Q(micro__lt=self.micro)) | (models.Q(major__exact=self.major) & models.Q(minor__lt=self.minor)) | models.Q(major__lt=self.major)).values_list('designers', flat=True)).replace('<p class=\"text-content\">', '').replace('</p>', ', ')[:-2].split(', ')
        
        seen = set()
        prev_contributors_str = ', '.join([ x for x in developers_list + translators_list + designers_list if x not in seen and not seen.add(x) ])
        
        if prev_contributors_str:
            return '<p class=\"text-content\">' + prev_contributors_str + '</p>'
