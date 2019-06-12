docker stop webapi-prod
echo "docker run -d --rm --name webapi-prod -p 8443:443 -e DBPASSWORD=3xp3rtsL!ve docker.io/fr0cker/expertslive-dotnet-webapi:latest"
docker stop webapi-prod | Out-Null
docker run -d --rm --name webapi-prod -p 8443:443 -e CAR=Tesla docker.io/fr0cker/expertslive-dotnet-webapi:latest