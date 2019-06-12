if((docker ps -q -f name=demo).count -ne 0) { docker stop demo }
echo "docker run -d --rm --name demo -p 443:443 -e CAR=Tesla docker.io/fr0cker/expertslive-dotnet-webapi:latest"
docker run -d --rm --name demo -p 443:443 -e CAR=Tesla docker.io/fr0cker/expertslive-dotnet-webapi:latest