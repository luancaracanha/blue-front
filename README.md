# blue-front
### **Projeto corresponde ao front-end para um sistema de votação pública.**

**instruções para rodar aplicação blue-front local no docker.**

**Após já ter realizado o git clone do projeto, abrir 
o prompt de comando e seguir até a raiz do projeto.
executar o comando: npm install**

**Ao finalizar, executar o comando: ng build**

**Ao finalizar, seguir até a pasta docker que se encontra 
na raiz do projeto, executar o comando: docker build -t blue .**

**Ao finalizar, verificar se a porta 8880 está disponível, 
pois iremos utilizá-la com o próximo comando,
executar o comando: docker run -p 8880:80 --name blue2 -P -d blue**

**Ao finalizar, acessar a aplicação em: localhost:8880
Lembrando que para comunicação com o back-end o projeto blue-back
deve estar configurado e já estartado.**
