import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { ProdutoController } from "./controllers/produto.controller";
import { CategoriaModule } from "src/categoria/categoria.module";
import { ProdutoService } from "./services/produto.service";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule {}