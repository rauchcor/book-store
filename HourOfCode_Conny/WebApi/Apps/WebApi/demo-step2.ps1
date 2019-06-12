(git checkout demo/step2-securitykonfiguration) | Out-Null
echo "docker build -t experts/demo-webapi --build-arg CERTIFICATE_PASSWORD=expertslive ."
docker build -t experts/demo-webapi --build-arg CERTIFICATE_PASSWORD=expertslive .
if((docker ps -q -f name=demo).count -ne 0) { docker stop demo }
echo "docker run -d --rm --name demo -p 443:443 experts/demo-webapi"
docker run -d --rm --name demo -e CAR=Tesla -p 443:443 experts/demo-webapi