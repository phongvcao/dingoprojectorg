from django.contrib import admin
from archives.models import Archive

class ArchiveAdmin(admin.ModelAdmin):
    class Media:
        js = ('http://127.0.0.1:8000/static/include/tiny_mce/tiny_mce.js', 'http://127.0.0.1:8000/static/jquery/admin_textareas.js')
    
    model = Archive

admin.site.register(Archive, ArchiveAdmin)
