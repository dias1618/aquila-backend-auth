import { LoginDto } from "src/dtos/login.dto";
import { Usuario } from "src/entities/usuario.entity";
import { getRepository, getManager, Connection } from "typeorm";
import { Injectable } from "@nestjs/common";
import { SignupDto } from "src/dtos/singup.dto";

@Injectable()
export class UsuarioService{

    constructor(private connection:Connection){}

    async get(idUsuario:number):Promise<Usuario>{

        let usuario:Usuario = await getRepository(Usuario).createQueryBuilder('usuario')
            .where("usuario.id = :id", {id: idUsuario})
            .getOne();

        return usuario;
    }

    async login(loginDto:LoginDto){
        const usuarioRepository = await getRepository(Usuario).createQueryBuilder('usuario')
            .where("usuario.login = :login", {login: loginDto.login})
            .andWhere("usuario.senha = :senha", {senha: loginDto.senha})
            .getOne();
        return usuarioRepository;
    }

    async create(signupDto:SignupDto):Promise<Usuario>{
        let usuario:Usuario = new Usuario(signupDto.usuario);
        usuario = await usuario.save();
        return usuario;
        
    }

}