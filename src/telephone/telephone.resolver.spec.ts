import { Test, TestingModule } from '@nestjs/testing';
import { TelephoneResolver } from './telephone.resolver';
import { TelephoneService } from './telephone.service';

describe('TelephoneResolver', () => {
  let resolver: TelephoneResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelephoneResolver, TelephoneService],
    }).compile();

    resolver = module.get<TelephoneResolver>(TelephoneResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
