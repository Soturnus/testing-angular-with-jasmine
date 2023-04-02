"Our job is to build and deliver real working software, our job is to deliver value to world"


Anotações e pensamentos sob estudo de testes em Angular

Automação de teste é o uso de software para controlar a execução do teste de software, a comparação dos resultados esperados com os resultados reais, a configuração das pré-condições de teste e outras funções de controle e relatório de teste.

function calculate(input) {
    if (x) return ...;
    else if (y) return ...;
    return ...;
}

acima temos um exemplo de uma função que calcularia o retorno de um valor dependendo da entrada do dado na função, sem 
teste automatizado poderia levar até minutos para testar pois em muitos casos precisariamos fazer login na aplicação, acessar
algumas telas, para chegar no metodo que chamaria essa função, atravez de testes poderiamos testar essa função apenas chamando calculate(x), calculate(y) diretamente, o que reduziria o tempo para testarmos o codigo. 

Agora uma reflexão é que testes não são uma formula magica, talvez não seja interessante aplicar testes em produtos incertos ou imaturos, quando temos certeza do sucesso do produto, é ideal que façamos testes, quando estamos apenas criando algo como teste talvez não tenha tanta valia testar algo que talvez nem chegue a ser usado, e em sistemas maiores talvez o interessante seria testar apenas aquilo que levaria um tempo maior testando manualmente.

