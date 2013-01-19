from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

from dingoprojectorg.views import *

urlpatterns = patterns('',
    (r'^$', home_page_view),
    (r'^about/$', about_page_view),
    (r'^about/(?P<subpage>.*)/$', about_subpage_view),
    (r'^screenshots/$', screenshots_page_view),
    (r'^contribute/$', contribute_page_view),
    (r'^contribute/(?P<subpage>.*)/$', contribute_subpage_view),
    (r'^help/$', help_page_view),
    (r'^help/(?P<subpage>.*)/$', help_subpage_view),
    # Examples:
    # url(r'^$', 'dingoprojectorg.views.home', name='home'),
    # url(r'^dingoprojectorg/', include('dingoprojectorg.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    
    (r'^download/$', download_page_view),
    (r'^download/archives/$', 'archives.views.archives_index'),
    (r'^download/archives/(?P<major>\d+).(?P<minor>\d+).(?P<micro>\d+)/$', 'archives.views.archive_detail'),
    (r'^download/(?P<subpage>.*)/$', download_subpage_view),
    # (r'^search$', 'search.views.search'),
    # (r'^weblog/$', 'coltrane.views.entries_index'),
    # (r'^weblog/(?P<year>\d{4})/(?P<month>\w{3})/(?P<day>\d{2})/(?P<slug>[-\w]+)/$', 'coltrane.views.entry_detail'),
    # (r'', include('django.contrib.flatpages.urls')),
)
