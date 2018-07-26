export class User{
  constructor(
    public idUsuario: number,
    public userName: string,
    public password: string,
    public tipo: number,
    public idEmpleado: number,
    public sucursal: number,
    public foto: string
  ){}
}
