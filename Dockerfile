FROM fotengauer/altlinux-p8

ENV LANG ru_RU.UTF-8

RUN export http_proxy=$http_proxy;\
  apt-get update && \
  apt-get install -y mc less net-tools bind-utils tcpdump nmap telnet strace lsof wget glibc-locales; \
  echo -ne "LANG=ru_RU.UTF-8\nSUPPORTED=ru_RU.UTF-8\n" >/etc/sysconfig/i18n; \
  rm -f /var/cache/apt/archives/*.rpm /var/cache/apt/*.bin /var/lib/apt/lists/*.*; \
  bzip2 -9 /var/lib/rpm/*

CMD /bin/bash