#!/bin/bash
#
# Pull current job postings from Lever
#

source .env

curl -su "API_KEY:${LEVER_POSTINGS_API_KEY}" 'https://api.lever.co/v0/postings/ghostsecurity'|jq 
