# cum.fi
This repo contains the domains website code and DNS.

# Adding a subdomain
Anyone is free to add a subdomain. Follow the instructions below.

Modify the file under dns/dnsconfig.js and submit a pull request. I will approve PR's as they come.

CF_PROXY_OFF bypasses Cloudflare's proxy

CF_PROXY_ON (default if no option is given) enables Cloudflare's proxy. Please note that your host needs to have a SSL certificate (Self-signed certs work too.)

HTTP is not supported, due to the root domain having HSTS.

Examples:

CNAME record with Cloudflare's proxy off
```js
CNAME('examplesubdomain', 'example.com.', CF_PROXY_OFF),
```
A record with Cloudflare's proxy on
```js
A('examplesubdomain', '1.1.1.1', CF_PROXY_ON),
```

MX record for a subdomain, 1 is the priority
```js
MX('examplesubdomain', 1, 'examplemailserver.org'),
```
