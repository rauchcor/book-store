docker pull docker.io/fr0cker/expertslive-dotnet-webapi:latest
docker pull docker.io/fr0cker/expertslive-dotnet-webapi:test-latest

git checkout demo/step1-minloghealth
git pull
docker build -t experts/step1-demo-webapi .

git checkout demo/step2-securitykonfiguration
git pull
docker build -t experts/step2-demo-webapi --build-arg CERTIFICATE_PASSWORD=expertslive .

git checkout demo/step3-opt
git pull
docker build -t experts/step3-demo-webapi --build-arg CERTIFICATE_PASSWORD=expertslive .

git checkout master
git pull
docker build -t experts/master-demo-webapi --build-arg CERTIFICATE_PASSWORD=expertslive .