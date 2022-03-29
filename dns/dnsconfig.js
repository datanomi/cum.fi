var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');

var CF_PROXY_DEFAULT_ON = { 'cloudflare_proxy_default': 'on' };
var CF_PROXY_OFF = { 'cloudflare_proxy': 'off' }; // Proxy disabled.
var CF_PROXY_ON = { 'cloudflare_proxy': 'on' }; // Proxy enabled.



D('cum.fi', REG_NONE, NO_PURGE, DnsProvider(DNS_CLOUDFLARE),
    A('@', '194.163.165.80', CF_PROXY_OFF),
    A('sprisa', '78.46.100.167', CF_PROXY_OFF),
    AAAA('@', '2a02:c206:2079:3187:0:bad:c0de:cafe', CF_PROXY_OFF),
    CNAME('www', '@'),


    // Example CNAME subdomain
    CNAME('examplesubdomain', 'datanomi.github.io.', CF_PROXY_OFF),

    // Mail 
    TXT('@', 'v=spf1 a:hautaluoma.eu mx -all'),
    MX('@', 1, 'hautaluoma.eu.'),
    TXT('_dmarc', 'v=DMARC1; p=none'),
    TXT('mail._domainkey', 'v=DKIM1; h=sha256; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDU3ErBVn+7+uUhzAn5Dl8tVCYG7DOTj7V2D+OWhhcVqr0LD8IeuKTTUmSlfWQ1yzHdhPE6YWgTwy0+lDzKAmcGrhf1e2J4BxesBOd5eBp1ilohZ4JT5/F3t+dJH61qd8pnom9YVMuAPxVCFQ8rQhL64o2+Zz3EzfQaCJxLW1HU6QIDAQAB')
)
