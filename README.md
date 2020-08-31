# front-tic-tac-toe
Frontend for tic tac toe games. Runs at post 8999:8080

# Docker Setup:
1. git clone https://github.com/dmsbilas/front-tic-tac-toe.git
2. cd front-tic-tac-toe (location where package.json file resides)
3. docker build -t front-tic .
4. docker run -it -p 8999:8080 front-tic

   The project will start running at http://0.0.0.0:8999 port


# Regular Setup:
1. git clone https://github.com/dmsbilas/front-tic-tac-toe.git
2. cd front-tic-tac-toe (location where package.json file resides)
3. npm install
4. npm start
5. The project will start running at http://0.0.0.0:8080/
