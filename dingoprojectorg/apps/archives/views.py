from django.http import Http404, HttpResponse
from django.shortcuts import render_to_response
from models import Archive

# View archives index #
def archives_index(request):
    return render_to_response('download/download_archives.html', { 'button_id': 'download', 'subpage': 'archives', 'archives_list': Archive.objects.all() })

# View single archive #
def archive_detail(request, major, minor, micro):
    # we need to cast major, minor and micro to int first
    try:
        major_ver = int(major)
    except ValueError:
        raise Http404()
    
    try:
        minor_ver = int(minor)
    except ValueError:
        raise Http404()
    
    try:
        micro_ver = int(micro)
    except ValueError:
        raise Http404()
    
    archive_detail = Archive.objects.get(major=major_ver, minor=minor_ver, micro=micro_ver)
    
    return render_to_response('download/download_archives_detail.html', { 'button_id': 'download', 'subpage': 'archives', 'archives_list': Archive.objects.all(), 'archive_detail': archive_detail, 'archive_release_date': archive_detail.release_date.strftime("%Y-%m-%d").lower() })
