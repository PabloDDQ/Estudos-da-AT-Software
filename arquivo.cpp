#include <iostream>
using namespace std;

int main(){
    // Matriz de Exemplo A
    int matrizTeste[2][2];

    matrizTeste[0][0] = 2;
    matrizTeste[0][1] = 3;
    matrizTeste[1][0] = 4;
    matrizTeste[1][1] = 7;

    // Exibindo a Matriz A
    cout << "Matriz A: " << endl;
    for (int i = 0; i < 2; ++i){
        for (int j = 0; j < 2; ++j){
            cout << matrizTeste[i][j] << " ";
        }
        cout << endl;
    }

    // Matriz identidade
    int matrizIdentidade[2][2];

    matrizIdentidade[0][0] = 1;
    matrizIdentidade[0][1] = 0;
    matrizIdentidade[1][0] = 0;
    matrizIdentidade[1][1] = 1;

    cout << "Matriz identidade: " << endl;
    for (int p = 0; p < 2; ++p){
        for (int l = 0; l < 2; ++l){
            cout << matrizIdentidade[p][l] << " ";
        }
        cout << endl;
    }

    // Definindo a matriz A original
    int A[2][2] = {{2, 3}, {4, 7}}; // Matriz A

    // Escolhendo o pivô (A11)
    int pivou11 = A[0][0]; // Pivô = A11 = 2

    // Calculando o multiplicador m
    double multiplicador = (double)A[1][0] / pivou11;

    // Exibindo o valor do multiplicador
    cout << "Multiplicador (m): " << multiplicador << endl;

    A[1][0] = A[1][0] - multiplicador * A[0][0];
    A[1][1] = A[1][1] - multiplicador * A[0][1];

    cout<< "Matriz U (apos escalonamento): "<<endl;
    for (int i = 0; i < 2; ++i){
        for (int j = 0; j < 2; ++j){
            cout << A[i][j] << " ";
        }
        cout << endl;
    }






    return 0;
}
