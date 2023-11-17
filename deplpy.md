# Server Configuration:
### For Certbot (SSL):
    * Install certbot
    * Install the python3-certbox-nginx
    * Renew the certbox ssl configuration 

### Docker-Compose
    * Create a Dockerfile for all the services
    * Create a docker-compose file for integrating them all

### Nginx Configuration
    * Based on path, configure the required server & all must be in "http"

### Must have:
    * Clean URL for accessing the backend & fronend
    * The backend must:
        Not have any port number in the URL
        * Must not be any IP
        * Must not be localhost
        * Must be the domain-name of the organisation or any sub-domain if in other server 
        * port number can come only in nginx
        * The port mapping must be 80:80 or 443:443 for accessing only.