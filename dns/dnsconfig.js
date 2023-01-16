var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');

var CF_PROXY_DEFAULT_ON = { 'cloudflare_proxy_default': 'on' };
var CF_PROXY_OFF = { 'cloudflare_proxy': 'off' }; // Proxy disabled.
var CF_PROXY_ON = { 'cloudflare_proxy': 'on' }; // Proxy enabled.



D('cum.fi', REG_NONE, NO_PURGE, DnsProvider(DNS_CLOUDFLARE),
    A('@', '83.171.249.81', CF_PROXY_ON),
    A('sprisa', '78.46.100.167', CF_PROXY_OFF),
    A('api', '135.148.149.204', CF_PROXY_OFF),
    AAAA('www', '100::', CF_PROXY_ON),

    // BastelPichi
    NS('pichi', 'ns1.he.net.'),
    NS('pichi', 'ns2.he.net.'),
    NS('ilike', 'ns1.he.net.'),
    NS('ilike', 'ns2.he.net.'),
    NS('bastelpichi', 'ns1.he.net.'),
    NS('bastelpichi', 'ns2.he.net.'),
  
    // Lukas
    CNAME('lukas', 'LukasDoesDev.gitlab.io.'),
    TXT('_gitlab-pages-verification-code.lukas', 'gitlab-pages-verification-code=c3c613a3943e0e68de586eca09a7e124'),

    // BloodBugs
    CNAME('bloodbugs', 'bloodbugs.github.io.', CF_PROXY_OFF),
    CNAME('jgaxr', 'bloodbugs.github.io.', CF_PROXY_OFF),
    TXT('_github-pages-challenge-BloodBugs', '6e52b981e85fd486fa328ea0038daf'),
  
    // Raippa08
    CNAME('rasmus', 'raippa08.github.io.', CF_PROXY_OFF),

    // unnerving duck
    CNAME('unnervingduck', 'unnervingduck.github.io.', CF_PROXY_ON),
    TXT('_github-pages-challenge-unnervingduck.unnervingduck', 'c227f31f380988192c237d870e4844'),
    
    // Example CNAME subdomain
    CNAME('examplesubdomain', 'datanomi.github.io.', CF_PROXY_OFF),

    // Mail 
    TXT('@', 'v=spf1 mx -all'),
    MX('@', 1, 'mx.mha.fi.'),
    TXT('_dmarc', 'v=DMARC1;p=reject;rua=mailto:dmarc@mha.fi;ruf=mailto:dmarc@mha.fi;fo=1'),
    TXT('dkim._domainkey', 'v=DKIM1;k=rsa;t=s;s=email;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsg6UQF4rcOK0jfpDDdu2FXi9IRTNH0l414xzcOkGAOfHCDJsCC/J2RaaTO0mfQ9q1RR/Wum/u4wXKnwBsprdlhXxDh1zI+e1JOcZgGhX89l624PGsudUJLu7T1v/UwXvUa4bcC+s00Du1NfmlC1XJyCxBYMY0N22AEL8Jfhz3bKI6UE9yNFQXsCzn+5QMEQ6kYyGWnffbagyZPjFY0A5mpwjsqwwcV/EH+x2CUtWFek1AB1dx3o6BmM62IcUZCchfJluNT6H7XiIaqzuT/Uf1v5S1u8PfRUgb/SjvHmm+kOsvE09rb+y5MXETrGJdCtgWm5vDkVhNyCQ/G6LlBQu9QIDAQAB')
)
