from django.http import Http404, HttpResponse
from django.shortcuts import render_to_response
from archives.models import Archive

# Home #
def home_page_view(request):
    return render_to_response("home/home.html", { "button_id": "home" })

# About #
def about_page_view(request):
    return render_to_response("about/about.html", { "button_id": "about" })

def about_subpage_view(request, subpage):
    if subpage in ("contact", "license"):
        return render_to_response("about/about_" + subpage + ".html", { "button_id": "about", "subpage": subpage })
    else:
        raise Http404()

# Screenshots #
def screenshots_page_view(request):
    return render_to_response("screenshots/screenshots.html", { "button_id": "screenshots" })

# Download #
def download_page_view(request):
    return render_to_response("download/download.html", { "button_id": "download", "subpage": "stable" })

def download_subpage_view(request, subpage):
    if subpage in ("stable", "development"):
        return render_to_response("download/download_" + subpage + ".html", { "button_id": "download", "subpage": subpage })
    else:
        raise Http404()

# Contribute #
def contribute_page_view(request):
    return render_to_response("contribute/contribute.html", { "button_id": "contribute" })

def contribute_subpage_view(request, subpage):
    if subpage in ("report-bugs", "translate", "design-icons", "write-code"):
        return render_to_response("contribute/contribute_" + subpage + ".html", { "button_id": "contribute", "subpage": subpage })
    else:
        raise Http404()

# Help #
def help_page_view(request):
    return render_to_response("help/help.html", { "button_id": "help" })

def help_subpage_view(request, subpage):
    if subpage in ("faq"):
        return render_to_response("help/help_" + subpage + ".html", { "button_id": "help", "subpage": subpage })
    else:
        raise Http404()
