public class TipagemDinamica {
    public static void main(String[] args) {
        int meuNumero = 10;
        meuNumero = "Texto";
        System.out.printIn(meuNumero);
    }
}


// resultado da execução (java)
    
// 2-tipagem-dinamica.java:4: error: incompatible types: String cannot be converted to int
//         meuNumero = "Texto";
//                     ^
// 2-tipagem-dinamica.java:5: error: cannot find symbol
//         System.out.printIn(meuNumero);
//                   ^


