import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorsModule } from './vendors/vendors.module';
import { PayoutsModule } from './payouts/payouts.module';
import { PayoutAuditsModule } from './payout_audits/payout_audits.module';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, // This makes it available everywhere
      envFilePath: '.env',
     }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    UsersModule,
    VendorsModule,
    PayoutsModule,
    PayoutAuditsModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
