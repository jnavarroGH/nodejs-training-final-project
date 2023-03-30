#!/bin/sh 

# echo "***** Installing all dependencies *****"
yarn

echo "***** Starting MongoDB instance *****"
docker compose up -d

echo "***** Creating profile *****"

aws configure set aws_access_key_id test --profile=default
aws configure set aws_secret_access_key test --profile=default
aws configure set region us-east-1 --profile=default

echo "***** Listing profile *****"
aws configure list --profile=default

echo "***** Running the app *****"
yarn start:dev
