var distroDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
    this.distro = this.searchString(this.dataDistro) || "an unknown distribution";
    this.CPU = this.searchString(this.dataCPU) || "an unknown CPU";
  },

  searchString: function (data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;

      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1)
          return data[i].identity;
      }
        
      else if (dataProp)
        return data[i].identity;
    }
  },

  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
      
    return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
  },

  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome"
    },
      
    {
      string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb"
    },
      
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version"
    },

    {
      prop: window.opera,
      identity: "Opera"
    },

    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab"
    },

    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror"
    },

    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox"
    },

    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino"
    },

    { // for newer Netscapes (6+)
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape"
    },

    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
    },

    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv"
    },

    { // for older Netscapes (4-)
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla"
    }
  ],

  dataDistro: [
    {
      string: navigator.userAgent,
      subString: "Arch",
      identity: "Arch"
    },

    {
      string: navigator.userAgent,
      subString: "CentOS",
      identity: "CentOS"
    },

    {
      string: navigator.userAgent,
      subString: "Debian",
      identity: "Debian"
    },

    {
      string: navigator.userAgent,
      subString: "Fedora",
      identity: "Fedora"
    },

    {
      string: navigator.userAgent,
      subString: "Gentoo",
      identity: "Gentoo"
    },

    {
      string: navigator.userAgent,
      subString: "gOS",
      identity: "gOS"
    },

    {
      string: navigator.userAgent,
      subString: "Kanotix",
      identity: "Kanotix"
    },

    {
      string: navigator.userAgent,
      subString: "Linspire",
      identity: "Linspire"
    },

    {
      string: navigator.userAgent,
      subString: "Mandrake",
      identity: "Mandrake"
    },

    {
      string: navigator.userAgent,
      subString: "Mandriva",
      identity: "Mandriva"
    },

    {
      string: navigator.userAgent,
      subString: "MEPIS",
      identity: "Mepis"
    },

    {
      string: navigator.userAgent,
      subString: "Mint",
      identity: "Mint"
    },

    {
      string: navigator.userAgent,
      subString: "SUSE",
      identity: "SuSE/OpenSuSE"
    },

    {
      string: navigator.userAgent,
      subString: "Red Hat",
      identity: "RedHat"
    },

    {
      string: navigator.userAgent,
      subString: "Sabayon",
      identity: "Sabayon"
    },

    {
      string: navigator.userAgent,
      subString: "sidux",
      identity: "sidux"
    },

    {
      string: navigator.userAgent,
      subString: "slackware",
      identity: "slackware"
    },

    {
      string: navigator.userAgent,
      subString: "slax",
      identity: "slax"
    },

    {
      string: navigator.userAgent,
      subString: "ubuntu",
      identity: "Ubuntu"
    },

    {
      string: navigator.userAgent,
      subString: "Ubuntu",
      identity: "Ubuntu"
    },

    {
      string: navigator.userAgent,
      subString: "xandros",
      identity: "xandros"
    },
  ],

  dataOS: [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows"
    },

    {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac"
    },
      
    {
      string: navigator.userAgent,
      subString: "iPhone",
      identity: "iPhone/iPod"
    },

    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux"
    },
  ],

  dataCPU: [
    {
      string: navigator.userAgent,
      subString: "x86_64",
      identity: "x86_64"
    },

    {
      string: navigator.userAgent,
      subString: "i386",
      identity: "i386"
    },

    {
      string: navigator.userAgent,
      subString: "i486",
      identity: "i486"
    },

    {
      string: navigator.userAgent,
      subString: "i586",
      identity: "i586"
    },

    {
      string: navigator.userAgent,
      subString: "i686",
      identity: "i686"
    },

    {
      string: navigator.userAgent,
      subString: "ppc",
      identity: "ppc"
    },
  ]
};
