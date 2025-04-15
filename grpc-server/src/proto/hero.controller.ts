import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { HeroById, Hero } from "./interfaces/hero.interface";

@Controller()
export class HeroController {
    private readonly items: Hero[] = [
        {id: 1, name: 'Superman'},
        {id: 2, name: 'Batman'},
    ];

    @GrpcMethod('HeroService', 'findOne')
    findOne(data: HeroById): Hero {
        const hero = this.items.find(({ id }) => id === data.id);
        if (!hero) {
            throw new Error(`Hero with id ${data.id} not found`);
        }
        return hero;
    }
}