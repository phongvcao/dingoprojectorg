from django.contrib import admin
from archives.models import Archive

class ArchiveAdmin(admin.ModelAdmin):
    class Media:
        js = ('/static/include/tiny_mce/tiny_mce.js', '/static/jquery/admin_textareas.js')
    
    model = Archive

admin.site.register(Archive, ArchiveAdmin)
