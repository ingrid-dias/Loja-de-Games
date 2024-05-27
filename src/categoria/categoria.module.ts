import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./services/categoria.service";
import { CategoriaController } from "./controllers/categoria.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Categoria]), /*TemaModule*/],
    providers: [CategoriaService, /*TemaService*/],
    controllers: [CategoriaController],
    exports: [TypeOrmModule]
})

export class CategoriaModule { }