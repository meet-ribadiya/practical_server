import { Test, TestingModule } from '@nestjs/testing';
import { PayoutAuditsController } from './payout_audits.controller';
import { PayoutAuditsService } from './payout_audits.service';

describe('PayoutAuditsController', () => {
  let controller: PayoutAuditsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayoutAuditsController],
      providers: [PayoutAuditsService],
    }).compile();

    controller = module.get<PayoutAuditsController>(PayoutAuditsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
