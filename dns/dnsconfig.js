var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');

var CF_PROXY_DEFAULT_ON = { 'cloudflare_proxy_default': 'on' };
var CF_PROXY_OFF = { 'cloudflare_proxy': 'off' }; // Proxy disabled.
var CF_PROXY_ON = { 'cloudflare_proxy': 'on' }; // Proxy enabled.



D('cum.fi', REG_NONE, NO_PURGE, DnsProvider(DNS_CLOUDFLARE),
    A('@', '95.216.12.121', CF_PROXY_OFF),
    A('sprisa', '78.46.100.167', CF_PROXY_OFF),
    A('api', '135.148.149.204', CF_PROXY_OFF),
    AAAA('@', '2a01:4f9:2a:c88::2', CF_PROXY_OFF),
    CNAME('www', '@'),

    // Lukas
    CNAME('lukas', 'LukasDoesDev.gitlab.io.'),
    TXT('_gitlab-pages-verification-code.lukas', 'gitlab-pages-verification-code=c3c613a3943e0e68de586eca09a7e124'),
  
    // Raippa08
    CNAME('rasmus', 'raippa08.github.io.', CF_PROXY_OFF),
  
    // bloodbugs
    CNAME('jgaxr', 'bloodbugs.github.io.', CF_PROXY_OFF),
  
    // Example CNAME subdomain
    CNAME('examplesubdomain', 'datanomi.github.io.', CF_PROXY_OFF),

    // Mail 
    TXT('@', 'v=spf1 a:mx.mha.fi mx -all'),
    MX('@', 1, 'mx.mha.fi.'),
    TXT('_dmarc', 'v=DMARC1;p=reject;rua=mailto:dmarc@mha.fi;ruf=mailto:dmarc@mha.fi;fo=1'),
    TXT('mail._domainkey', 'v=DKIM1; k=rsa; t=s; s=email; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsg6UQF4rcOK0jfpDDdu2FXi9IRTNH0l414xzcOkGAOfHCDJsCC/J2RaaTO0mfQ9q1RR/Wum/u4wXKnwBsprdlhXxDh1zI+e1JOcZgGhX89l624PGsudUJLu7T1v/UwXvUa4bcC+s00Du1NfmlC1XJyCxBYMY0N22AEL8Jfhz3bKI6UE9yNFQXsCzn+5QMEQ6kYyGWnffbagyZPjFY0A5mpwjsqwwcV/EH+x2CUtWFek1AB1dx3o6BmM62IcUZCchfJluNT6H7XiIaqzuT/Uf1v5S1u8PfRUgb/SjvHmm+kOsvE09rb+y5MXETrGJdCtgWm5vDkVhNyCQ/G6LlBQu9QIDAQAB')
)
