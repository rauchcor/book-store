echo "docker stop `$(docker ps -q)"
docker stop $(docker ps -q)
echo "docker rm `$(docker ps -a -q)"
docker rm $(docker ps -a -q)