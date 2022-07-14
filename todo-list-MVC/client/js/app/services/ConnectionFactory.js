var stores = ['activities'];
var version = 1;
var dbName = 'todolist';

class ConnectionFactory {

    constructor() {
        throw new Error('Não é possível criar instâncias de ConnectionFactory'); //medida de segurança para evitar a chamada de um novo objeto de conxão
    }

    static getConnection(){  //método estático para criar uma conexão
        return new Promise((resolve,reject) => { //retorna uma promise (Promise basicamente é uma função que tem um retorno assíncrono de sucesso e de falha.)

            let openRequest = window.indexedDB.open('todolist',1); //Cria uma variável para requerir a abertura de um banco de dados local, basicamente cria o banco de dados 
                                                                    // ao criar um banco de dados temos 3 retornos, 
            openRequest.onupgradeneeded = e => {                    // primeiro retorno de no caso de alguma estrutura do banco for alterada ou para primeira criação
                console.log(e.target.result)
                ConnectionFactory._createStores(e.target.result);   // retorna a criação do Object Store, que é como se fosse uma tabala de um banco de dados

            }
  
            openRequest.onsuccess = e => {                          // retorna a conexão no caso de sucesso ao acessar o banco de dados,

                resolve(e.target.result);

            };
  
            openRequest.onerror = e => {                           //retorna um erro caso houve alguma falha de conexão

                console.log(e.target.error);

                reject(e.target.error.name);

            };
        })
        
    }

    static _createStores(connection) {                      // método estático para criar um ObjectStore 
        stores.forEach(store => {                           //como passamos uma array de object stores, aqui verificamos se essa "tabela" já existe, 
                                                            // se caso existir ele deleta a tabela antiga e cria uma nova por cima
            if(connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store); //atenção para a ausência de bloco, quando há um bloco
                connection.createObjectStore(store, { autoIncrement: true });                    // é obrigatório o uso de return;
            
        });
    }

}




