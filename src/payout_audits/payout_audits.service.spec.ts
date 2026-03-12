import { Test, TestingModule } from '@nestjs/testing';
import { PayoutAuditsService } from './payout_audits.service';

describe('PayoutAuditsService', () => {
  let service: PayoutAuditsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayoutAuditsService],
    }).compile();

    service = module.get<PayoutAuditsService>(PayoutAuditsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
