import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface HeroService {
  FindOne(data: { id: number }): Observable<any>;
}

@Controller()
export class AppController implements OnModuleInit {
  private heroService: HeroService;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  @Get()
  getHero(): Observable<any> {
    return this.heroService.FindOne({ id: 1 });
  }
}