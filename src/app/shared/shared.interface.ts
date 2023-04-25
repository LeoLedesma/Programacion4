export interface Ejercicio{
nombre:string,
uri:string
}

export interface Clase{
    nombre:string,
    uri:string,
    ejercicios:Ejercicio[]
}