(git checkout demo/step1-minloghealth) | Out-Null
echo "docker build -t experts/demo-webapi ."
docker build -t experts/demo-webapi .
if((docker ps -q -f name=demo).count -ne 0) { docker stop demo }
echo "docker run -d --rm --name demo -p 80:80 experts/demo-webapi"
docker run -d --rm --name demo -p 80:80 experts/demo-webapi